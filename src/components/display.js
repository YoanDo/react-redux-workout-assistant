import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggle_run } from '../actions/indexAction';

 class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
          trackCount: 0,
          remainingTime: 0,
          loopDone: 1,
        }

        this.launchExercise = this.launchExercise.bind(this)
        this.countDown = this.countDown.bind(this)
    };

    componentDidUpdate(prevProps) {
      if (this.props.running !== prevProps.running && this.props.running) {
        this.launchExercise();
      }
    }

    resetStates(){
      this.setState({ trackCount: 0, loopDone: 1, on: false });
      this.props.toggle_run();
    }

    countDown(restart){
      if (this.state.remainingTime -1 >= 0){
        this.setState({ remainingTime: this.state.remainingTime - 1 });
        setTimeout(function(){ this.countDown(restart) }.bind(this), 1000)
      }else if(restart){
        this.launchExercise()
      }else{
        this.start()
      }
      console.log(this.state.remainingTime)
    }

    start() {
      const trackCount = this.state.trackCount;
      const loopDone = this.state.loopDone;
      const exerciseTime = this.props.time + 1;
      const restTime = this.props.rest +1;
      const audioNext = new Audio('https://res.cloudinary.com/dyub4bz6x/video/upload/v1539530167/sounds/next_exercise.mp3');
      const audioCongrats = new Audio('https://res.cloudinary.com/dyub4bz6x/video/upload/v1539529922/sounds/congratulation.mp3')
      const audioRest = new Audio('https://res.cloudinary.com/dyub4bz6x/video/upload/v1539531176/sounds/time_to_rest.mp3')
      console.log(this.state.trackCount, this.state.on );
      this.setState({ trackCount: trackCount +1});
      if (trackCount < this.props.serie && this.state.on){
        if (trackCount > 0){
          audioNext.play()
        }
        this.setState({ remainingTime: exerciseTime })
        this.countDown(false);
      } else {
        if(loopDone == this.props.loop){
          if (this.state.on){
            audioCongrats.play();
          }
          this.resetStates();
        }
        if (trackCount === this.props.serie && loopDone < this.props.loop){
          if(restTime !== 0){
            audioRest.play()
            this.setState({ remainingTime: restTime})
            this.countDown(true);
            this.setState({ loopDone: loopDone +1, trackCount: 0 });
          }
          else{
            this.launchExercise()
          }
        }
      }
    }

    launchExercise(){
      const audioGetReady = new Audio("https://res.cloudinary.com/dyub4bz6x/video/upload/v1539540139/sounds/get_ready.mp3")
      console.log('start', this.state)
      this.setState({ on: true });
      audioGetReady.play()
      setTimeout(function(){ this.start() }.bind(this),6000);
    }

    render(){
        return(
          <div className="flex-column">
          <h1>here:{ this.state.remainingTime }</h1>
          </div>
    )}
}

export default connect(
   state => ({
       time: state.time,
       serie: state.serie,
       rest: state.rest,
       loop: state.loop,
       running: state.running
   }),
   dispatch => ({
      toggle_run: bindActionCreators(toggle_run, dispatch),
   })
)(Display);

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { toggle_runner } from '../actions/indexAction';

 class Runner extends Component{
    constructor(props){
        super(props);
        this.state = {
          standBy: false,
          count: 0,
          loopDone: 1,
          on: false
        }
        let {label, min, max, defaultValue, round, running} = this.props;
        this.label = label;
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        this.running= running;
    };

    resetStates(){
      this.setState({ count: 0, loopDone: 1, on: false })
    }

    alert() {
      const count = this.state.count;
      const loopDone = this.state.loopDone;
      const exerciseTime = this.props.time * 1000;
      const restTime = this.props.rest * 1000;
      const audioNext = new Audio('https://res.cloudinary.com/dyub4bz6x/video/upload/v1539530167/sounds/next_exercise.mp3');
      const audioCongrats = new Audio('https://res.cloudinary.com/dyub4bz6x/video/upload/v1539529922/sounds/congratulation.mp3')
      const audioRest = new Audio('https://res.cloudinary.com/dyub4bz6x/video/upload/v1539531176/sounds/time_to_rest.mp3')
      console.log(this.state.count, this.state.on );
      this.setState({ count: count +1});
      if (count < this.props.serie && this.state.on){
        if (count > 0 ){
          audioNext.play()
        }
        setTimeout(function(){ this.alert() }.bind(this), exerciseTime)
      } else {
        if(loopDone == this.props.loop){
        this.resetStates();
          if (this.state.on){
            audioCongrats.play();
          }
        }else{
          this.setState({ loopDone: loopDone +1, count: 0 });
          if(restTime !== 0){
            audioRest.play()
            setTimeout(function(){ this.launchExercise() }.bind(this), exerciseTime)
          }else{
            this.launchExercise()
          }
        }
      }
    }

    launchExercise(){
      this.setState({ on: true });
      const audioGetReady = new Audio('https://res.cloudinary.com/dyub4bz6x/video/upload/v1539529663/sounds/get_ready.mp3')
      audioGetReady.play()
      setTimeout(function(){ this.alert() }.bind(this),2500);
    }

    render(){
        return(
          <div className="">
          { this.state.on  ?
            <button onClick={  () => this.resetStates() }> <p>STOP</p></button>
            : <button onClick={  () =>  this.launchExercise() }> <p>START</p> </button>
          }
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
      toggle_runner: bindActionCreators(toggle_runner, dispatch),
   })
)(Runner);

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {} from '../actions/indexAction';  //👈👈👈 to set

 class Runner extends Component{
    constructor(props){
        super(props);

        let {label, min, max, defaultValue} = this.props;
        this.label = label;
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        this.state = { round: 0, running: false}
    };

    oneMoreRound(){
      let newRound = this.state.round +=1
      this.setState({round: newRound})
      console.log(this.state.round)
    }

    resetRound(){
      let newRound = 0
      this.setState({round: newRound, running: !this.state.running});
      console.log(this.state)
    }

    alert() {
      console.log('start')
      let series = this.props.serie
      var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
        if (this.state.round < series){
          audio.play();
          this.oneMoreRound();
          setTimeout(function(){ this.alert(); }.bind(this), this.props.time*1000);
        }
      // return console.log('the end')
    }

    launchExercise(){
      this.resetRound();
      this.alert();
      this.setState({running: false})
    }

    render(){
      console.log(this.props)
        return(
          <div className="">
          <button onClick={ () =>  this.launchExercise() }>TOP À LA VACHETTE</button>
          <p onClick={ () => this.resetRound() }>reset</p>
          </div>
    )}
}

export default connect(
   state => ({
       time: state.time,
       serie: state.serie,
       rest: state.rest,
       loop: state.loop
   }),
   dispatch => ({
        // change_display_value: bindActionCreators(change_display_value, dispatch),
        // change_operation: bindActionCreators(change_operation, dispatch),
        // set_operand: bindActionCreators(set_operand, dispatch),
        // set_operator: bindActionCreators(set_operator, dispatch),
        // clear: bindActionCreators(clear, dispatch)
   })
)(Runner);

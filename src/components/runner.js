import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { toggle_runner, one_more_round } from '../actions/indexAction';

 class Runner extends Component{
    constructor(props){
        super(props);

        let {label, min, max, defaultValue, round, running} = this.props;
        this.label = label;
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        this.round = round;
        this.running= running;
    };

    alert() {
      let maxRound = this.props.serie;
      let actualRound= this.props.round;
      let on = this.props.running;
      var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
      // this.props.round < series
      console.log( on, actualRound, maxRound )
        if ( on && actualRound < maxRound ){
          this.props.one_more_round();
          console.log('start');
          audio.play();
          setTimeout(function(){ this.alert(); }.bind(this), this.props.time*1000);
        }else{
          this.props.toggle_runner()
          console.log('the end')
        }
    }

    launchExercise(){
      this.props.toggle_runner();
      setTimeout(function(){ this.alert() }.bind(this), 1000);
    }

    render(){
      console.log(this.props)
        return(
          <div className="">
            <button onClick={ () =>  this.launchExercise() }>{ this.props.running ? <p>STOP</p> : <p>TOP À LA VACHETTE</p>}</button>
          </div>
    )}
}

export default connect(
   state => ({
       time: state.time,
       serie: state.serie,
       rest: state.rest,
       loop: state.loop,
       round: state.round,
       running: state.running
   }),
   dispatch => ({
      toggle_runner: bindActionCreators(toggle_runner, dispatch),
      one_more_round: bindActionCreators(one_more_round, dispatch)
        // change_display_value: bindActionCreators(change_display_value, dispatch),
        // change_operation: bindActionCreators(change_operation, dispatch),
        // set_operand: bindActionCreators(set_operand, dispatch),
        // set_operator: bindActionCreators(set_operator, dispatch),
        // clear: bindActionCreators(clear, dispatch)
   })
)(Runner);

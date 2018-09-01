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
    };
    go(){
      var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
      audio.play();
      console.log('yeeew');
      // setTimeout(function(){go()}.bind(this),this.time*1000)
      // let x = 0;
      // while ( x < serie){
      //     audio.play();
      //     setTimeout(function(){console.log('yeww')}.bind(this),time*1000);
      //     console.log('end');
      //
      // }
    }


    do() {
      let series = this.props.serie
      let n = 0;
      var audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
      console.log(n);
      repeat(){
        if (n < series){
          n +=1;
          audio.play();
          setInterval(function(){this.repeat()}.bind(this),this.time*1000)
        }
      }
      console.log('end')
    }

    render(){
        return(
          <div className="">
          <button onClick={() => this.repeat()}>TOP À LA VACHETTE</button>
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

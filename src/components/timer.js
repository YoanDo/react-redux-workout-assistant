import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {} from '../actions/indexAction';  //👈👈👈 to set

 class Timer extends Component{
    constructor(props){
        super(props);

        let {label, min, max, defaultValue} = this.props;
        this.label = label;
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        // this.domain = domain;
    };

    render(){
      // console.log('here', this.props, '& state', this.state)
      let label = this.label
        return(
        <div className="timer">
          <form>
            <label>
              <p>{label}:</p>
              <input type="number" min={this.min} max={this.max} defaultValue={this.props[label]}/>
            </label>
          </form>
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
)(Timer);

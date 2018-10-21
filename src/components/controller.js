import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { update_value } from '../actions/indexAction';

class Controller extends Component{
    constructor(props){
        super(props);
        let {label, min, max, update_value } = this.props;
        this.label = label;
        this.min = min;
        this.max = max;
        this.update_value = update_value
        this.increaseValue = this.increaseValue.bind(this)
        this.decreaseValue = this.decreaseValue.bind(this)
    };

    increaseValue(){
      let newValue = this.props[this.label] + this.min;
      if (newValue > this.max) {
        newValue = this.max
      }
      this.update_value( this.props.label, newValue)
    }

    decreaseValue(){
      let newValue = this.props[this.label] - this.min;
      if (newValue < this.min) {
        newValue = this.min
      }
      this.update_value( this.props.label, newValue)
    }

    render(){
      let label = this.label
        return(
        <div className="domain">
          <h1 className="">{label}</h1>
          <p>What is your objective ? Set your exercise blablabla duration</p>
          <div className="flex-row controller">
            <div className="ctrl-button" onClick={ this.decreaseValue }>-</div>
            <div className="display flex-row">{ this.props[label]}</div>
            <div className="ctrl-button" onClick={ this.increaseValue } >+</div>
          </div>
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
      update_value: bindActionCreators(update_value, dispatch)
   })
)(Controller);

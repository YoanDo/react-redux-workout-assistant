import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { update_value } from '../actions/indexAction';  //👈👈👈 to set

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
        let {label, min, max, defaultValue} = this.props;
        this.label = label;
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
      this.props.update_value( this.props.label, event.target.value)
    }

    render(){
      let label = this.label
        return(
        <div className="timer">
          <form>
            <label>
              <p>{label}:</p>
              <input type="number" min={ this.min } max={ this.max } defaultValue={ this.props[label] } onChange={ this.handleChange }/>
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
      update_value: bindActionCreators(update_value, dispatch)
   })
)(Timer);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { update_value } from '../actions/indexAction';

class Controller extends Component{
    constructor(props){
        super(props);
        this.state = {
          value: 0,
        }
        let {label, min, max, defaultValue} = this.props;
        this.label = label;
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        this.handleChange = this.handleChange.bind(this);
        this.increaseValue = this.increaseValue.bind(this)
        this.decreaseValue = this.decreaseValue.bind(this)
    };

    componentDidMount() {
      const { min } = this.props;
      this.setState({ value: min });
    }

    handleChange(event) {
      this.props.update_value( this.props.label, event.target.value)
    }

    increaseValue(){
      const newValue = +this.state.value + +this.min;
      if (newValue > this.max) {
        this.setState({ value: this.max })
      }else{
        this.setState({ value: newValue })
      }
    }

    decreaseValue(){
      const newValue = +this.state.value - +this.min;
      if (newValue < this.min) {
        this.setState({ value: this.min })
      }else{
        this.setState({ value: newValue })
      }
    }

    render(){
      let label = this.label
        return(
        <div className="timer">
          <p>{label}:{this.state.value}</p>
          <form>
            <label className="flex-row controller">
              <div className="ctrl-button" onClick={ this.decreaseValue }>-</div>
              <input type="number" min={ this.min } max={ this.max } defaultValue={ this.props[label] } onChange={ this.handleChange }/>
              <div className="ctrl-button" onClick={ this.increaseValue } >+</div>
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
)(Controller);

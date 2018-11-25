import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggle_run, reset } from '../actions/indexAction';

class Runner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standBy: false,
    };
  }

  render() {
    return (
      <div className="flex-column">
        { this.props.running
          ? (
            <button className="runner" onClick={this.props.toggle_run}>
              {' '}
              <p>stop</p>
              {' '}
            </button>
          )
          : null}
        { !this.props.running ? (
          <button className="runner" onClick={this.props.toggle_run}>
            {' '}
            <p>start</p>
            {' '}
          </button>
        )
          : null}
        { this.state.standBy ? <button className="standBy runner"><p>get ready</p></button> : null }
        <p onClick={this.props.reset}>reset</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    running: state.running,
  }),
  dispatch => ({
    toggle_run: bindActionCreators(toggle_run, dispatch),
    reset: bindActionCreators(reset, dispatch),
  }),
)(Runner);

import {actionTypes} from '../actions/indexAction'

const defaultState = {
    time:1,
    serie:3,
    rest:30,
    loop:3,
    round:0,
    running: false,
};

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.toggle_runner:
          return {
              ...state,
              running: !state.running,
              round: 0
          }
        case actionTypes.one_more_round:
          return {
              ...state,
              round: state.round += 1
          }
        case actionTypes.update_value:
          return {
            ...state,
            [action.label]: action.new_value
        }
        default:
            return state;
    }
};

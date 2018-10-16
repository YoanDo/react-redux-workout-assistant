import {actionTypes} from '../actions/indexAction'

const defaultState = {
    time:15,
    serie:1,
    rest:0,
    loop:1,
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
        case actionTypes.update_value:
          return {
            ...state,
            [action.label]: action.new_value
        }
        default:
            return state;
    }
};

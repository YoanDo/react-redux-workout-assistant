import {actionTypes} from '../actions/indexAction'

const defaultState = {
    time:1,
    serie:3,
    rest:30,
    loop:3,
    round:0,
    running: false,
////
    // display_value: 0,
    // display_scale: 1,
    // operation: null,
    // operand: 0,
    // operator: 0
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
          ///
        case actionTypes.change_display_value:
            return {
                ...state,
                display_value: action.display_value
            }
        case actionTypes.change_operation:
            return{
                ...state,
                operation: action.operation
            }
        case actionTypes.set_operand:
            return{
                ...state,
                operand: action.operand
            }
        case actionTypes.set_operator:
            return{
                ...state,
                operator: action.operator
            }
        case actionTypes.set_scale:
            return{
                ...state,
                display_scale: action.display_scale
            }
        case actionTypes.clear:
            return defaultState;
        default:
            return state;
    }
};

import { actionTypes } from '../actions/indexAction';

const defaultState = {
  time: 5,
  serie: 1,
  rest: 5,
  loop: 1,
  running: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.toggle_run:
      return {
        ...state,
        running: !state.running,
      };
    case actionTypes.update_value:
      return {
        ...state,
        [action.label]: action.new_value,
      };
    default:
      return state;
  }
};

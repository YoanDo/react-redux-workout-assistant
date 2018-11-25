export const actionTypes = {
  toggle_run: 'TOGGLE_RUN',
  update_value: 'UPDATE_VALUE',
  reset: 'RESET'
};

export const toggle_run = () => ({
  type: actionTypes.toggle_run,
});

export const update_value = (label, new_value) => dispatch => dispatch({
  type: actionTypes.update_value,
  label,
  new_value,
});

export const reset = () => ({
  type: actionTypes.reset,
});

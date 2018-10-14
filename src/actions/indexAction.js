export const actionTypes = {
    toggle_runner: "TOGGLE_RUNNER",
    one_more_round: "ONE_MORE_ROUND",
    update_value: "UPDATE_VALUE"
}

export const toggle_runner = () => {
    return{
        type: actionTypes.toggle_runner
    }
}

export const one_more_round = () => {
    return{
        type: actionTypes.one_more_round
    }
}

export const update_value = (label, new_value) => (dispatch) => {
    return dispatch({
      type: actionTypes.update_value,
      label, new_value
    })
}


//
export const change_display_value = (display_value) => {
    return{
        type: actionTypes.change_display_value
    }
}

export const change_operation = (operation) => {
    return{
        type: actionTypes.change_operation,
        operation
    }
}

export const set_operand = (operand) => {
    return{
        type: actionTypes.set_operand,
        operand
    }
}

export const set_operator = (operator) => {
    return{
        type: actionTypes.set_operator,
        operator
    }
}

export const set_scale = (display_scale) => {
    return{
        type: actionTypes.set_scale,
        display_scale
    }
}

export const clear = () => {
    return{
        type: actionTypes.clear
    }
}

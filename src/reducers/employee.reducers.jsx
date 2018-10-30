const initState = {
    employees: [],
    errorMessage: null
}

const employeeReducers = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_EMPLOYEE':
            //console.log(action);
            return {
                ...state,
                employees: [...action.employees]
            }
        case 'ADD_SUCESS_EMPLOYEE':
            //console.log(action);
            return {
                ...state,
                employees: [...action.employees]
            }
        case 'ADD_FAIL_EMPLOYEE':
            //console.log(action);
            return {
                ...state,
                errorMessage: [action.message]
            }
        default:
            return state
    }
}

export default employeeReducers;
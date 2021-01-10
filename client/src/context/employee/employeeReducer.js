export const employeeReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case "DELETE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            }
        default:
            return state;
    }
}
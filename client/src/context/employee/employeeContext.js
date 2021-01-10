import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from "uuid";
import {employeeReducer} from "./employeeReducer";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
    const initialState = {
        employees: [
            {
                id: uuidv4(),
                name: "Sam Scott",
                email: "sam@gmail.com",
                avatar: "1.jpg"
            },
            {
                id: uuidv4(),
                name: "Anna White",
                email: "anna@gmail.com",
                avatar: "2.jpg"
            },
            {
                id: uuidv4(),
                name: "Jane Doe",
                email: "jane@gmail.com",
                avatar: "3.jpg"
            }
        ]
    };

    const [state, dispatch] = useReducer(employeeReducer, initialState);

    // ADD EMPLOYEE
    const addEmployee = employee => {
        employee.id = uuidv4();
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: employee
        })
    }

    // DELETE EMPLOYEE
    const deleteEmployee = id => {
        dispatch({
            type: "DELETE_EMPLOYEE",
            payload: id
        })
    }


    return (
        <EmployeeContext.Provider value={{
            employees: state.employees,
            addEmployee,
            deleteEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;

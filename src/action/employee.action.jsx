import axios from 'axios';

export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';
export const ADD_SUCESS_EMPLOYEE = 'ADD_SUCESS_EMPLOYEE';
export const ADD_FAIL_EMPLOYEE = 'ADD_FAIL_EMPLOYEE';

export const getAllEmployees = () => {
    return (dispatch) => {
        fetch("http://localhost:5000/api/employee")
        .then(res => res.json())
        .then(users =>{
            dispatch({
                type: FETCH_EMPLOYEE,
                employees: users
            });
        });
    }
}


export const saveEmployee = (emp) => {
    return (dispatch) => {
        console.log('ADD_SUCESS_EMPLOYEE', emp);
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/employee',
            data: emp,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                console.log('ADD_SUCESS_EMPLOYEE', response.data)
                dispatch({
                    type: ADD_SUCESS_EMPLOYEE,
                    employees: response.data
                });
            })
            .catch(function (response) {
                dispatch({
                    type: ADD_FAIL_EMPLOYEE,
                    message: "Unable to Add Data"
                });
            });
    }
}
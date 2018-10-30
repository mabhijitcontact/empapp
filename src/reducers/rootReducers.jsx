import employeeReducer from './employee.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    employees: employeeReducer
});

export default rootReducer;
import React, { Component } from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAllEmployees} from '../action/employee.action';

class Home extends Component {

    componentDidMount(){
       this.props.getAllEmployees();
    }
    render() {
        console.log(this.props);
        const {employees} = this.props;
        //console.log(users.length);
        const userList = (employees && employees.length > 0) ? (
            employees.map(user =>{
                return (<div className="post card" key={user._id}>
                    <div className="card-content">
                        {user.emp_name} <br />
                        {user.emp_email} <br />
                        {user.emp_designation}

                    </div>
                </div>);
            })
        ):(<div className="center">No user yet</div>);
        
        return (
            <div className="container">
                <h4 className="center">
                    Home
                </h4>
                {userList}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees.employees
    }
}

const mapDispathToProps = (dispatch) =>{
    return {
        getAllEmployees: () =>{
            dispatch(getAllEmployees())
        }
    } 
}
export default connect(mapStateToProps, mapDispathToProps)(Home);
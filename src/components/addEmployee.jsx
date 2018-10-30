import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEmployee } from '../action/employee.action';

class AddEmployee extends Component {
    constructor(){
        super();
        this.address = [];
    }
    state = {
        emp_name: "",
        emp_email: "",
        emp_designation: "",
        emp_code: "",
        emp_address: [{
            emp_street: null,
            emp_city: null,
            emp_state: null,
            emp_zip: null
        }]
    }

    handleChange = (evt) => {
        
        const target = evt.target;
        console.log(target.name);
        if(target.name === "emp_street" || target.name === "emp_city" || 
                target.name === "emp_state" || target.name === "emp_zip"){
            this.address.push({[target.name]: target.value} );
            this.setState({
                emp_address: {
                      ...this.state.emp_address,
                      [target.name]: target.value
                }
            })
            console.log(this.state);
            return;
        } else {
            this.setState({ [target.name]: target.value });
        }

        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveEmployee(this.state);
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <h4>Add Employee</h4>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="bmd-label-floating">Emp Name</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="emp_name" name="emp_name" />
                    </div>

                    <div className="form-group">
                        <label className="bmd-label-floating">Emp Email</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="emp_email" name="emp_email" />
                    </div>

                    <div className="form-group">
                        <label className="bmd-label-floating">Emp Code</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="emp_code" name="emp_code" />
                    </div>

                    <div className="form-group">
                        <label className="bmd-label-floating">Emp Designation</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="emp_designation" name="emp_designation" />
                    </div>

                    <div className="form-group">
                        <label className="bmd-label-floating">Street</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="emp_street" name="emp_street" />
                    </div>

                    <div className="form-group">
                        <label className="bmd-label-floating">City</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="emp_city" name="emp_city" />
                    </div>

                    <div className="form-group">
                        <label className="bmd-label-floating">State</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="emp_state" name="emp_state" />
                    </div>

                    <div className="form-group">
                        <label className="bmd-label-floating">zip</label>
                        <input onChange={this.handleChange} type="text" className="form-control" id="emp_zip" name="emp_zip" />
                    </div>

                    <button className="btn btn-default">Cancel</button>
                    <button type="submit" className="btn btn-primary btn-raised">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.messages
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        saveEmployee: (emp) => {
            dispatch(saveEmployee(emp))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(AddEmployee);
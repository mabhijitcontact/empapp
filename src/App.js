import React, { Component } from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import AddEmployee from './components/addEmployee';
import EmployeeDetail from './components/employeeDetails';
import empEdit from './components/editEmployee';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addEmployee" component={AddEmployee} />
            <Route path="/:emp_id" component={EmployeeDetail} />
            <Route path="/employeeEdit/:emp_id" component={empEdit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

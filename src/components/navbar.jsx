import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Employee</a>
                <ul className="right">
                    <li><NavLink to="/">Home (List Emp)</NavLink></li>
                    <li><NavLink to="/addEmployee">Add Employee</NavLink></li>
                </ul>

            </div>
        </nav>

    );
}

export default withRouter(Navbar);
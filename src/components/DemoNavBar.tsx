import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo'
import './DemoNavBar.css';


/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const DemoNavBar: React.FC = () => {
	/* This is returned when using this component */

	return (

        <div className="demo-nav-header">
            <NavLink
                id="home"
                to={'/'}
            >
                <Logo />
            </NavLink>
        </div>

);
};

export default DemoNavBar;
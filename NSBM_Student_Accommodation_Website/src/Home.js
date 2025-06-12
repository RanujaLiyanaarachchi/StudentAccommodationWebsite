// Home.js

import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Home.css';
import logo from './logo.png'; // Import your logo image

const Home = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Logo" width="100" height="100" />
                    </div>
                    <Link to="/Home" title="Home"><b>Home</b></Link>
                    <div className="dropdown">
                        <Link to="#" className="dropbtn" title="Student"><b>Student</b></Link>
                        <div className="dropdown-content">
                            <Link to="/Login"><b>Sign In</b></Link>
                            <Link to="/SignUp"><b>Sign Up</b></Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="#" className="dropbtn"><b>Landlord</b></Link>
                        <div className="dropdown-content">
                            <Link to="/LandlordLogin"><b>Sign In</b></Link>
                            <Link to="/LandlordSignup"><b>Sign Up</b></Link>
                        </div>
                    </div>
                    <Link to="/WardenLogin" title="Warden"><b>Warden</b></Link>
                    <Link to="/AdminLogin" title="Admin"><b>Admin</b></Link>
                </nav>
            </header>
            <Outlet />
        </>
    );
}

export default Home;

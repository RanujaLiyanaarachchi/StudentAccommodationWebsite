import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'; 

const ClearOutput = () => {
    const Name = document.getElementById('name');
    const Phone = document.getElementById('phone-number');
    const Email = document.getElementById('email-address');
    const Password = document.getElementById('password');

    if (!(Email === "") || !(Password === "") || !(Name === "") || !(Password === "")) {
        Name.value = "";
        Phone.value = "";
        Email.value = "";
        Password.value = "";
    }

};

const AddLandlord = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" width="100" height="100" />
                </div>
                <Link to="/Home" title="Home"><b>Home</b></Link>
                    <Link to="/AdminDashbord" title="AdminDashbord"><b>Dashboard</b></Link>
                    <Link to="/AdminProfile" title="AdminProfile"><b>Profile</b></Link>
                    <div className="dropdown">
                        <Link to="#" className="dropbtn"><b>Create Account</b></Link>
                        <div className="dropdown-content">
                            <Link to="/AddLandlord"><b>Landlord</b></Link>
                            <Link to="/AddWarden"><b>Warden</b></Link>
                            <Link to="/AddStudent"><b>Student</b></Link>
                        </div>
                    </div>
                    <Link to="/PostArticles" title="PostArticles"><b>Articles</b></Link>
                    <Link to="/Home" title="Sign Out" style={{ marginRight: '-10px' }}><b>Sign Out</b></Link>
            </nav>

            <div className="login-container">
                <div className="login-form-container">
                    <h2 className="login-title">Create Landlord</h2>
                    <form className="login-form measure center">
                        <div className="form-group">
                            <input className="form-input" type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input className="form-input" type="tel" name="phone-number" id="phone-number" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <input className="form-input" type="email" name="email-address" id="email-address" placeholder="Email address" />
                        </div>
                        <div className="form-group">
                            <input className="form-input" type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <div className="form-actions">
                            <input className="login-btn" type="submit" value="Edit" />
                            <input className="clear-btn" type="reset" value="Clear" onClick={ClearOutput} />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
            </footer>
        </>

    );

}

export default AddLandlord;

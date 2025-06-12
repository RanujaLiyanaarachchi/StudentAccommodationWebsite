import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const ClearOutput = () => {
    const Name = document.getElementById('name');
    const Phone = document.getElementById('phone-number');
    const Email = document.getElementById('email-address');
    const Password = document.getElementById('password');

    if (!(Email.value === "") || !(Password.value === "") || !(Name.value === "") || !(Password.value === "")) {
        Name.value = "";
        Phone.value = "";
        Email.value = "";
        Password.value = "";
    }
};

const Profile = () => {
    return (
        <APIProvider apiKey={"YAIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" width="100" height="100" />
                </div>
                <Link to="/Home" title="Home"><b>Home</b></Link>
                <Link to="/Dashbord" title="Dashboard"><b>Dashboard</b></Link>
                <Link to="/Profile" title="Profile"><b>Profile</b></Link>
                <Link to="/Reservations" title="Reservations"><b>Reservations</b></Link>
                <Link to="/Profile" title="Profile" style={{ marginRight: '-10px' }}><b>Sing Out</b></Link>
            </nav>

            <div className="login-container">
                <div className="login-form-container">
                    <h2 className="login-title">Student Profile</h2>
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
                            <input className="login-btn" type="submit" value="Edite" />
                            <input className="clear-btn" type="reset" value="Clear" onClick={ClearOutput} />
                        </div>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
            </footer>
        </>
        </APIProvider>
    );
}

export default Profile;

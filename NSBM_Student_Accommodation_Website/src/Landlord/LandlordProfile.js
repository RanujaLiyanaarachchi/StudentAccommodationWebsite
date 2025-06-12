import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'; 

const Hide = () => {
    const column1 = document.getElementById("column_one");
    const column2 = document.getElementById("column_two");
    const btn = document.getElementById("HideBtn")
    if (btn.innerHTML === "Hide Blocks") {
        column1.style.display = 'none';
        column2.style.width = '100%';
        btn.innerHTML = "Show Blocks";
    } else if (btn.innerHTML === "Show Blocks") {
        column1.style.display = 'inline';
        column2.style.width = '80%';
        btn.innerHTML = "Hide Blocks";
    }
};

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

const LandlordProfile = () => {
    const [height, setHeight] = useState(0); // Height state

    useEffect(() => {
        // Accessing column_two.offsetHeight after the component has been rendered
        const column2 = document.getElementById('column_two');
        if (column2) {
            setHeight(column2.offsetHeight);
        }
    }, []);

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" width="100" height="100" />
                </div>
                <Link to="/Home" title="Home"><b>Home</b></Link>
                    <Link to="/LandlordDashbord" title="LandlordDashbord"><b>Dashboard</b></Link>
                    <Link to="/LandlordProfile" title="LandlordProfile"><b>Profile</b></Link>
                    <Link to="/AddProperty" title="AddPropertys"><b>Property</b></Link>
                    <Link to="/Home" title="Sign Out" style={{ marginRight: '-10px' }}><b>Sign Out</b></Link>
            </nav>

            <div className="login-container">
                <div className="login-form-container">
                    <h2 className="login-title">Landlord Profile</h2>
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

export default LandlordProfile;
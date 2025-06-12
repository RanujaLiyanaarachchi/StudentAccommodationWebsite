import React from "react";

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

const LandlordSignup = () => {
    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-title">Landlord Sign Up</h2>
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
                        <input className="login-btn" type="submit" value="Sign Up" />
                        <input className="clear-btn" type="reset" value="Clear" onClick={ClearOutput} />
                    </div>
                </form>
            </div>
            <footer className="footer">
                <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
            </footer>
        </div>
    );
}

export default LandlordSignup;

import React from "react";

const ClearOutput = () => {
    const Email = document.getElementById('email-address');
    const Password = document.getElementById('password');

    if (Email && Password) {
        Email.value = "";
        Password.value = "";
    }
};

const LoginBtn = () => {
    // Implement login functionality here
};

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-title">Student Sign In</h2>
                <form className="login-form measure center">
                    <div className="form-group">
                        <input className="form-input" type="email" name="email-address" id="email-address" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input className="form-input" type="password" name="password" id="password" placeholder="Password" />
                        <a href="#0" className="forgot-password">Forgot your password?</a>
                    </div>
                    <div className="form-actions">
                        <input className="login-btn" type="submit" value="Log In" onClick={LoginBtn} />
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

export default Login;

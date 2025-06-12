// HomeLayout.js

import React from "react";
import './Home.css'; // Import CSS for styling

const HomeLayout = () => {
    return (
        <div className="home-layout">
            <div className="center-text">
                <h1 className="white" style={{ fontSize: '80px' }}>Welcome Back to</h1>
                <h2 className="white" style={{ fontSize: '25px', marginTop:'-40px'}}>NSBM Student Accommodation Rental Service</h2>
            </div>
            <footer className="footer">
                <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
            </footer>
        </div>
    );
}

export default HomeLayout;

import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const Reservations = () => {
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
                    <Link to="/Home" title="Sign Out" style={{ marginRight: '-10px' }}><b>Sign Out</b></Link>
                </nav>

                {/* Add your main content here */}

                <footer className="footer">
                <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
            </footer>
            </>
        </APIProvider>
    );
}

export default Reservations;

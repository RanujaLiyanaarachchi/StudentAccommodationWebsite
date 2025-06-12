import React, { useState, useEffect } from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Link } from "react-router-dom";
import logo from './logo.png'; 

const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

const Dashboard = () => {
    const [height, setHeight] = useState(0); // Height state

    useEffect(() => {
        const column2 = document.getElementById('column_two');
        if (column2) {
            setHeight(column2.offsetHeight);
        }
    }, []);

    const handleHideBlocks = () => {
        const column1 = document.getElementById("column_one");
        const column2 = document.getElementById("column_two");
        const btn = document.getElementById("HideBtn");

        if (btn.innerHTML === "Hide Blocks") {
            column1.style.display = 'none';
            column2.style.width = '100%';
            btn.innerHTML = "Show Blocks";
        } else {
            column1.style.display = 'inline';
            column2.style.width = '80%';
            btn.innerHTML = "Hide Blocks";
        }
    };

    return (
        <APIProvider apiKey={"AIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
            <> <header>
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
                </header>
                <article style={{ display: 'flex' }}>
                    <div className="fl w-80 bg-light-gray vh-100" id="column_two" style={{ flexGrow: 1 }}>
                        <section style={{ marginTop: '110px' }}>
     
                            <div className="tc">
                            
            <h1 className="ma0 tc">Welcome Back To</h1>
            <h2 className="f8 fw4 gray mt1"><b>NSBM Student Accommodation Rental Service</b></h2>
                               
                                <div className="m-100 vh-50" style={{ marginTop: '3.5%', height: '500px' }}>
                                <Map defaultCenter={position} defaultZoom={10.4}></Map>
                              </div>

                            </div>
                        </section>
                    </div>
                </article>

                <footer className="footer">
                    <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
                </footer>
            </>

        </APIProvider>
    );
}

export default Dashboard;

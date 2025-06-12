import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Link } from "react-router-dom";
import logo from './logo.png';

const WardenProperty = () => {
    const [markers, setMarkers] = useState([]);
    const [height, setHeight] = useState(window.innerHeight); // Set initial height to window height
    const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMapClick = (event) => {
        if (event && event.detail && event.detail.latLng) {
            const clickedPosition = {
                lat: event.detail.latLng.lat,
                lng: event.detail.latLng.lng
            };
            setMarkers([...markers, clickedPosition]);
        }
    };

    return (
        <APIProvider apiKey={"AIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo" width="100" height="100" />
                </div>
                <Link to="/Home" title="Home"><b>Home</b></Link>
                <Link to="/WardenDashbord" title="Dashboard"><b>Dashboard</b></Link>
                <Link to="/WardenProfile" title="Profile"><b>Profile</b></Link>
                <Link to="/WardenProperty" title="Reservations"><b>Property</b></Link>
                <Link to="/Home" title="Profile" style={{ marginRight: '-10px' }}><b>Sign Out</b></Link>
            </nav>

            <div style={{ display: 'flex', height: '100vh' }}>
                <div className="fl w-25 bg-washed-green"></div>
                <div className="fl w-75 bg-light-gray" style={{ position: 'relative' }}>
                    <article className="m-100 ml2 mr2 bg-light-gray br3ba b--black-10" style={{ height: '100%', overflow: 'hidden' }}>
                        <div className="tc" style={{ height: '100%' , marginTop: '50px' }}>
                            <Map defaultCenter={position} defaultZoom={15} onClick={handleMapClick}>
                                {markers.map((marker, index) => (
                                    <Marker key={index} position={marker} />
                                ))}
                            </Map>
                        </div>
                    </article>
                </div>
            </div>
            <footer className="footer">
                    <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
                </footer>
        </APIProvider>
    );
}

export default WardenProperty;

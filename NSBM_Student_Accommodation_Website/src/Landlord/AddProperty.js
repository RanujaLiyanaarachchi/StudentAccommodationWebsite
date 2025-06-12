import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
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

const AddProperty = () => {
    const [markers, setMarkers] = useState([]);
    const [height, setHeight] = useState(0); // Height state
    const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

    const ClearOutput = () => {
        const Name = document.getElementById('Property_Name');
        const Phone = document.getElementById('Phone_No');
        const Description = document.getElementById('Description');
        const Facilities = document.getElementById('Available_Facilities');
        const Available_For = document.getElementById('Available_For');
        const Price = document.getElementById('Price');
        const Address = document.getElementById('Address');
        const Photos = document.getElementById('Photos');

        if (!(Description === "") || !(Facilities === "") || !(Name === "") || !(Available_For === "") || !(Price === "") || !(Address === "") || !(Photos === null)) {
            Name.value = "";
            Phone.value = "";
            Description.value = "";
            Facilities.value = "";
            Available_For.value = "";
            Price.value = "";
            Address.value = "";
            Photos.value = null;
        }
        setMarkers([]);
    };

    useEffect(() => {

        const column2 = document.getElementById('column_two');
        if (column2) {
            setHeight(column2.offsetHeight);
        }
    }, []);

    const handleMapClick = (event) => {
        console.log("Clicked event:", event); // Debugging statement

        if (event && event.detail && event.detail.latLng) {
            const clickedPosition = {
                lat: event.detail.latLng.lat,
                lng: event.detail.latLng.lng
            };
            console.log("Clicked position:", clickedPosition); // Debugging statement
            setMarkers([...markers, clickedPosition]);
        } else {
            console.error("Invalid click event:", event); // Debugging statement
        }
    };



    return (
        <APIProvider apiKey={"YAIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
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
                <article style={{ display: 'flex' }}>

                    <div className="fl w-80 bg-light-gray" id="column_two" onLoad={useEffect} style={{ flexGrow: 1 }}>

                        <div>
                   
                            <div style={{ marginTop: '110px' }}> {/* Apply margin-top: 100px to the form */}
                            <h1 className="ma0 ml4 center tc">Add New Property</h1>
                            </div>
                        </div>
                        <div style={{ marginTop: '40px' }}> {/* Apply margin-top: 100px to the form */}
                            <article className="black-80 w-100 tc">
                                <form>
                                    <fieldset id="sign_up" className="ba2 b--transparent ph0 mh0 w-100 pa2 pr2">
                                        <div className="mt3">
                                        <div style={{ marginTop: '20px' }}></div>
                                            <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="Property_Name" id="Property_Name"  placeholder="Property Name" style={{ height: '40px', borderRadius: '10px' }} />
                                        </div>
                                        <div className="mt3">
                                        <div style={{ marginTop: '40px' }}></div>
                                            <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="Description" id="Description" placeholder="Description" style={{ height: '40px', borderRadius: '10px' }}/>
                                        </div>
                                        <div className="mt3">
                                        <div style={{ marginTop: '40px' }}></div>
                                            <input className="pa2 input-reset ba bg-transparent w-90" type="text" name="Address" id="Address" placeholder="Address" style={{ height: '40px', borderRadius: '10px' }}/>
                                        </div>
                                        <div className="mt3 fn fl-ns w-50-ns">
                                        <div style={{ marginTop: '25px' }}></div>
                                            <input className="pa2 input-reset ba bg-transparent w-80" type="text" name="Available_Facilities" id="Available_Facilities" placeholder="Available Facilities" style={{ height: '40px', borderRadius: '10px' }}/>
                                        </div>
                                        <div className="mt3 fn fl-ns w-50-ns">
                                        <div style={{ marginTop: '25px' }}></div>
                                            <input className="pa2 input-reset ba bg-transparent w-80" type="tel" name="Phone_No" id="Phone_No" placeholder="Phone No" style={{ height: '40px', borderRadius: '10px' }}/>
                                        </div>
                                        <div className="mt3 fn fl-ns w-50-ns">
                                        <div style={{ marginTop: '25px' }}></div>
                                            <select className="pa2 input-reset ba bg-transparent w-80" id="Available_For" name="Available_For" placeholder="Available For" style={{ height: '40px', borderRadius: '10px' }}>
                                                <option value="Male">Available For</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Both">Both</option>
                                            </select>
                                        </div>
                                        <div className="mt3 fn fl-ns w-50-ns">
                                        <div style={{ marginTop: '25px' }}></div>
                                            <input className="pa2 input-reset ba bg-transparent w-80" type="number" name="Price" id="Price" placeholder="Price" style={{ height: '40px', borderRadius: '10px' }}/>
                                        </div>
                                        
                                        <div className="mt3">
                                        
                                            <input className="pa2 input-reset ba bg-transparent w-90" type="file" name="Photos" id="Photos" placeholder="Photos" style={{marginTop: '40px', borderRadius: '10px' }}/>
                                        </div>
                                    </fieldset>
                                    <div style={{ marginTop: '25px' }}></div>
                                    <article className="m-100 mt3 ml2 mr2 bg-light-gray br3 ba b--black-10">
                                        <div className="tc">
                                            <h4 className="db fw4 lh-copy f6 ma0" htmlFor="Enter_Location">Enter Location</h4>
                                            <div className="m-100 vh-50">
                                                <Map defaultCenter={position} defaultZoom={15} onClick={handleMapClick}>
                                                    {markers.map((marker, index) => (
                                                        <Marker key={index} position={marker} />
                                                    ))}
                                                </Map>
                                            </div>
                                        </div>
                                    </article>

                                    <div className="mt3">
                                        <input className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4" type="submit" value="Add" />
                                        <input className="f6 ml4 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue w4" type="reset" value="Clear" onClick={ClearOutput} />
                                        <div style={{ marginBottom: '28px' }}> {/* Apply margin-top: 100px to the form */}</div>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </article>
                <footer className="footer bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999 fixed">
                <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
                </footer>

            </>
        </APIProvider>
    );
}

export default AddProperty;

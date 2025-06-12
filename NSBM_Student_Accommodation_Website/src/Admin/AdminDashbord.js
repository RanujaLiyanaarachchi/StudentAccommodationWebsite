import React from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Link } from "react-router-dom";
import './Admin.css';
import logo from './logo.png'; 

const position = { lat: 6.8214925581511565, lng: 80.04122509763354 };

const AdminDashbord = () => {

    return (
        <APIProvider apiKey={"AIzaSyDnk8killPj2EO1k_H9V1ocew2crxglWbM"}>
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

                <article style={{ display: 'flex' }}>

                    <div className="fl w-0" id="column_one"></div>

                    <div className="fl w-80 bg-light-gray vh-100" id="column_two" style={{ flexGrow: 1 }}>

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

                    </div>
                </article>


                <article className="bg-light-gray" style={{ display: 'flex' }}>
                    <section className="mw7 center avenir">

                    <h2 className="tc tracked"><b>Articles</b></h2>

                        <article className="bt bb b--black-10">
                            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                <div className="flex flex-column flex-row-ns">
                                    <div className="pr3-ns mb4 mb0-ns w-100 w-80-ns">
                                        <img src="https://th.bing.com/th?id=OIF.1MXHWwSkxHrx47eA%2fZ%2f0HQ&rs=1&pid=ImgDetMain.jpg" className="db" alt="dimly lit room with a computer interface terminal." />
                                    </div>
                                    <div className="w-100 w-60-ns pl3-ns">
                                        <h1 className="f3 fw1 baskerville mt0 lh-title">Tech Giant Invests Huge Money to Build a Robot Out of Science Fiction</h1>
                                        <p className="f6 f5-l lh-copy">
                                        The tech giant says it is ready to begin planning a robot, a revolutionary creation that promises to redefine human-robot interaction.
                                        </p>
                                        <p className="f6 lh-copy mv0">Ranuja Liyanaarachchi</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="bb b--black-10">
                            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                <div className="flex flex-column flex-row-ns">
                                    <div className="pr3-ns mb4 mb0-ns w-100 w-80-ns">
                                        <img src="https://viraltalks.com/wp-content/uploads/2018/08/maxresdefault-1160x653.jpg" className="db" alt="warehouse with stacked shelves." />
                                    </div>
                                    <div className="w-100 w-60-ns pl3-ns">
                                        <h1 className="f3 fw1 baskerville mt0 lh-title">Smartwatch Prices Are Fast on the Rise</h1>
                                        <p className="f6 f5-l lh-copy">
                                        A smartwatch is a multifunctional wearable device, offering features like notifications, fitness tracking, and communication, popular among those seeking convenient access to information on the go.
                                        </p>
                                        <p className="f6 lh-copy mv0">Ranuja Liyanaarachchi</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="bb b--black-10">
                            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                <div className="flex flex-column flex-row-ns">
                                    <div className="pr3-ns mb4 mb0-ns w-100 w-80-ns">
                                        <img src="https://th.bing.com/th/id/OIP.7MICnM0whzz9njgRjTcLGgAAAA?rs=1&pid=ImgDetMain" className="db" alt="whale's tale coming crashing out of the water." />
                                    </div>
                                    <div className="w-100 w-60-ns pl3-ns">
                                        <h1 className="f3 fw1 baskerville mt0 lh-title">Futuristic Flying Car Concept Takes Flight with Giant Investment</h1>
                                        <p className="f6 f5-l lh-copy">
                                        Flying cars are a cutting-edge transportation innovation, encompassing a diverse array of aerial vehicles designed for personal and commercial use. 
                                        </p>
                                        <p className="f6 lh-copy mv0">Ranuja Liyanaarachchi</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                        <article className="bb b--black-10">
                            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                <div className="flex flex-column flex-row-ns">
                                    <div className="pr3-ns mb4 mb0-ns w-100 w-80-ns">
                                        <img src="https://cdn.mos.cms.futurecdn.net/h9cNXAjwWGwPBfEBo4rPt7-1200-80.jpg" className="db" alt="whale's tale coming crashing out of the water." />
                                    </div>
                                    <div className="w-100 w-60-ns pl3-ns">
                                        <h1 className="f3 fw1 baskerville mt0 lh-title">Futuristic Samsung Smart Tab Concept Soars with Massive Investment</h1>
                                        <p className="f6 f5-l lh-copy">
                                        Samsung Smart Tab is a versatile electronic device designed for various functionalities, such as productivity, entertainment, and communication.
                                        </p>
                                        <p className="f6 lh-copy mv0">Ranuja Liyanaarachchi</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </section>
                </article>

                <footer className="footer bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999 fixed">
                <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
                </footer>

            </>
        </APIProvider>
    );
}

export default AdminDashbord;

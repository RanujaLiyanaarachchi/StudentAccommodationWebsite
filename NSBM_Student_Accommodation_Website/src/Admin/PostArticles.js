import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'; 

const NewContent = () => {
    const Headline = document.getElementById("headline");
    const Headline_content = document.getElementById("headline_content");
    const Author = document.getElementById("author");
    const Author_content = document.getElementById("author_content");
    const SubHeader = document.getElementById("subheader");
    const SubHeader_content = document.getElementById("subheader_content");
    const Content = document.getElementById("content");
    const Content_content = document.getElementById("content_content");

    if (!(Headline_content === "")) {
        Headline_content.innerHTML = Headline.value;
    }
    if (!(Author_content === "")) {
        Author_content.innerHTML = "A story by " + Author.value;
    }
    if (!(SubHeader_content === "")) {
        SubHeader_content.innerHTML = SubHeader.value;
    }
    if (!(Content_content === "")) {
        Content_content.innerHTML = Content.value;
    }


};

const PostArticles = () => {
    return (
        <>
            {/* Navbar start */}
            <div className="flex flex-column vh-100">
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
                {/* Navbar end */}

                {/* Post Articles Section start */}
                <div className="pt2 fl w-100 bg-light-gray" style={{ flexGrow: 1 }}>
                <div style={{ marginTop: '100px' }}>
                    <h1 className="tc ttu tracked"><b>Post Articles</b></h1>
</div> <div style={{ marginTop: '40px' }}></div>
                    <div>
                        <article className="helvetica pb5">

                            <header className="bg-light-green dt w-100">
                                <div
                                    style={{ backgroundImage: "http://mrmrs.github.io/photos/display.jpg" }}
                                    className="dtc v-mid cover ph3 ph4-m ph5-l">

                                         <div style={{ marginTop: '20px' }}></div>

                                    <input className="pa1 mt3 input-reset ba bg-transparent w-100" type="text" name="headline" id="headline" placeholder="Head Line, If you want to enter, leave a space" style={{ height: '50px', borderRadius: '10px' }} onChange={NewContent} />
                                    <div style={{ marginTop: '-20px' }}></div>
                                    <h1 className="f2 f-subheadline-l measure lh-title fw9" id="headline_content">A Night Taking Photos at San Francisco’s Spooky Ruins of the Sutro Baths</h1>
                                    <div style={{ marginTop: '-20px' }}></div>
                                    <input className="pa1 input-reset ba bg-transparent w-34" type="text" name="author" id="author" placeholder="Author" style={{ height: '40px', borderRadius: '10px' }} onChange={NewContent}></input>
                                    <h2 className="f6 fw6 black" id="author_content">A story by Ranuja Liyanaarachchi</h2>
                                </div>
                            </header>

                            <div style={{ marginTop: '100px' }}></div>
                            <div className="serif ph3 ph4-m ph5-l">

                                <input className="pa1 mt3 input-reset ba bg-transparent w-100" type="text" name="subheader" id="subheader" placeholder="Sub Header, If you want to enter, leave a space" style={{ height: '50px', borderRadius: '10px' }} onChange={NewContent}></input>
                                <p className="lh-copy f5 f3-m f1-l measure center pv4" id="subheader_content">
                                    On March 14, 1896, the Sutro Baths were opened to the public as the world's largest indoor swimming pool establishment. </p>

                                


                                <div className="f5 f3-m lh-copy">

                          
                                    <div className=" cf dt-l w-100 bt b--black-10 pv4">
                                        <div className="dtc-l v-mid mw6 pr3-l">
                                        <div style={{ marginTop: '50px' }}></div>
                                            <input className="pa1 input-reset ba bg-transparent w-100 mb2" type="file" name="content_img" id="content_img" style={{borderRadius: '10px' }}></input>
                                            <div style={{ marginTop: '10px' }}></div>
                                            <img className="w-100" src="http://mrmrs.github.io/photos/009.jpg" alt="content_img" />
                                        </div>
                                        
                                        <div className=" dtc-l v-mid f6 f5-m f4-l measure-l">
                                        <div style={{ marginTop: '120px' }}></div>
                                            <input className="pa1 input-reset ba bg-transparent w-100" type="text" name="content" id="content" placeholder="Content, If you want to enter, leave a space" style={{ height: '50px', borderRadius: '10px' }} onChange={NewContent}></input>
                                            <div style={{ marginTop: '-18px' }}></div>
                                            <p className="measure pv4-l center" id="content_content" style={{ textAlign: 'justify' }}>
                                               Before it burned to the ground, the structure filled a small beach inlet below the Cliff House, also owned by Adolph Sutro at the time. Shortly after closing, a fire in 1966 destroyed the building while it was in the process of being demolished. All that remains of the site are concrete walls, blocked off stairs and passageways, and a tunnel with a deep crevice in the middle. The cause of the fire was arson. Shortly afterwards, the developer left San Francisco and claimed insurance money.
                                            </p>

                                            <div style={{ marginTop: '-34px' }}></div>
                                            <input className="ff6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green hover-bg-light-green"  type="submit" value="Post"   style={{ width: '80%', height: '40px', marginLeft: '78px' }} />

                                        </div>
                                     
                                    </div>
                                

                                </div>
                                
                            </div>
                            
                        </article>
                    </div>

                </div>
                {/* Post Articles Section end */}


                <footer className="footer bottom-0 w-100 ph3 ph5-m ph6-l bg-light-gray z-9999 fixed">
                <small className="copyright">© Created by Group CC, All Rights Reserved.</small>
                </footer>

            </div>
        </>

    );

}

export default PostArticles;

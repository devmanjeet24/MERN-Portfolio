import React from 'react'
import './Menus.css'
import { Link } from 'react-scroll';
import { FcAbout, FcHome } from "react-icons/fc";
import { FaLaptopCode, FaFileCode } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';

const Menus = ({ toggle }) => {
    return (
        <>

            {
                toggle ? (
                    <>
                  
                            <div className="navbar-profile-pic">

                                <img src="../../../Images/ManjeetSingh.jpg" alt="profile-pic" />
                            </div>
                      


                                 <div className='nav-items'>
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                                        <FcHome />Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="about" >
                                        <FcAbout />About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="workexp" >
                                        <FaLaptopCode />Work Experience
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="techies" >
                                        <FaFileCode />Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="education" >
                                        <IoSchoolSharp />Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="projects" >
                                        <GrProjects />Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="contacts" >
                                        <MdContactPhone />Contacts
                                    </Link>
                                </div>

                            </div>
                        </div>
                    
                    </>

                ) : (

                    <>
                      
                            <div className='nav-items'>
                                <div className="nav-item">
                                    <div className="nav-link" title='Home'>
                                        <Link to="home" >
                                            <FcHome size={25} />
                                        </Link>
                                    </div>
                                    <div className="nav-link" title='About'>
                                        <Link to="about" >
                                            <FcAbout size={25} />
                                        </Link>
                                    </div>
                                    <div className="nav-link" title='Work Experience'>
                                        <Link to="workexp" >
                                            <FaLaptopCode size={25} />
                                        </Link>
                                    </div>
                                    <div className="nav-link" title='Tech Stack'>
                                        <Link to="techies" >
                                            <FaFileCode size={25} />
                                        </Link>
                                    </div>
                                    <div className="nav-link" title='Education'>
                                        <Link to="education" >
                                            <IoSchoolSharp size={25} />
                                        </Link>
                                    </div>
                                    <div className="nav-link" title='Projects'>
                                        <Link to="projects" >
                                            <GrProjects size={25} />
                                        </Link>
                                    </div>
                                    <div className="nav-link" title='Contacts'>
                                        <Link to="contacts" spy={true} smooth={true} offset={-70} duration={500}>
                                            <MdContactPhone size={25} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                

                    </>
                )
            }


        </>
    )
}

export default Menus
import React, { useState } from 'react'
import './Mobilenav.css'
import { MdContactPhone, MdMenu } from "react-icons/md";
import { Link } from 'react-scroll';
import { FcAbout, FcHome } from 'react-icons/fc';
import { FaFileCode, FaLaptopCode } from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';
import { GrProjects } from 'react-icons/gr';
import { RxCross1 } from "react-icons/rx";


const Mobilenav = () => {

  const [open, setOpen] = useState(true);

  const handleopen = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {
            open ? (<MdMenu size={20} className='mobile-nav-icon' onClick={handleopen} />) : (<RxCross1 size={20} className='mobile-nav-icon' onClick={handleopen} />)
          }
          <span className='nav-mobile-title'>My portfolio App</span>
        </div>


        {
          !open && (
            <div className="mobile-nav-menu">
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                    <FcHome />Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                    <FcAbout />About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="workexp" spy={true} smooth={true} offset={-70} duration={500}>
                    <FaLaptopCode />Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="techies" spy={true} smooth={true} offset={-70} duration={500}>
                    <FaFileCode />Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="education" spy={true} smooth={true} offset={-70} duration={500}>
                    <IoSchoolSharp />Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                    <GrProjects />Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="contacts" spy={true} smooth={true} offset={-70} duration={500}>
                    <MdContactPhone />Contacts
                  </Link>
                </div>

              </div>
            </div>
          )
        }

      </div>
    </>
  )
}

export default Mobilenav;
import React, { useState } from 'react'
import Home from '../../Pages/Home/home';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import './Layout.css';
import Menus from '../Menus/Menus';



const Layout = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <div className="sidebar-section">
                <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                    <div className="sidebar-toggle-icon">
                     
                        <p onClick={handleToggle}>
                            {
                                toggle ? (<MdKeyboardDoubleArrowLeft size={30} />) : (<MdKeyboardDoubleArrowRight size={30} />)
                            }

                        </p>


                    </div>
                       <Menus toggle={toggle}/>
                </div>

                <div className="container">
                    <Home />
                   
                </div>
            </div>
        </>
    )
}

export default Layout;
import React from 'react'
import Home from '../../Pages/Home/home';

const Layout = () => {
  return (
    <>
        <div className="sidebar-section">
            <div className="sidebar">
                <div className="sidebar-toggle-icon">
                    icon
                </div>
            </div>

            <div className="container">
                <Home />
            </div>
        </div>
    </>
  )
}

export default Layout;
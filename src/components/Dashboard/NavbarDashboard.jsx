import React from "react";
import "./Dashboard.css";

const NavbarDashboard = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <h1>Dashboard</h1>
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Account</a>
                <a href="#">Setting</a>
                <a className="active_link" href="#">Upgrade</a>
            </div>
            <div className="navbar__right">
                <a href="#"><i className="fa fa-search"></i></a>
                <a href="#"><h2>Electric Rescue</h2></a>
                
            </div>
        </nav>
    )
}
 
export default NavbarDashboard;
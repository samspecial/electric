import React from "react";
import "./Dashboard.css";

const Sidebar = ({sidebarOpen, closeSidebar}) => {

    return (
        <div className={ sidebarOpen ? "sidebar-responsive":""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    {/* Image should be here */}
                    <h3>Logo</h3>
                    <h1>Electric Rescue</h1>
                </div>
                <i className="fafa-times"
                    id="sidebarIcon"
                    onClick={()=> closeSidebar()}></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a> 
                </div>
                <h2>Activities</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">User Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Raise Ticket</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Feedback</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">History</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Upgrade</a>
                </div>
                <h2>Activities</h2>
                <div className="sidebar__link">
                    <i className="fa fa-user-secret"></i>
                    <a href="#">User Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Raise Ticket</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Feedback</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">History</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Upgrade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;
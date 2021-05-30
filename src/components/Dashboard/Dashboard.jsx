import React, { useState } from "react";
import "../../App.css";

import NavbarDashboard from "./NavbarDashboard";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="container">
            <NavbarDashboard sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
            <h1>Electric Rescue</h1>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
        </div>
    )
}

export default Dashboard;
import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h3>Oopps!!! You just hit the wrong command</h3>
            <p>Click <Link to="/">here</Link> to continue.</p>
        </div>
    )
}

export default NotFound

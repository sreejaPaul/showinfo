import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

function Topbar() {
    return (
        <div id="titledivstyle">
            <div className="titlestyle">
                <Link to="/" id="titlelink">
                    <h2>Show Information</h2>
                </Link>
            </div>
        </div>
    )
}

export default Topbar

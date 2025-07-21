import React from "react";
import { Link } from "react-router-dom";

import classes from './SideBar.module.css'

export default function SideBar () {
    return (
        <div className={classes.sidebar}>
            <h3 className={classes.logo}><a href="/">DocApp</a></h3>
            <nav className={classes.nav}>
                <ul className={classes.navbar}>
                    <li className={classes.active}>
                        <Link to="/">
                            <img src="dashboard.png" alt="" className={classes.imageActive} />
                        <p className={classes.dashboard}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar">
                            <img src="time.png"  alt="" />
                        <p>Calender</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <img src="profile.png" alt="" />
                        <p>Profile</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <img src="settings.png" alt="" />
                        <p>Settings</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.profileSection}>
        <img
            src="profile.png"
          alt="Dr Anne Snowdon"
          className={classes.profilePic}
        />
        <p>Dr Anne Snowdon</p>
    </div>
    <button className={classes.logout}>
        <img src="exit.png" alt="" className={classes.buttonImage} />
        <span className={classes.text}>Log out</span>
    </button>
    </div>
    )
}

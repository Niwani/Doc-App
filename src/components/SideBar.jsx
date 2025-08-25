import React from "react";
import { Link } from "react-router-dom";

import classes from './SideBar.module.css';
import dashImage from '../assets/dashboard.png';
import calenderImage from '../assets/time.png';
import profileImage from '../assets/profile.png';
import settingsImage from '../assets/settings.png';
import exitImage from '../assets/exit.png'

export default function SideBar () {
    return (
        <div className={classes.sidebar}>
            <h3 className={classes.logos}><a href="/">DocApp</a></h3>
            <nav className={classes.nav}>
                <ul className={classes.navbar}>
                    <li className={classes.active}>
                        <Link to="./">
                            <img src={dashImage} alt="" className={classes.imageActive} />
                        <p className={classes.dashboard}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar">
                            <img src={calenderImage}  alt="" />
                        <p>Calender</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <img src={profileImage} alt="" />
                        <p>Profile</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <img src={settingsImage} alt="" />
                        <p>Settings</p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.profileSection}>
        <img
            src={profileImage}
          alt="Dr Anne Snowdon"
          className={classes.profilePic}
        />
        <p>Dr Anne Snowdon</p>
    </div>
    <button className={classes.logout}>
        <img src={exitImage} alt="" className={classes.buttonImage} />
        <span className={classes.text}>Log out</span>
    </button>
    </div>
    )
}

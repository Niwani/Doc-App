import Timeline from "../Dashboard/Timline";
import Dashboard from "../Dashboard/Dashboard";

import classes from './HomePage.module.css';
import SideBar from "../SideBar";

export default function Homepage() {
    return (
        <div className={classes.homepage}>
            <SideBar />
            <Timeline />
            <Dashboard />
        </div>
    )
}
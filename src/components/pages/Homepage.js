import Timeline from "../Dashboard/Timline";
import Dashboard from "../Dashboard/Dashboard";

import classes from './HomePage.module.css';

export default function Homepage() {
    return (
        <div className={classes.homepage}>
            <Timeline />
            <Dashboard />
        </div>
    )
}
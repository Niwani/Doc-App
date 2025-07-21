import React from 'react';

import classes from './Dashboard.module.css';
import Calender from './Calender';
import GreetingCard from './GreetingCard';
import Appointments from './Appointments/Appointments';

export default function Dashboard () {
    return (
        <div className={classes.mainDash}>
            <div className={classes.topSection}>
                <Calender />
                <GreetingCard />
            </div>
            <div>
                <Appointments />
            </div>
        </div>
    )
}
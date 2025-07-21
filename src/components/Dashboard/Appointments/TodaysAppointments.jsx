import React from "react";

import './TodaysAppointments.css'

const APPOINTMENTS = [
    {
        firstName: 'Jessica',
        lastName: ' Ashcroft',
        title: 'Follow-up',
        id: 'ap1',
        time: 'Next, 08:00',
        active: true
    }, 
    {
        firstName: 'Lily',
        lastName: 'Anderson',
        title: 'New patient',
        id: 'ap2',
        time: '08:30'
    }, 
    {
        firstName: 'Amanda',
        lastName: 'Lipp',
        title: 'New patient',
        id: 'ap3',
        time: '09:00'
    },
    {
        firstName: 'Adreinne',
        lastName: 'Oily',
        title: 'Follow-up',
        id: 'ap4',
        time: '09:30'
    },
    {
        firstName: 'Alicia',
        lastName: 'James',
        title: 'Follow-up',
        id: 'ap1',
        time: '11:30'
    }
]

export default function TodaysAppointments() {
    return (
        <div className="appointments">
            <h3>Today's Appointments</h3>
            <div className="appointment-list">
                {APPOINTMENTS.map((appt, id) => (
                    <div key={id} className="all-cards">
                        <div className={`card ${appt.active ? 'active' : ''}`}>
                        <img src="profile.png" alt="profile" className="image"/>
                        <p>{appt.firstName}</p>
                        <span>{appt.lastName}</span>
                        <h5>{appt.title}</h5>
                        </div>
                        <div className={`time ${appt.active ? 'activeTime' : ''}`}>{appt.time}</div>
                    </div>
                ))}
                
            <div>
            </div>  
            </div>
        </div>
    )
}
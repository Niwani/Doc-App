import React, { useState } from "react";

import './Timeline.css'

const TIMELINE = [
    {
        id: 't1',
        name: 'Started shift',
        time: '06:00 AM',
        image: require('../../assets/history.png'),
        next: true
    },
    {
        id: 't2',
        name: 'Appointment',
        time: '06:30 AM',
        image: require('../../assets/profile.png')
    },
    {
        id: 't3',
        name: 'Appointment',
        time: '07:00 AM',
        image: require('../../assets/profile.png')
    },
    {
        id: 't4',
        name: 'Break',
        time: '07:30 AM',
        image: require('../../assets/coffee-cup.png')
    },
    {
        id: 't5',
        name: 'Appointment',
        time: '07:30 AM',
        image: require('../../assets/profile.png'),
        actives: true
    },
    {
        id: 't6',
        name: 'Appointment',
        time: '07:30 AM',
        image: require('../../assets/profile.png')
    }
]

export default function Timeline() {
    const [endShift, setEndShift] = useState(false);
    const [reminder, setReminder] = useState(false);

    function handleEndShiftClick() {
        setEndShift(true)
        
        setTimeout(() => setEndShift(false), 200)
    }

    function handleSetReminder() {
        setReminder(true)

        setTimeout(() => setReminder(false), 200)
    }
   

    return (
        <div className='dashboard'>
            <div>
                <h1>Your <br></br>dashboard</h1>
            </div>
            <p className='inline'>Today's Timeline</p>
            <div className='timeline'>
                {TIMELINE.map((timeline, id) => {
                    let className = 'eachTimeline';

                    if (timeline.actives) {
                      className += 'eachTimeline actives';
                    } else if (timeline.next) {
                      className += 'eachTimeline next';
                    }
                    return (
                        <div key={id} className={className}>
                            <img src={timeline.image} alt={timeline.name} className='image' />
                            <p className='name'>{timeline.name}</p>
                            <p className='time'>{timeline.time}</p>
                        </div>
                    )
                    
                })}
            </div>
            <div className='line'></div>
            <button className={endShift ? 'endShift clicked' : 'endShift'} onClick={handleEndShiftClick}>End today's shift</button>
            <button className={reminder ? 'setReminder onclick' : 'setReminder'} onClick={handleSetReminder}>Set a reminder</button>
        </div>
    )
}
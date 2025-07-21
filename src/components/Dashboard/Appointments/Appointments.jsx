import React from "react";

import './Appointments.css';

import TodaysAppointments from "./TodaysAppointments";
import MonthlyReports from "./MonthlyReports";

export default function Appointments() {
    return (
        <div className="all">
            <TodaysAppointments />
            <MonthlyReports />
        </div>
    )
}
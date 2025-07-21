import React from 'react';
import './MonthlyReports.css';
import reportImage from '../../../assets/report (1).png'

const MonthlyReports = () => {
  return (
    <div className="reports">
      <h3>Monthly reports</h3>
      <div className="report-cards">
        <div className="report-card">
            <a href='./'>
                <div className="report-header">
                    <img src={reportImage} alt='report' className="report-icon" />
                    <p>Treatment report</p>
                    
                </div>
                <div className='percent-bar'>
                    <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
                    <span className="percentage">85%</span>
                </div>
            </a>
        </div>

        <div className="report-card">
            <a href='./'>
                <div className="report-header">
                    <img src={reportImage} alt='report' className="report-icon" />
                    <p>State of being report</p>
                </div>
                <div className='percent-bar'>
                    <div className="bar"><div className="fill" style={{ width: '75%' }}></div></div>
                    <span className="percentage">75%</span>
                </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default MonthlyReports;

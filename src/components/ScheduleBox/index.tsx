import React from 'react';
import TableTop from "./TableTop";
import Couple from "./Couple";

const ScheduleBox = () => {
  const times = [
    `8:00 - 9:35`,
    '9:45 - 11:20',
    '11:30 - 13:05',
    '13:25 - 15:00',
    '15:10 - 16:45',
    '16:55 - 18:30'
  ];

  return (
    <div>
      <TableTop/>
      <div className='main'>
        <div className="main__time">
          {times.map(time => (
            <div key={time} className="main__time-item">{time}</div>
          ))}
        </div>
        <div className="main__couples">
          {[...Array(36)].map(item => (
            <Couple/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleBox;

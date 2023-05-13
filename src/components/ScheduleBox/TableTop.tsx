import React from "react";
import './ScheduleBox.scss';

const TableTop = () => {
  const days = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ]

  return (
    <div className='days'>
      <div className="group">ММИО</div>
      {days.map(day => (
        <p key={day} className="days__item">
          {day}
        </p>
      ))}
    </div>
  );
};

export default TableTop;
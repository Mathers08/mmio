import React from 'react';
import { Accordion } from "../components";

const Schedule = () => {
  return (
    <div className="container">
      <div className="schedule">
        <h1 className="page__header">
          <span>Расписание занятий</span>
        </h1>
        <Accordion/>
      </div>
    </div>
  );
};

export default Schedule;
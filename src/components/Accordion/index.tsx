import React, { FC, ReactNode, useState } from "react";
import './Accordion.scss';
import ScheduleBox from "../ScheduleBox";

const data = [
  {
    title: '1 курс 71 группа',
    paragraph: <ScheduleBox />
  },
  {
    title: '2 курс 71 группа',
    paragraph: <ScheduleBox />
  },
  {
    title: '3 курс 71 группа',
    paragraph: <ScheduleBox />
  },
  {
    title: '4 курс 71 группа',
    paragraph: <ScheduleBox />
  },
  {
    title: '3 курс 7 группа',
    paragraph: <ScheduleBox />
  },
  {
    title: '4 курс 7 группа',
    paragraph: <ScheduleBox />
  }
];

interface AccordionItemProps {
  title: string;
  paragraph: ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, paragraph }) => {
  const [opened, setOpened] = useState(false);

  const onOpenClick = () => setOpened(!opened);

  return (
    <div onClick={onOpenClick} className={opened ? 'accordion-item--opened accordion-item' : 'accordion-item'}>
      <div className="accordion-item__line">
        <h3 className="accordion-item__title">
          {title}
        </h3>
        <span className="accordion-item__icon" />
      </div>
      <div className="accordion-item__inner">
        <div className="accordion-item__content">
            {paragraph}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion">
      <ul className="accordion-list">
        {data.map((data, index) => (
          <li key={index} className="accordion-list__item">
            <AccordionItem {...data} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
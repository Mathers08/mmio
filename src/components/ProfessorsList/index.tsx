import React from 'react';
import './ProfessorsList.scss';
import { asnina, azarnova, baeva, balasheva, bondarenko, kashirina, shchepina, ukhlova, zamyatin } from "../../assets";

const ProfessorsList = () => {
  const professors = [
    {
      name: 'Азарнова Татьяна Васильевна',
      title: 'Преподаватель',
      text: 'Специальность',
      image: azarnova
    },
    {
      name: 'Бондаренко Юлия Валентиновна',
      title: 'Преподаватель',
      text: 'Специальность',
      image: bondarenko
    },
    {
      name: 'Аснина Наталия Георгиевна',
      title: 'Преподаватель',
      text: 'Специальность',
      image: asnina
    },
    {
      name: 'Баева Нина Борисовна',
      title: 'Преподаватель',
      text: 'Специальность',
      image: baeva
    },
    {
      name: 'Балашева Светлана Юрьевна',
      title: 'Преподаватель',
      text: 'Специальность',
      image: balasheva
    },
    {
      name: 'Каширина Ирина Леонидовна',
      title: 'Преподаватель',
      text: 'Специальность',
      image: kashirina
    },
    {
      name: 'Щепина Ирина Наумовна',
      title: 'Преподаватель',
      text: 'Специальность',
      image: shchepina
    },
    {
      name: 'Ухлова Вера Владимировна',
      title: 'Преподаватель',
      text: 'Специальность',
      image: ukhlova
    },
    {
      name: 'Замятин Игорь Викторович',
      title: 'Преподаватель',
      text: 'Специальность',
      image: zamyatin
    }
  ];

  return (
    <div className="professors">
      <h1 className="page__header">
        <span>Преподаватели ММИО</span>
      </h1>
      <div className="professors__list">
        {professors.map((professor) => (
          <div className="professors__list-item">
            <div className="professors__list-item-img">
              <img src={professor.image} alt="" />
            </div>
            <div className="professors__list-item-info">
              <div className="info-name">{professor.name}</div>
              <div className="info-title">{professor.title}</div>
              <div className="info-text">{professor.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="circle circle-right" />
      <div className="circle circle-left" />
    </div>
  );
};

export default ProfessorsList;
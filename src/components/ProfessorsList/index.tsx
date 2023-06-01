import React from 'react';
import './ProfessorsList.scss';
import { asnina, azarnova, baeva, balasheva, bondarenko, kashirina, shchepina, ukhlova, zamyatin } from "../../assets";

const ProfessorsList = () => {
  const professors = [
    {
      name: 'Азарнова Татьяна Васильевна',
      title: 'доктор технических наук',
      text: 'Специальность',
      image: azarnova
    },
    {
      name: 'Бондаренко Юлия Валентиновна',
      title: 'Должность',
      text: 'Специальность',
      image: bondarenko
    },
    {
      name: 'Каширина Ирина Леонидовна',
      title: 'Должность',
      text: 'Специальность',
      image: kashirina
    },
    {
      name: 'Баева Нина Борисовна',
      title: 'Должность',
      text: 'Специальность',
      image: baeva
    },
    {
      name: 'Балашева Светлана Юрьевна',
      title: 'Должность',
      text: 'Специальность',
      image: balasheva
    },
    {
      name: 'Аснина Наталия Георгиевна',
      title: 'Должность',
      text: 'Специальность',
      image: asnina
    },
    {
      name: 'Щепина Ирина Наумовна',
      title: 'Должность',
      text: 'Специальность',
      image: shchepina
    },
    {
      name: 'Ухлова Вера Владимировна',
      title: 'Должность',
      text: 'Специальность',
      image: ukhlova
    },
    {
      name: 'Замятин Игорь Викторович',
      title: 'Должность',
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
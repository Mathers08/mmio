import React from 'react';
import './index.scss';
import { info } from "../assets";

const Masters = () => {
  return (
    <div className="container">
      <div className="nir">
        <h1 className="page__header">
          <span>Магистратура</span>
        </h1>
        <div className="nir__first">
          <h2 className="page__subheader">
            <span>Информация</span>
          </h2>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p>По специальности <strong>«Бизнес-Информатика»</strong> можно продолжить образование по программе
                магистратуры. Форма обучения: очная и заочная. </p>
              <p>В рамках обучения по специальности <strong>«Бизнес-Информатика»</strong>, вы:</p>
              <ul>
                <li>получите углубленные знания по аудиту и консалтингу IT-инфраструктуры предприятий;</li>
                <li>освоите методы и инструментарий аналитической деятельности;</li>
                <li>научитесь решать прикладные задачи по стратегическому, тактическому и оперативному
                  управлению, актуальные для российских предприятий и организаций. </li>
              </ul>
            </div>
          </div>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p>Дисциплины программы магистратуры <strong>«Бизнес-Информатика»</strong> направлены на осуществление
                обучающимся научно-исследовательской и инновационно-предпринимательской деятельности.</p>
              <p>Подробную информацию об обучении по программе магистратуры <strong>«Бизнес-Информатика»</strong> вы
                можете получить в разделе «Абитуриентам» или на странице сайта  ВГУ «Абитуриент Онлайн»
                http://www.abitur.vsu.ru/</p>
            </div>
          </div>
        </div>
        <div className="circle circle-right" />
        <div className="circle circle-left" />
      </div>
    </div>
  );
};

export default Masters;
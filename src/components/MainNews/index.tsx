import React from 'react';
import './MainNews.scss';
import { actual1, actual2, actual3, actual4, actual5, actual6 } from "../../assets";
import { Link } from "react-router-dom";

const MainNews = () => {
  const items = [
    {
      id: 1,
      title: 'Приемная комиссия 2023 года начинается 19 июня.',
      img: actual1
    },
    {
      id: 2,
      title: 'С 14 июня начинается защита дипломных работ выпускников факультета ПММ.',
      img: actual2
    },
    {
      id: 3,
      title: 'Мастер-классы факультета ПММ для школьников состоится 29 апреля в 16:00.',
      img: actual3
    },
    {
      id: 4,
      title: 'Олимпиада по информатике и программированию первокурсников.',
      img: actual4,
    },
    {
      id: 5,
      title: 'Очередное заседание кафедры ММИО состоится в четверг 24 ноября в 17:00.',
      img: actual5
    },
    {
      id: 6,
      title: 'Заседание кафедры ММИО, посвященное началу учебного года, состоится 31 августа.',
      img: actual6
    },
  ];

  return (
    <section className="main-news">
      <h3 className="page__header"><span>Последние новости ММИО</span></h3>
      <div className="news-wrapper">
        {items.map(item => (
          <div className="actual" key={item.id}>
            <img className="actual__img" src={item.img} alt="" />
            <div className="actual__item">
              <h4 className="actual__item-title">{item.title}</h4>
              <button className="outline-btn">Читать</button>
            </div>
          </div>
        ))}
      </div>{/*
      <Link to='/news'>
        <button className="link-btn">Открыть все новости</button>
      </Link>*/}
    </section>
  );
};

export default MainNews;
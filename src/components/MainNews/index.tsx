import React from 'react';
import './MainNews.scss';
import { actual1, actual2, actual3, actual4, actual5, actual6 } from "../../assets";
import { Link } from "react-router-dom";

const MainNews = () => {
  const items = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: actual1
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: actual2
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: actual3
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor.',
      img: actual4,
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: actual5
    },
    {
      id: 6,
      title: 'Lorem ipsum.',
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
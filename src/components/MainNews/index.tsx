import React from 'react';
import './MainNews.scss';
import { actual1 } from "../../assets";

const MainNews = () => {
  return (
    <section className="main-news">
      <h1 className="page__header"><span>Последние новости</span></h1>
      <div className="news-wrapper">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="actual" key={index}>
            <img className="actual__img" src={actual1} alt="" />
            <div className="actual__item">
              <h4 className="actual__item-title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, tempora!
              </h4>
              <button className="outline-btn">Читать</button>
            </div>
          </div>
        ))}
      </div>
      <button className="link-btn">Открыть все новости</button>
    </section>
  );
};

export default MainNews;
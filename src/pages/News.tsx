import React from 'react';
import './index.scss';
import { actual1 } from "../assets";

const News = () => {
  return (
    <div className="container">
      <div className="news">
        <h1 className="page__header">
          <span>Новости</span>
        </h1>
        <div className='news-block'>
          <h2 className="page__subheader">
            <span>Новости кафедры</span>
          </h2>
          <div className="news__list">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="news__list-item" key={index}>
                <img className="item__img" src={actual1} alt="" />
                <div className="item__info">
                  <h4 className="item__info-title">
                    Lorem ipsum dolor.
                  </h4>
                  <p className="item__info-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <button className="link-btn">Читать</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='news-block'>
          <h2 className="page__subheader">
            <span>Новости факультета</span>
          </h2>
          <div className="news__list">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="news__list-item" key={index}>
                <img className="item__img" src={actual1} alt="" />
                <div className="item__info">
                  <h4 className="item__info-title">
                    Lorem ipsum dolor.
                  </h4>
                  <p className="item__info-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <button className="link-btn">Читать</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
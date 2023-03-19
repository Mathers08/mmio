import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="info">
        <div className="info__main">
          <div className="info__main-greet">
            <div className="greet-title">Добро пожаловать!</div>
            <p className="greet-subtitle">Кафедра математических методов исследования операций</p>
          </div>
          <div className="info__main-link">
            <div className="link-text">Подробнее о кафедре</div>
            <button className="link-btn">Перейти</button>
          </div>
        </div>
        <p className="info__text">ММИО</p>
      </div>
    </section>
  );
};

export default Hero;
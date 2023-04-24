import React, { FC } from 'react';
import './Hero.scss';
import { arrowDown } from "../../assets";

interface HeroProps {
  onBIClick: () => void;
}

const Hero: FC<HeroProps> = ({ onBIClick }) => {
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
      <div onClick={onBIClick} className="scroll-down">
        <h4>О направлении бизнес-информатика</h4>
        <img src={arrowDown} alt=""/>
      </div>
    </section>
  );
};

export default Hero;
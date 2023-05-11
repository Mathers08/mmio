import React, { FC } from 'react';
import './Hero.scss';
import { arrowDown } from "../../assets";
import { Link } from "react-router-dom";

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
            <div className="main-text">Подробная информация</div>
            <div>
              <Link to="/professors">
                <button className="main-btn">О кафедре</button>
              </Link>
              <button style={{ marginLeft: 15 }} onClick={onBIClick} className="main-btn">Бизнес-Информатика</button>
            </div>
          </div>
        </div>
        <p className="info__text">ММИО</p>
      </div>
    </section>
  );
};

export default Hero;
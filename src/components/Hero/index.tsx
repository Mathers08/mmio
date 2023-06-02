import React, { FC } from 'react';
import './Hero.scss';
import { Link } from "react-router-dom";
import { hero5 } from "../../assets";

interface HeroProps {
  onBIClick: () => void;
}

const Hero: FC<HeroProps> = ({ onBIClick }) => {
  return (
    <section className="hero__section">
      <img className='hero-img' src={hero5} alt="" />
      <div className="hero">
        <div className="hero__main">
          <div className="hero__main-greet">
            <div className="greet-title">Добро пожаловать!</div>
            <p className="greet-subtitle">Кафедра математических методов исследования операций</p>
          </div>
          <div className="hero__main-link">
            <div className="main-text">Подробная информация</div>
            <div className="main-btns">
              <Link to="/info">
                <button className="main-btn">О кафедре</button>
              </Link>
              <button style={{ marginLeft: 15 }} onClick={onBIClick} className="main-btn">Бизнес-информатика</button>
            </div>
          </div>
        </div>
        <p className="hero__text">ММИО</p>
      </div>
    </section>
  );
};

export default Hero;
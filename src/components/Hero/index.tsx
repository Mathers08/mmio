import React from 'react';
import './Hero.scss';
import { hero } from '../../assets';

const Hero = () => {
  return (
    <section className="section__hero">
        <img src={hero} className="bg" alt="bg"/>
        <div className="hero">
          <div className="hero__title">Автозапчасти</div>
          <div className="hero__subtitle">для автомобилей марок ГАЗ, ВАЗ, КАМАЗ, ПАЗ и УАЗ</div>
          <button className="btn hero__btn">Перейти</button>
        </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import './About.scss';
import { info, wave } from "../../assets";

const About = () => {
  const items = [
    'получают знания по современным компьютерным технологиям',
    'приобретают знания в области аудита и консалтинга ИТ-инфраструктуры предприятий',
    'изучают современные информационные системы и технологии управления бизнесом',
    'осваивают методы и инструментарий создания и развития электронных предприятий.',
  ];

  return (
    <section className="about-wrapper">
      <div className="container">
        <div className="about">
          <h1 className="about__title">
            <div className="about__title-text">
              Студенты <span>ММИО</span>:
            </div>
            <div className="about__title-line"></div>
          </h1>
          <div className="about__block">
            <img className="about__block-wave" src={wave} alt="" />
            {items.map(item => (
              <div key={item} className="about__block-item">
                <img src={info} alt="" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="circle circle-right" />
          <div className="circle circle-left" />
        </div>
      </div>
    </section>
  );
};

export default About;
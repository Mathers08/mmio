import React from 'react';
import './About.scss';
import { tmp, info, wave } from "../../assets";

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="container">
        <div className="about">
          <h1 className="about__title">
            <div className="about__title-text">
              <span>ММИО</span> - это:
            </div>
            <div className="about__title-line"></div>
          </h1>
          <div className="about__block">
            <img className="about__block-wave" src={wave} alt="" />
            {Array.from({ length: 4 }, (_, index) => (
              <div className="about__block-item">
              <img src={info} alt=""/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam dolor doloremque nostrum provident.
              </p>
              </div>
              ))}
          </div>
          <div className="circle circle-right"/>
          <div className="circle circle-left"/>
        </div>
      </div>
    </section>
  );
};

export default About;
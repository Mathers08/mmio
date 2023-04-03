import React from 'react';
import './About.scss';
import { info, wave } from "../../assets";

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
            <img className='about__block-wave' src={wave} alt=""/>
            <div className="about__block-item">
              <img src={info} alt=""/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor doloremque nostrum provident. A
                architecto deserunt, dolor quos soluta voluptas!
              </p>
            </div>
            <div className="about__block-item">
              <img src={info} alt=""/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate eaque id ipsa laudantium
                necessitatibus qui quod rem, saepe ullam!
              </p>
            </div>
            <div className="about__block-item">
              <img src={info} alt=""/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem dolores numquam
                repellendus voluptates. Amet aut facilis perspiciatis veritatis vitae!
              </p>
            </div>
            <div className="about__block-item">
              <img src={info} alt=""/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga fugiat illo natus neque nostrum
                quisquam sint sit veniam voluptates!
              </p>
            </div>
          </div>
          <div className="about__circle circle-right"></div>
          <div className="about__circle circle-left"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
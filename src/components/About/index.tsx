import React from 'react';
import './About.scss';
import { info } from "../../assets";

const About = () => {
  return (
    <section className="about">
      <h1 className="about__title">
        ММИО - это:
        <div className="about__title-text"></div>
      </h1>
      <div className="about__block">
        <div className="line"></div>
        <div className="about__block-item">
          <img src={info} alt=""/>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci atque dignissimos dolores ex,
            expedita incidunt laudantium minima numquam odio quasi quidem recusandae reiciendis rerum sed, similique
            sunt tempora ut! At atque aut dolorum excepturi fuga itaque, maiores veniam voluptas voluptatem voluptatum!
            A dolorum est repellat reprehenderit similique, sint vel?
          </p>
        </div>
        <div className="about__block-item">
          <img src={info} alt=""/>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci atque dignissimos dolores ex,
            expedita incidunt laudantium minima numquam odio quasi quidem recusandae reiciendis rerum sed, similique
            sunt tempora ut! At atque aut dolorum excepturi fuga itaque, maiores veniam voluptas voluptatem voluptatum!
            A dolorum est repellat reprehenderit similique, sint vel?
          </p>
        </div>
        <div className="about__block-item">
          <img src={info} alt=""/>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci atque dignissimos dolores ex,
            expedita incidunt laudantium minima numquam odio quasi quidem recusandae reiciendis rerum sed, similique
            sunt tempora ut! At atque aut dolorum excepturi fuga itaque, maiores veniam voluptas voluptatem voluptatum!
            A dolorum est repellat reprehenderit similique, sint vel?
          </p>
        </div>
        <div className="about__block-item">
          <img src={info} alt=""/>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci atque dignissimos dolores ex,
            expedita incidunt laudantium minima numquam odio quasi quidem recusandae reiciendis rerum sed, similique
            sunt tempora ut! At atque aut dolorum excepturi fuga itaque, maiores veniam voluptas voluptatem voluptatum!
            A dolorum est repellat reprehenderit similique, sint vel?
          </p>
        </div>
      </div>
      <div className="about__circle circle-right"></div>
      <div className="about__circle circle-left"></div>
    </section>
);
};

export default About;
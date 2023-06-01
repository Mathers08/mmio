import React from 'react';
import './index.scss';
import { info, nir_example, nir_rules, nir_title, pdf, word } from "../assets";

const Practice = () => {
  return (
    <div className="container">
      <div className="practice">
        <h1 className="page__header">
          <span>Производственная практика</span>
        </h1>

        <div className="practice__first">
          <h2 className="page__subheader">
            <span>Сроки прохождения практик</span>
          </h2>
          <div className="practice__first-item">
            <img className="text-img" src={info} alt="" />
            <div>
              <div>
                <h3>Прикладная математика и информатика</h3>
                <p className="item-paragraph">ПП: 10.04.2023 - 08.05.2023</p>
              </div>
              <div style={{ marginTop: 20 }}>
                <h3>Бизнес-информатика</h3>
                <p className="item-paragraph">ПП1: 10.04.2023 - 22.04.2023</p>
                <p className="item-paragraph">ПП2: 24.04.2023 - 08.05.2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="practice__second">
          <h2 className="page__subheader">
            <span>Названия практик</span>
          </h2>
          <div className="practice__second-item">
            <img className="text-img" src={info} alt="" />
            <div>
              <div>
                <h3>Прикладная математика и информатика (гр. 3, 5, 6, 7, 8)</h3>
                <p className="item-paragraph">ПП: Производственная практика, проектно-технологическая</p>
              </div>
              <div style={{ marginTop: 20 }}>
                <h3>Бизнес-информатика</h3>
                <p className="item-paragraph">
                  ПП1: Производственная практика по получению профессиональных умений и опыта
                  профессиональной деятельности
                </p>
                <p className="item-paragraph">
                  ПП2: Производственная практика по получению профессиональных умений и опыта
                  аналитической и научно-исследовательской деятельности
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="practice__third">
          <h2 className="page__subheader">
            <span>Руководители практик</span>
          </h2>
          <div className="practice__third-item">
            <img className="text-img" src={info} alt="" />
            <div>
              <div>
                <h3>7 группа</h3>
                <p className="item-paragraph">преподаватель Петровская Наталья Александровна</p>
                <p className="item-paragraph">8 (908) 149-84-82</p>
                <p className="item-paragraph">natalilabmmio317@yandex.ru</p>
              </div>
              <div style={{ marginTop: 20 }}>
                <h3>71 группа</h3>
                <p className="item-paragraph">доцент Замятин Игорь Викторович</p>
                <p className="item-paragraph">8 (910) 340-03-62</p>
                <p className="item-paragraph">igor@zamyatiny.ru</p>
              </div>
            </div>
          </div>
        </div>
        <div className="practice__links">
          <div className="practice__links-item">
            <img src={pdf} alt="" />
            <a href={nir_rules} target="_blank">ПП: правила оформления</a>
          </div>
          {/*<div className="practice__links-item">
            <img src={pdf} alt="" />
            <a href={nir_example} target="_blank">ПП: пример отчета</a>
          </div>
          <div className="practice__links-item">
            <img src={word} alt="" />
            <a href={nir_title} download={nir_title}>ПП: титульный лист</a>
          </div>*/}
        </div>

      </div>
    </div>
  );
};

export default Practice;

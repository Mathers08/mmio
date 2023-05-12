import React from 'react';
import './index.scss';
import { nir_example, nir_rules, nir_title, pdf, info, word } from "../assets";

const Nir = () => {
  return (
    <div className="container">
      <div className="nir">
        <h1 className="page__header">
          <span>Научно-исследовательская работа</span>
        </h1>

        <div className="nir__first">
          <h2 className="page__subheader">
            <span>Информация о НИР</span>
          </h2>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="" />
            <p>
              Обязательными программами по всем специальностям факультета
              прикладной математики, информатики и механики Воронежского государственного университета предусмотрено
              выполнение студентами отчетов по
              лабораторным работам, курсовых работ, выпускных квалификационных работ (выпускная работа бакалавра,
              дипломная
              работа, магистерская диссертация). Выполнение всей перечисленной текстовой документации требует
              соответствия существующим стандартам, единообразия в оформлении, а
              также соблюдения определенного порядка в структуре и содержании.
            </p>
          </div>
        </div>

        <div className="nir__second">
          <h2 className="page__subheader">
            <span>Требования к НИР</span>
          </h2>
            <div className="nir__second-item">
              <img className="text-img" src={info} alt="" />
              <div>
                <p>Отчет по НИР за <strong>1 семестр 4-го курса</strong> должен содержать:</p>
                <ol>
                  <li>Обзор по выбранной теме ВКР (из нескольких источников), обоснование ее актуальности.</li>
                  <li>Цель и задачи исследования.</li>
                  <li>Список использованных источников.</li>
                </ol>
                <p>Объем отчета по НИР- не менее <strong>15</strong> стр. Правила оформления текста ниже.</p>
                <p>Оригинальность текста должна составлять не менее <strong>60</strong> процентов.</p>
              </div>
            </div>
        </div>
        <div className="nir__links">
          <div className="nir__links-item">
            <img src={pdf} alt="" />
            <a href={nir_rules} target="_blank">НИР: правила оформления</a>
          </div>
          <div className="nir__links-item">
            <img src={pdf} alt="" />
            <a href={nir_example} target="_blank">НИР: пример отчета</a>
          </div>
          <div className="nir__links-item">
            <img src={word} alt="" />
            <a href={nir_title} download={nir_title}>НИР: титульный лист</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nir;

/*
*  <div className="nir__about">
          <img className="text-img" src={tmp} alt="" />
          <p className="nir__about-text">
            Обязательными программами по всем специальностям факультета
            прикладной математики, информатики и механики Воронежского государственного университета предусмотрено
            выполнение студентами отчетов по
            лабораторным работам, курсовых работ, выпускных квалификационных работ (выпускная работа бакалавра,
            дипломная
            работа, магистерская диссертация). Выполнение всей перечисленной текстовой документации требует
            соответствия существующим стандартам, единообразия в оформлении, а
            также соблюдения определенного порядка в структуре и содержании.
          </p>
        </div>
        <div className="nir__info">
          <div className="nir__info-text">
            <p>Отчет по НИР за <strong>1 семестр 4-го курса</strong> должен содержать:</p>
            <ol>
              <li>Обзор по выбранной теме ВКР (из нескольких источников), обоснование ее актуальности.</li>
              <li>Цель и задачи исследования.</li>
              <li>Список использованных источников.</li>
            </ol>
            <p>Объем отчета по НИР- не менее <strong>15</strong> стр. Правила оформления текста ниже.</p>
            <p>Оригинальность текста должна составлять не менее <strong>60</strong> процентов.</p>
          </div>
          <div className="nir__info-links">
            <div className="link-item">
              <img src={pdf} alt="" />
              <a href={nir_rules} target="_blank">НИР: правила оформления</a>
            </div>
            <div className="link-item">
              <img src={pdf} alt="" />
              <a href={nir_example} target="_blank">НИР: пример отчета</a>
            </div>
            <div className="link-item">
              <img src={word} alt="" />
              <a href={nir_title} download={nir_title}>НИР: титульный лист</a>
            </div>
          </div>
        </div>
* */
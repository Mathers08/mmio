import React from 'react';
import { info } from "../assets";

const SecondDegree = () => {
  return (
    <div className="container">
      <div className="nir">
        <h1 className="page__header">
          <span>Второе высшее образование</span>
        </h1>
        <div className="nir__first">
          <h2 className="page__subheader">
            <span>Информация</span>
          </h2>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p>Направление подготовки <strong>«Бизнес-Информатика»</strong> актуально для тех, кто работает в
                банковской и
                финансовой сфере, занимает руководящие должности IT-департаментов. Это возможность
                получить профессию аудитора, системного аналитика, IT-консультанта, специалиста в области
                консалтинга, разработки и внедрения проектов на базе информационных технологий.</p>
            </div>
          </div>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p>За время обучения вы получите знания и по информационным технологиям, и по экономике,
                научитесь ставить и решать задачи, имеющие практическую значимость, освоите современный
                инструментарий подготовки аналитических отчетов и сопроводительной документации по
                проектам и контрактам. </p>
            </div>
          </div>
        </div>
        <div className="nir__second">
          <h2 className="page__subheader">
            <span>Виды деятельности</span>
          </h2>
          <div className="nir__second-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p>В рамках обучения можно выбрать специализацию по следующим видам деятельности:</p>
              <ul>
                <li>аналитической;</li>
                <li>проектной;</li>
                <li>организационно-управленческой;</li>
                <li>научно-исследовательской;</li>
                <li>консалтинговой;</li>
                <li>инновационно-предпринимательской.</li>
              </ul>
              <p>На базе высшего образования  обучение осуществляется по программам бакалавриата и
                специалитета. Форма обучения: очная и заочная. Вступительные испытания проводятся по
                математике. Сроки их проведения и перечень необходимых документов для поступления можно
                узнать на странице приемной комиссии ВГУ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDegree;
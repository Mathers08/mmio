import React, { FC, LegacyRef } from 'react';
import './BI.scss';
import { gerb, info } from "../../assets";

interface BIProps {
  biRef?: LegacyRef<HTMLElement>;
}

const BI: FC<BIProps> = ({ biRef }) => {
  const biItems = [
    {
      logo: info,
      title: 'Бакалавриат',
      text: 'Форма обучения: очная и заочная. Вступительные проводятся по предметам: математика, обществознание и русский язык.'
    },
    {
      logo: info,
      title: 'Магистратура',
      text: 'Форма обучения: очная и заочная. Дисциплины программы магистратуры «Бизнес-Информатика» направлены на осуществление обучающимся научно-исследовательской и инновационно-предпринимательской деятельности.'
    },
    {
      logo: info,
      title: 'Второе высшее образование',
      text: 'Форма обучения: очная и заочная. Вступительные испытания проводятся по математике. Сроки их проведения и перечень необходимых документов для поступления можно узнать на странице приемной комиссии ВГУ.'
    },
    {
      logo: info,
      title: 'Заочное образование',
      text: 'Обучение проводится по программам бакалавриата, магистратуры и как второе высшее образование. Вступительные испытания - математика. Сроки поступления и перечень необходимых документов можно узнать на странице приемной комиссии ВГУ.'
    }
  ];

  return (
    <section ref={biRef} className="bi">
      <img className="bi__bg" src={gerb} alt="" />
      <h1 className="page__header"><span>Бизнес-информатика</span></h1>
      <div className="bi__content">
        {biItems.map(obj => (
          <div className="bi__content-item">
            <img src={obj.logo} alt="" />
            <h4>{obj.title}</h4>
            <p>{obj.text} <span>Узнать больше</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BI;
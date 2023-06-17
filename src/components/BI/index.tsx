import React, { FC, LegacyRef } from 'react';
import './BI.scss';
import { gerb, info } from "../../assets";
import { Link } from "react-router-dom";

interface BIProps {
  biRef?: LegacyRef<HTMLElement>;
}

const BI: FC<BIProps> = ({ biRef }) => {
  const biItems = [
    {
      logo: info,
      title: 'Бакалавриат',
      text: 'Форма обучения: очная и заочная. Вступительные экзамены проводятся по предметам: математика, обществознание и русский язык.',
      link: '/applicants'
    },
    {
      logo: info,
      title: 'Магистратура',
      text: 'Форма обучения: очная и заочная. Дисциплины программы магистратуры «Бизнес-информатика» направлены на осуществление обучающимся научно-исследовательской и инновационно-предпринимательской деятельности.',
      link: '/masters'
    },
    {
      logo: info,
      title: 'Второе высшее образование',
      text: 'Форма обучения: очная и заочная. Вступительные испытания проводятся по математике. Сроки их проведения и перечень необходимых документов для поступления можно узнать на странице приемной комиссии ВГУ.',
      link: '/second-degree'
    },
    {
      logo: info,
      title: 'Заочное образование',
      text: 'Обучение проводится по программам бакалавриата, магистратуры и как второе высшее образование. Вступительные испытания - математика. Сроки поступления и перечень необходимых документов можно узнать на странице приемной комиссии ВГУ.',
    }
  ];

  return (
    <section ref={biRef} className="bi">
      <img className="bi__bg" src={gerb} alt="" />
      <h2 className="page__header"><span>Бизнес-информатика</span></h2>
      <div className="bi__content">
        {biItems.map(obj => (
          <div className="bi__content-item">
            <img src={obj.logo} alt="" />
            <h4>{obj.title}</h4>
            <p>{obj.text} {obj.link && <Link to={obj.link}><span>Узнать больше</span></Link>}</p>
          </div>
        ))}

        <div className="circle circle-right" />
        <div className="circle circle-left" />
      </div>
    </section>
  );
};

export default BI;
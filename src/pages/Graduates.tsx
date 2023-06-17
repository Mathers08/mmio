import React from 'react';
import './index.scss';
import { info } from "../assets";

const Graduates = () => {
  return (
    <div className="container">
      <div className="nir">
        <h1 className="page__header">
          <span>Выпускники</span>
        </h1>
        <div className="nir__first">
          <h2 className="page__subheader">
            <span>Информация</span>
          </h2>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p><strong>Приглашаем к общению своих выпускников!</strong></p>
              <p>Выпускники нашей кафедры – это специалисты высочайшей квалификации, которые востребованы
                во многих крупных организация госсектора и коммерческих предприятий. Более того, они работают
                не только в России, но и за рубежом. Москва, Санкт-Петербург, Нью-Йорк, Веллингтон, Торонто – и
                это только некоторые города мира, где знают наших выпускников.</p>
            </div>
          </div>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p>Преподаватели кафедры <strong>ММИО</strong> приглашают к общению, а возможно, и дальнейшему
                сотрудничеству своих выпускников. Если вы еще являетесь нашим студентом, то будем рады
                продолжить с вами общение и дальше вне учебного процесса. </p>
              <p><strong>Написать нам можно по электронному адресу, указанному на главной странице.</strong></p>
            </div>
          </div>

          <div className="circle circle-right" />
          <div className="circle circle-left" />
        </div>

      </div>
    </div>
  );
};

export default Graduates;
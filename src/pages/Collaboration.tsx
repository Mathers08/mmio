import React from 'react';
import './index.scss';
import { UserForm } from "../components";
import { info } from "../assets";

const Collaboration = () => {
  return (
    <div className="container">
      <div className="collaboration">
        <h1 className="page__header">
          <span>Сотрудничество</span>
        </h1>
        <div className="nir__first">
          <h2 className="page__subheader">
            <span>Информация</span>
          </h2>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p>Преподаватели кафедры ММИО готовят специалистов для  дальнейшей профессиональной
                деятельности в качестве:</p>
              <ul>
                <li>системных аналитиков;</li>
                <li>консультантов IT-проектов;</li>
                <li>руководителей и менеджеров IT-департаментов;</li>
                <li>специалистов по проектированию, внедрению и эксплуатации информационных систем;</li>
                <li>организаторов инновационного бизнеса в сфере ИТ.</li>
              </ul>
              <p>Если ваша организация заинтересована в таких специалистах, то приглашаем вас выступить в роли
                работодателя для наших выпускников. Организуем встречи со студентами, поможем с
                информированием о вакансиях. Готовы рассмотреть предложения по организации преддипломных
                практик в вашей организации. </p>
            </div>
          </div>
          <div className="nir__first-item">
            <img className="text-img" src={info} alt="ммио" />
            <div>
              <p> Оказываем также помощь организациям госсектора и коммерческим предприятиям по решению
                задач в рамках научно-исследовательской деятельности кафедры.</p>
              <p>Вы можете обратиться к нам по вопросам:</p>
              <ul>
                <li>составления аналитических отчетов и прогнозов;</li>
                <li>математического моделирования сложных технологических  процессов;</li>
                <li>разработки алгоритмов принятия решений;</li>
                <li>постановки задач управления бизнес-процессами.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nir__first">
          <h2 className="page__subheader">
            <span>Свяжитесь с нами</span>
          </h2>
          <UserForm />
        </div>

        <div className="circle circle-right" />
        <div className="circle circle-left" />
      </div>
    </div>
  );
};

export default Collaboration;

import React, { useState } from 'react';
import './Navbar.scss';
import { chevron, tmp, info } from '../../assets';
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarItems = [
    {
      item: 'Главная',
      link: '/'
    },
    {
      item: 'Новости',
      link: '/news'
    },
    {
      item: 'Студентам',
      subItems: [
        {
          item: 'Расписание занятий',
          link: '/schedule'
        },
        {
          item: 'Расписание сессии',
          link: '/session'
        },
        {
          item: 'Летняя практика',
          link: '/summer-practice'
        },
        {
          item: 'Курсовая работа',
          link: '/coursework'
        }
      ],
      link: window.location.pathname
    },
    {
      item: 'Выпускникам',
      subItems: [
        {
          item: 'НИР',
          link: '/nir'
        },
        {
          item: 'ПП',
          link: '/practice'
        },
        {
          item: 'Диплом',
          link: '/diploma'
        },
      ],
      link: window.location.pathname
    },
    {
      item: 'О кафедре',
      subItems: [
        {
          item: 'Информация',
          link: '/info'
        },
        {
          item: 'Преподаватели',
          link: '/professors'
        }
      ],
      link: window.location.pathname
    },
    {
      item: 'Сотрудничество',
      link: '/collaboration'
    },
  ];
  const [isActive, setIsActive] = useState(false);

  const onBurgerClick = () => setIsActive(!isActive);

  return (
    <nav className="navbar__section">
      <div className={isActive ? 'navbar navbar-active' : 'navbar'}>
        {navbarItems.map((obj) => (
          <div className="navbar__item">
            <Link to={obj.link}>{obj.item}</Link>
            {obj.subItems && <img src={chevron} alt="" />}
            {obj.subItems && <div className="navbar__item-submenu">
              {obj.subItems.map((obj) => (
                <Link to={obj.link}>
                  <img src={info} alt="ммио" />
                  <div className="submenu-item">{obj.item}</div>
                </Link>
              ))}
            </div>}
          </div>
        ))}
      </div>
      <div onClick={onBurgerClick} className={isActive ? 'burger burger-active' : 'burger'}>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

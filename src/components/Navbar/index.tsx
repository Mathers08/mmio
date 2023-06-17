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
      item: 'Абитуриентам',
      link: '/applicants'
    },
    {
      item: 'Студентам',
      subItems: [
        {
          item: 'Расписание сессии',
          link: '/session'
        },
        {
          item: 'НИР',
          link: '/nir'
        },
        {
          item: 'ПП',
          link: '/practice'
        },
        {
          item: 'Магистратура',
          link: '/masters'
        },
        {
          item: 'Второе высшее',
          link: '/second-degree'
        },
      ],
      link: window.location.pathname
    },
    {
      item: 'Выпускники',
      link: '/graduates'
    },
    {
      item: 'О кафедре',
     /* subItems: [
        {
          item: 'Информация',
          link: '/info'
        },
        {
          item: 'Преподаватели',
          link: '/professors'
        }
      ],*/
      link: '/info'
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

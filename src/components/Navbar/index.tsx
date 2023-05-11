import React, { useState } from 'react';
import './Navbar.scss';
import { chevron } from '../../assets';
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
          link: '/schedule-session'
        },
        {
          item: 'Летняя практика',
          link: '/practice'
        }
      ],
      link: ''
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
          link: '/pp'
        },
        {
          item: 'Диплом',
          link: '/dip'
        },
      ],
      link: ''
    },
    {
      item: 'О кафедре',
      subItems: [
        {
          item: 'История',
          link: '/history'
        },
        {
          item: 'Преподаватели',
          link: '/professors'
        }
      ],
      link: ''
    },
    {
      item: 'Сотрудничество',
      link: '/collaboration'
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);
  const toggleIsHovered = () => setIsHovered(!isHovered);

  return (
    <nav className="navbar">
      <button className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleIsOpen}></button>
      {navbarItems.map((obj) => (
        <div className="navbar__item">
          <Link to={obj.link}>{obj.item}</Link>
          {obj.subItems && <img src={chevron} alt="" />}
          {obj.subItems && <div className="navbar__item-submenu">
            {obj.subItems.map((obj) => (
              <div className="submenu-item">
                <Link to={obj.link}>{obj.item}</Link>
              </div>
            ))}
          </div>}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;

/*
        <div className="navbar__item">
          <button className="button">
            Главная
          </button>
        </div>
        <div className="navbar__item">
          <button className="button">
            Новости
            <img src={chevron} alt=""/>
          </button>
        </div>
        <div className="navbar__item">
          <button className="button">
            Студентам
            <img src={chevron} alt=""/>
          </button>
          <div className="navbar__item-menu">
            <button>Расписание</button>
            <button>Рассписание сессии</button>
            <button>Летняя практика</button>
          </div>
        </div>
        <div className="navbar__item">
          <button className="button">
            Выпускникам
            <img src={chevron} alt=""/>
          </button>
          <div className="navbar__item-menu">
            <button>Расписание</button>
            <button>Рассписание сессии</button>
            <button>Научно-исследовательская работа</button>
            <button>Производственная практика</button>
            <button>Диплом</button>
          </div>
        </div>
        <div className="navbar__item">
          <button className="button">
            О кафедре
            <img src={chevron} alt=""/>
          </button>
          <div className="navbar__item-menu">
            <button>История</button>
            <button>Преподаватели</button>
          </div>
        </div>
        <div className="navbar__item">
          <button className="button">
            Сотрудничество
            <img src={chevron} alt=""/>
          </button>
        </div>*/
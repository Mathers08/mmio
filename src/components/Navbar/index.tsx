import React, { useState } from 'react';
import './Navbar.scss';
import { chevron } from '../../assets';

const Navbar = () => {
  const navbarItems = [
    {
      item: 'Главная'
    },
    {
      item: 'Новости'
    },
    {
      item: 'Студентам',
      subItems: ['Расписание', 'Расписание сессии', 'Летняя практика']
    },
    {
      item: 'Выпускникам',
      subItems: ['Расписание', 'Расписание сессии', 'Научно-исследовательская работа', 'Производственная практика', 'Диплом']
    },
    {
      item: 'О кафедре',
      subItems: ['История', 'Преподаватели']
    },
    {
      item: 'Сотрудничество',
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
          {obj.item}
          {obj.subItems && <img src={chevron} alt=""/>}
          {obj.subItems && <div className="navbar__item-submenu">
            {obj.subItems.map((item) => (
              <div className='submenu-item'>
                <button>{item}</button>
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
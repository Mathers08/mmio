import React from 'react';
import './Header.scss';
import { address, burger, logo, phone, time } from '../../assets';

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner-logo"><img src={logo} alt="logo" /></div>
        <div className="header__inner-info">
          <div className="info__text">
            <p>Воронежский государственный университет</p>
            <p>Факультет прикладной математики, информатики и механики</p>
          </div>
          <div className="info__list">
            <div className="info__list-item">
              <img src={phone} alt="phone" className="item-img" />
              <div className="item__info">
                <div className="item__info-text">Связь:</div>
                <div className="item__info-strong">+7 (473) 220-82-82</div>
                <div className="item__info-text">mmio@amm.vsu.ru</div>
              </div>
            </div>
            <div className="info__list-item">
              <img src={time} alt="time" className="item-img" />
              <div className="item__info">
                <div className="item__info-text">Время работы:</div>
                <div className="item__info-strong">8:30 - 16:30</div>
                <div className="item__info-text">сб, вс - выходной</div>
              </div>
            </div>
            <div className="info__list-item">
              <img src={address} alt="address" className="item-img" />
              <div className="item__info">
                <div className="item__info-text">Адрес:</div>
                <div className="item__info-strong">
                  г. Воронеж, Университетская пл. 1, каб. 317, кафедра ММИО
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__inner-burger">
          <img src={burger} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
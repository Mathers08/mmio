import React from 'react';
import './Footer.scss';
import { address, logo, phone, time } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer__block">
      <div className="container">
        <div className="footer">
          <div className="footer__left">
            <img className="footer__left-logo" src={logo} alt="logo"/>
            <div className="footer__left-text">
              <p>Воронежский государственный университет</p>
              <p>Факультет прикладной математики, информатики и механики</p>
            </div>
            <div className="social">
              <img className="vk-img" src="./img/vk.png" alt="vk"/>
              <img className="telegram-img" src="./img/telegram.png" alt="telegram"/>
            </div>
          </div>
          <div className="footer__middle">
            <div className="footer__middle-textBlock">
              <p>Сайт ВГУ</p>
              <p>О кафедре</p>
            </div>
            <div className="footer__middle-textBlock">
              <p>Сайт ПММ</p>
              <p>Сотрудничество</p>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__right-item">
              <img src={phone} alt="telephone"/>
              <div className="item__info">
                <div className="item__info-text">Связь:</div>
                <div className="item__info-strong">+7 (473) 220-82-82</div>
                <div className="item__info-text">mmio@amm.vsu.ru</div>
              </div>
            </div>
            <div className="footer__right-item">
              <img src={time} alt="time"/>
              <div className="item__info">
                <div className="item__info-text">Время работы:</div>
                <div className="item__info-strong">8:30 - 16:30</div>
                <div className="item__info-text">сб, вс - выходной</div>
              </div>
            </div>
            <div className="footer__right-item">
              <img src={address} alt="address"/>
              <div className="item__info">
                <div className="item__info-text">Адрес:</div>
                <div className="item__info-strong">г. Воронеж, пл. Университетская, стр. 1, каб. 317, кафедра ММИО</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
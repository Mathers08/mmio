import React, { FC, LegacyRef } from 'react';
import './Footer.scss';
import { address, logo, phone, telegram, time, vk, whatsapp } from "../../assets";
import { Link } from "react-router-dom";

interface FooterProps {
  contactRef: LegacyRef<HTMLDivElement>;
}

const Footer: FC<FooterProps> = ({ contactRef }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__left">
            <img className="footer__left-logo" src={logo} alt="logo" />
            <div className="footer__left-text">
              <p>Воронежский государственный университет</p>
              <p>Факультет прикладной математики, информатики и механики</p>
            </div>
          </div>
          <div className="footer__middle">
            <div className="footer__middle-textBlock">
              <div className="textBlock-item">
                <p><a href="https://www.vsu.ru/" target="_blank">Сайт ВГУ</a></p>
                <p><a href="http://www.amm.vsu.ru/" target="_blank">Сайт ПММ</a></p>
                <p><Link to='/info'>О кафедре</Link></p>
                <p><Link to='/professors'>Преподаватели</Link></p>
              </div>
              <div className="textBlock-item">
                <p><Link to='/schedule'>Расписание</Link></p>
                <p><Link to='/news'>Новости</Link></p>
                <p><Link to='/practice'>Практика</Link></p>
                <p><Link to='/collaboration'>Сотрудничество</Link></p>
              </div>
            </div>
            <div className="footer__middle-social">
              <img src={vk} alt="" />
              <img src={telegram} alt="" />
              <img src={whatsapp} alt="" />
            </div>

          </div>
          <div ref={contactRef} className="footer__right">
            <div className="footer__right-item">
              <img src={phone} alt="telephone" />
              <div className="item__info">
                <div className="item__info-text">Связь:</div>
                <div className="item__info-strong">+7 (473) 220-82-82</div>
                <div className="item__info-text">mmio@amm.vsu.ru</div>
              </div>
            </div>
            <div className="footer__right-item">
              <img src={time} alt="time" />
              <div className="item__info">
                <div className="item__info-text">Время работы:</div>
                <div className="item__info-strong">8:30 - 16:30</div>
                <div className="item__info-text">сб, вс - выходной</div>
              </div>
            </div>
            <div className="footer__right-item">
              <img src={address} alt="address" />
              <div className="item__info">
                <div className="item__info-text">Адрес:</div>
                <div className="item__info-strong">г. Воронеж, Университетская пл. 1, каб. 317, кафедра ММИО</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
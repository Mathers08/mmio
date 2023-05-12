import React from 'react';
import './UserForm.scss';
import { useInput } from "../../hooks";
import { gerb } from "../../assets";

const UserForm = () => {
  const fullName = useInput("");
  const email = useInput("");
  const phone = useInput("");
  const letter = useInput("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fullName.value, email.value, phone.value, letter.value);
  };

  return (
    <section className="userform__section">
      <form className="userform" onSubmit={onSubmit}>
        <input className="userform__input" placeholder="Введите ФИО" type="text" {...fullName} />
        <input className="userform__input" placeholder="Введите почту" type="email" {...email} />
        <input className="userform__input" placeholder="Введите номер телефона" type="number" {...phone} />
        <textarea className="userform__text" placeholder="Напишите небольшое сопроводительное письмо..." {...letter} />
        <button type="submit" className="link-btn">Отправить</button>
      </form>
      <img className="form-img" src={gerb} alt="" />
    </section>
  );
};

export default UserForm;
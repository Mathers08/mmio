import React from 'react';
import './index.scss';
import { UserForm } from "../components";

const Collaboration = () => {
  return (
    <div className="container">
      <div className="collaboration">
        <h1 className="page__header">
          <span>Свяжитесь с нами</span>
        </h1>
        <UserForm />
      </div>
    </div>
  );
};

export default Collaboration;

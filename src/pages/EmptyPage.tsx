import React, { FC } from 'react';
import './index.scss';
import { info } from "../assets";

interface EmptyPageProps {
  pageTitle: string;
}

const EmptyPage: FC<EmptyPageProps> = ({ pageTitle }) => {
  return (
    <div className="empty-page">
      <h1 className="page__header">
        <span>{pageTitle}</span>
      </h1>
      <div className="empty-page-info">
        <img src={info} alt="ммио" />
        <p>На данный момент информация отсутствует!</p>
      </div>
    </div>
  );
};

export default EmptyPage;
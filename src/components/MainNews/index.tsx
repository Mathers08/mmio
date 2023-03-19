import React from 'react';
import './MainNews.scss';
import {actual1} from "../../assets";

const MainNews = () => {
  return (
    <section className="main-news">
      <h1 className="page__header">{"\u00a0"}Последние новости</h1>
      <div className="actual">
        <img className='actual__img' src={actual1} alt=""/>
        <div className="actual__item">
          <h4 className='actual__item-title'>Lorem ipsum</h4>
          <p className='actual__item-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid animi at blanditiis commodi cupiditate eius est eum eveniet, ex expedita fuga fugit harum inventore ipsam iusto labore libero modi, nesciunt nulla odio possimus praesentium quam quas quia quibusdam quisquam saepe sint tempora tempore tenetur veniam voluptates voluptatum? A aliquid commodi ducimus et eveniet incidunt laboriosam, molestiae, natus optio porro provident quas saepe soluta voluptatem voluptatum. Aliquam deleniti, explicabo id quo saepe tempora tempore veritatis voluptate? Accusamus commodi consectetur culpa cumque ducimus expedita fugit harum ipsa, labore maiores molestias necessitatibus odit possimus reprehenderit sapiente! Autem consequuntur dolor dolorem ducimus et qui quis ullam velit? Ab accusantium animi assumenda atque distinctio ducimus eligendi error, incidunt inventore ipsam laborum magni maiores odio officiis quae quibusdam quisquam quod ratione, tempore, tenetur unde veniam voluptates. Adipisci alias, aliquid culpa doloremque doloribus facere, hic id modi mollitia numquam, pariatur porro provident quibusdam totam velit veritatis.</p>
        </div>
      </div>
      <div className="actual">
        <img className='actual__img' src={actual1} alt=""/>
        <div className="actual__item">
          <h4 className='actual__item-title'>Lorem ipsum</h4>
          <p className='actual__item-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aliquid cum, cumque dolores eos explicabo, illum incidunt, iure laboriosam laudantium modi nam numquam praesentium repellat suscipit voluptates voluptatibus voluptatum. Alias aliquid amet corporis eius facilis fugiat impedit laboriosam libero magni natus necessitatibus nemo, nesciunt nihil nisi non nulla numquam perspiciatis provident quam ratione saepe sed tempore temporibus ullam ut veniam, voluptatibus. Aliquam, aut autem beatae, debitis deserunt dolore earum enim esse eveniet explicabo fugit illo illum itaque natus nesciunt non officiis quidem quod recusandae rem sequi similique voluptas. Aspernatur culpa doloribus illum quis vitae. Ab, at esse ex excepturi fuga nam numquam perferendis quo reprehenderit tempora? Blanditiis culpa cum, cupiditate, et excepturi itaque laborum minima odio quae quo repellat saepe sed! Culpa exercitationem inventore maiores minus mollitia, nam veniam. Aspernatur delectus ipsum officiis, sed velit vitae voluptas. Dicta, ex explicabo harum in maiores minus molestias optio perspiciatis sed tempora!</p>
        </div>
      </div>
      <button className="link-btn">Открыть все новости</button>
    </section>
  );
};

export default MainNews;
import React, { useRef } from 'react';
import { About, BI, Footer, Hero, MainNews } from "../components";

const Home = () => {
  const biRef = useRef<HTMLInputElement | null>(null);

  const onBIClick = () => biRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <div className="container">
        <Hero onBIClick={onBIClick} />
      </div>
      <About />
      <div className="container">
        <BI biRef={biRef} />
        <MainNews />
      </div>
    </>
  );
};

export default Home;
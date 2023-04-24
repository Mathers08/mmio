import './App.scss';
import React, { useRef } from "react";
import { About, BI, Footer, Header, Hero, MainNews, Navbar } from "./components";

const App = () => {
  const biRef = useRef<HTMLInputElement | null>(null);

  const onBIClick = () => biRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="main__body">
      <div className="container">
        <Header />
        <Navbar />
        <Hero onBIClick={onBIClick} />
      </div>
      <About />
      <div className="container">
        <BI biRef={biRef} />
        <MainNews />
      </div>
      <Footer />
    </div>
  );
};

export default App;

import React, { useRef } from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import {
  Collaboration,
  Coursework,
  Diploma,
  Home,
  Info,
  News,
  Nir,
  Practice,
  Professors,
  Schedule,
  Session,
  SummerPractice
} from "./pages";
import { Footer, Header, Navbar } from "./components";

const App = () => {
  const contactRef = useRef<HTMLInputElement | null>(null);

  const onContactClick = () => {
    if (window.innerWidth < 612) {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wrapper">
      <div style={{ height: 180 }}>
        <div className="container">
          <Header onContactClick={onContactClick} />
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/session" element={<Session />} />
        <Route path="/summer-practice" element={<SummerPractice />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/nir" element={<Nir />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/diploma" element={<Diploma />} />
        <Route path="/info" element={<Info />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/collaboration" element={<Collaboration />} />
      </Routes>
      <Footer contactRef={contactRef} />
    </div>
  );
};

export default App;

import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import { Collaboration, Home, Info, Nir, Practice, Professors, Schedule } from "./pages";
import { Footer, Header, Navbar } from "./components";

const App = () => {
  return (
    <div className="wrapper">
      <div style={{ height: 180 }}>
        <div className="container">
          <Header />
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/nir" element={<Nir />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/info" element={<Info />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/collaboration" element={<Collaboration />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

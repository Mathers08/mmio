import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import { Collaboration, Home, Info, Nir, Professors } from "./pages";
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
        <Route path="/professors" element={<Professors />} />
        <Route path="/nir" element={<Nir />} />
        <Route path="/info" element={<Info />} />
        <Route path="/collaboration" element={<Collaboration />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

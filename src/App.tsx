import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import { Home, Info, Nir, Professors } from "./pages";
import { Footer, Header, Navbar } from "./components";

const App = () => {
  return (
    <div className="main__body">
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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

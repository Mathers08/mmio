import React from "react";
import './App.scss';
import { Route, Routes } from "react-router-dom";
import { Home, Nir, Professors } from "./pages";
import { Header, Navbar } from "./components";

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
      </Routes>
    </div>
  );
};

export default App;

  import React, { useRef } from "react";
  import './App.scss';
  import { Route, Routes } from "react-router-dom";
  import { Applicants, Collaboration, Graduates, Home, Info, Masters, Nir, Practice, Professors, SecondDegree, Session
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
            <div className="wrapper__content">
              <Header onContactClick={onContactClick} />
              <Navbar />
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/session" element={<Session />} />
          <Route path="/nir" element={<Nir />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/second-degree" element={<SecondDegree />} />
          <Route path="/graduates" element={<Graduates />} />
          <Route path="/info" element={<Info />} />
          <Route path="/professors" element={<Professors />} />
          <Route path="/collaboration" element={<Collaboration />} />
        </Routes>
        <Footer contactRef={contactRef} />
      </div>
    );
  };

  export default App;

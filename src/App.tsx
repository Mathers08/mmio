import './App.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainNews from "./components/MainNews";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div className="main__body">
      <div className="container">
        <Header/>
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <div className="container">
        <MainNews/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

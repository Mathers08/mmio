import './App.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainNews from "./components/MainNews";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='main__body'>
      <div className='container'>
        <Header/>
        <Navbar/>
        <Hero/>
        <MainNews/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;

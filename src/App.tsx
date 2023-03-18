import './App.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className='main__body'>
      <div className='container'>
        <Header/>
        <Hero/>
      </div>
    </div>
  );
};

export default App;

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Cocktail from './components/Cocktail';
import Timings from './components/Timings';

function App() {
  return (
    <div className="App">
      
      <Header/>   
        <Timings/>
        <Menu/>
        <Cocktail/>
      <Footer/>
        
    </div>
  );
}


export default App;

import './App.css';
import Mattresses from './Matresses'
import logo from './assets/images/saatva_logo.png';
import cart from './assets/images/shopping-cart-1985.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Saatva logo" height='30px'></img>
        <img src={cart} alt="shopping cart" height='30px'></img>
      </header>
      < Mattresses />
    </div>
  );
}

export default App;

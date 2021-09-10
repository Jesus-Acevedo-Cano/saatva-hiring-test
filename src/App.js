import './App.css';
import Mattresses from './Matresses'
import logo from './assets/images/saatva_logo.png';
import cart from './assets/images/shopping-cart-1985.png'

export const shoppingCart = [];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Saatva logo" height='30px'></img>
        <div className="shop-cart">
          <img src={cart} alt="shopping cart"></img>
          <p>{shoppingCart.length}</p>
        </div>
      </header>
      < Mattresses />
    </div>
  );
}

export default App;

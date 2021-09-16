import "./Header.css";
import logo from './assets/images/saatva_logo.png';
import cart from './assets/images/shopping-cart-1985.png'

export const shoppingCart = [];
function Header() {
    return (
        <header className="App-header">
            <img src={logo} alt="Saatva logo" height='30px'></img>
            <div className="shop-cart">
                <img src={cart} alt="shopping cart"></img>
                <span>{shoppingCart.length}</span>
            </div>
      </header>
    )
}

export default Header;
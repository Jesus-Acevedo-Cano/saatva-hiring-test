import "./Header.css"
import logo from './assets/images/saatva_logo.png'
import cart from './assets/images/shopping-cart-1985.png'

export const shoppingCart = [];
function Header() {
    const shoppingCartLength = shoppingCart.length
    return (
        <header className="App-header">
            <a href="/" title="Navigate to home page"><img src={logo} alt="Saatva logo" height='30px'></img></a>
            <a className="shop-cart" href="/" title="Navigate to shopping cart">
                <img src={cart} alt="shopping cart icon"></img>
                <span>{shoppingCartLength}</span>
            </a>
      </header>
    )
}

export default Header;
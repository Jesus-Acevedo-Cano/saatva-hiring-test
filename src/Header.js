import "./Header.css"
import logo from './assets/images/saatva_logo.png'
import cart from './assets/images/shopping-cart-1985.png'
import { service } from './matressesServices'
import { useState } from "react";
import { take } from "rxjs";

function Header() {
    const [shoppingCart, setValue] = useState(0)
    service.getData().pipe(take(1)).subscribe(res => {setValue(res.length); console.log(res)})
    return (
        <header className="App-header">
            <a href="/" title="Navigate to home page"><img src={logo} alt="Saatva logo" height='30px'></img></a>
            <a className="shop-cart" href="/" title="Navigate to shopping cart">
                <img src={cart} alt="shopping cart icon"></img>
                <span>{shoppingCart}</span>
            </a>
      </header>
    )
}

export default Header;
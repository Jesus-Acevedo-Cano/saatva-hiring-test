import './Mattresses.css'
import React, { useState } from 'react'
import data from './assets/mattresses.json'
import { shoppingCart } from './Header'
import classic_img from './assets/images/classic-carousel.jpg'
import loom_img from './assets/images/loom-carousel.jpg'
import zen_img from './assets/images/zen-carousel.jpg'

function Mattresses() {
  const [value, setValue] = useState("classic")
  const mattresses = data.mattresses
  let source = classic_img;
  if (value === "loom") source = loom_img;
  else if (value === "zen") source = zen_img;
  return (
    <div className="mattresses_body">
      <img className="mattress_image" src={source} alt="mattresses images"></img>
      <div className="mattresses_selection">
        <h2>Choose Your Mattress</h2>
        <p className="bolder">SELECT MATTRESS TYPE</p>
        <div className="buttons_section">
          {/*<button onClick={() => { setValue("classic") }}>Saatva Classic</button>
          <button onClick={() => { setValue("loom") }}>Loom & Leaf</button>
          <button onClick={() => { setValue("zen") }}>Zenhaven</button> */}
          {Object.keys(mattresses).map((value, index) => {
            return <button key={`${value}`} onClick={() => { 
              setValue(value) }}>{mattresses[value]["name"]}</button>
          })}
        </div>
        <div className="name_price">
          <p className="bolder">{`${mattresses[value]["name"]}`} Mattress</p>
          <p>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(mattresses[value]["price"])}</p>
        </div>
        <div className="name_price">
          <p className="bolder">Review rating:</p>
          <p>{`${mattresses[value]["reviewRating"]}`}</p>
        </div>
        {/* button to add item to cart depends on his value acting as a key */}
        <button className="add_btn" onClick={() => {
          shoppingCart.push(mattresses[value]);
          console.log(shoppingCart)
        }}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Mattresses;

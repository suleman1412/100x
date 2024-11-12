import { useState } from "react"
import BrowseProducts from "./BrowseProducts"
import ShoppingCart from "./ShoppingCart"
import './NavBar.css'

const NavBar = () => {
    const [itemsInCart, setItemsInCart] = useState([]); 
    const [currTab, setcurrTab] = useState('Browse')
    return (
    <>  
      <div className="NavBar">
        <div>
          <h1>
            amazon.in
          </h1>
        </div>
        <div className="actionButtons">
          <label htmlFor="browseButton">
              <h4>
                Browse
              </h4>
          </label>
          <button id="browseButton" onClick={() => setcurrTab('Browse')} hidden>Browse</button>
          <label id='cartLabel' htmlFor="cartButton">
              <h3>
                🛒 {itemsInCart.length === 0 ? null : <span id="cartBubble">{itemsInCart.length}</span>}
              </h3>
          </label>
          <button id="cartButton" onClick={() => setcurrTab('Cart')} hidden>🛒 Cart </button>
        </div>
      </div>
      <div>
        {currTab === 'Browse' ? <BrowseProducts setItemsInCart={setItemsInCart} /> : <ShoppingCart itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>}
      </div>
    </>
  )
}

export default NavBar

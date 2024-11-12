/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './ShoppingCart.css'
import CartEmpty from "./CartEmpty";

const ShoppingCart = ({ itemsInCart, setItemsInCart }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const total = itemsInCart.reduce((sum, item) => Math.round((sum + item.price) * 100) / 100, 0);
        setTotalPrice(total);
    }, [itemsInCart]);

    return (
        <div className="mainContainer">
            <ImageCard itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
            <Checkout totalPrice={totalPrice} itemsInCart={itemsInCart} setItemsInCart={setItemsInCart}/>
        </div>
    );
};

function ImageCard({ itemsInCart, setItemsInCart }) {
    const removeItem = (idToRemove, indexToRemove) => {
        setItemsInCart(prevData => 
            prevData.filter((item, index) => !(item.id === idToRemove && index === indexToRemove))
        )
    };

    return (
        <div className="ListContainer">
            <div id="heading">Shopping Cart</div>
            {itemsInCart.length === 0 ? <CartEmpty /> : <div>
                {itemsInCart.map((item, index) => (
                    <div className="itemCard" key={`${item.id}-${index}`}>
                        {/* {console.log(`Product : ${item.title}ItemId: ${item.id} Index: ${index} `)} */}
                        <img src={item.thumbnail} alt={item.title} style={{ width: '100px' }} />
                        <h6 id="productTitle">{item.title}</h6>
                        <p id='productPrice'>$ {item.price}</p>
                        <button id='removeButton' onClick={() => removeItem(item.id, index)}>🗑️</button>
                    </div>
                ))}
            </div>}
        </div>
    );
}

function Checkout({ totalPrice, itemsInCart, setItemsInCart }) {
    return (
        <div className="checkOutContainer">
            <div id='checkOutHeading'>Order Summary</div>
            <div id="itemsText">
                <p>Items ({itemsInCart.length}): </p>
                <p>{totalPrice}</p>
            </div>
            <div id='orderTotal'>
                <p>Order Total:</p>
                <p>{totalPrice}</p>
            </div>
            <button id="BuyButton" onClick={() => {
                alert("Order Confirmed!")
                setItemsInCart([])
                }}>Proceed to Buy</button>
        </div>
    );
}

export default ShoppingCart;
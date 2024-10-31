/* eslint-disable react/prop-types */
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import './ProductCard.css'

function ProductCard({ data, setItemsInCart, isLoading }) {
    const [showNotification, setShowNotification] = useState(false);
    const addToCart = () => {
        setItemsInCart(prevItems => [...prevItems, data]);
        setShowNotification(true)
        setTimeout(() => {
            setShowNotification(false)
        }, 500) 
    };
    
    if (isLoading) {
        return (
            <div className='product'>
                <p id='title'><Skeleton height={20} width={70} /></p> 
                <p id='image'><Skeleton width={200} height={240} /></p> 
                <p id='price'><Skeleton width={60} /></p> 
                <Skeleton height={35} width={100} /> 
            </div>
        );
    }

    return (<>
        <div className='product'>
            <p id='title'>{data.title}</p> 
            <img id='thumbnail' src={data.thumbnail} alt={data.title} />
            <p id='price'>${data.price}</p> 
            <button id='addButton' onClick={addToCart}>Add to Cart</button> 
        </div>
        {showNotification && (
                    <div className="notification">
                        Product added to cart
                    </div>
        )}
    </>

    );
}

export default ProductCard
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BrowseProducts.css';

const BrowseProducts = ({ itemsInCart, setItemsInCart }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=100`);
            // console.log(response.data);
            setProducts(response.data.products); 
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProducts(); 
    }, []);

    return (
        <div className='productListContainer'>
            {isLoading ? (
                <div>
                    Loading...
                </div>
            ) : (
                <div className='productList'>
                    {products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            data={product} 
                            setItemsInCart={setItemsInCart} 
                        /> 
                    ))}
                </div>
            )}
        </div>
    );
};

function ProductCard({ data, setItemsInCart }) {
    const addToCart = () => {
        setItemsInCart(prevItems => [...prevItems, data]); 
    };

    return (
        <div className='product'>
            <p id='title'>{data.title}</p> 
            <img id='thumbnail' src={data.thumbnail} alt={data.title} />
            <p id='price'>${data.price}</p> 
            <button id= 'addButton' onClick={addToCart}>Add to Cart</button> 
        </div>
    );
}

export default BrowseProducts;
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BrowseProducts.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Don't forget to import this

const BrowseProducts = ({  setItemsInCart }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://dummyjson.com/products?limit=100`);
                setProducts(response.data.products); 
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false);
            }
        };
        getProducts(); 
    }, []);

    return (
        <div className='productListContainer'>
            <div className='productList'>
                {isLoading ? (
                    // Show multiple skeleton cards while loading
                    Array(5).fill(0).map((_, index) => (
                        <ProductCard key={index} isLoading={true} />
                    ))
                ) : (
                    products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            data={product} 
                            setItemsInCart={setItemsInCart}
                            isLoading={false} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};

function ProductCard({ data, setItemsInCart, isLoading }) {
    const addToCart = () => {
        setItemsInCart(prevItems => [...prevItems, data]); 
    };

    if (isLoading) {
        return (
            <div className='product'>
                <p id='title'><Skeleton height={20} /></p> 
                <Skeleton height={200} width="100%" /> {/* For image */}
                <p id='price'><Skeleton width={60} /></p> 
                <Skeleton height={35} width={100} /> {/* For button */}
            </div>
        );
    }

    return (
        <div className='product'>
            <p id='title'>{data.title}</p> 
            <img id='thumbnail' src={data.thumbnail} alt={data.title} />
            <p id='price'>${data.price}</p> 
            <button id='addButton' onClick={addToCart}>Add to Cart</button> 
        </div>
    );
}

export default BrowseProducts;
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BrowseProducts.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
import ProductCard from './ProductCard';

const BrowseProducts = ({  setItemsInCart, itemsInCart }) => {
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



export default BrowseProducts;
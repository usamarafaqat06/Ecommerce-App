import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import Products from './Products';
// import { Link } from 'react-router-dom'
// import ProductButton from './ProductButton';
import CartsData from './CartsData';
import { useCart } from 'react-use-cart';

import { useNavigate } from 'react-router-dom';
// import CartTable from './CartTable';

  
function ProductCarts() {
    const [cartData, setCartData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const totalPages = Math.ceil(cartData.length / pageSize);
    console.log(totalPages)
    const currentData = cartData.slice(
        (currentPage - 1) * pageSize, currentPage * pageSize

    )
    console.log(currentData)
    useEffect(() => {
        fetchProduct();
    }, []);
        
    const {totalItems} =useCart();
    const fetchProduct = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setCartData(response.data);
        

        }
        catch (error) {
            console.log(error)
        }

    }
    const navigate = useNavigate();
    const navigateToCart = () => {
        
        navigate('/CartTable');
      };
    return (
        <> 
            <h1 className='text-center text-danger mt-4 hd'> Product</h1>
            <div className='mx-5'  style={{textAlign:'right'}} onClick={navigateToCart}>
            <i class="fa-solid fa-cart-shopping pt-5 " ></i>
            {totalItems}
         
          </div>
            <CartsData currentData={currentData}
             cartData={cartData}
            currentPage ={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            />
        </>
    )
}

export default ProductCarts
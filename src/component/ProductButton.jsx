import React from 'react'
import { useCart } from 'react-use-cart'
import { useNavigate } from 'react-router-dom';
function ProductButton({currentPage , setCurrentPage , totalPages}) {
    const { isEmpty} =useCart();
    const navigate = useNavigate();
    const navigateToCart = () => {
        
        navigate('/CartTable');
      };
  return (
    <>
    <div className='text-center mt-5'>
    <button className='btn btn-secondary mx-2' disabled={isEmpty} onClick={navigateToCart} >Checkout</button>
    <button className='btn btn-primary mx-2'disabled={currentPage ===1} onClick={()=>setCurrentPage(1)}>First</button>
    <button className='btn btn-warning mx-2'disabled={currentPage===1}  onClick={()=>setCurrentPage(currentPage-1)}>Previous</button>
    <button className='btn btn-success mx-2' disabled={currentPage===totalPages} onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
    <button className='btn btn-info mx-2'disabled={currentPage===totalPages}  onClick={()=>setCurrentPage(totalPages)}>Last</button>
    </div>
    </>
  )
}

export default ProductButton
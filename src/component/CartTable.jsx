import React from 'react'
import {useCart} from 'react-use-cart'
import NavbarTask from './NavbarTask'
function CartTable() {
    const {
        isEmpty,
        totalUniqueItems,
        items,totalItems,
        updateItemQuantity,
        removeItem,
      } = useCart()
      const { emptyCart } = useCart()
      const { cartTotal } = useCart();
  return (
    <>
<NavbarTask/>
   <div className="container my-5">
                <div className="row justify-content-center" >
                 {items.length>0?  <div className="col-lg-12">
                    <h4 className={`text-${totalItems <=3? 'danger': totalItems<=5?'warning':totalItems<= 7?'primary':'success'}`}>Unique items are {totalUniqueItems} & total items are {totalItems}</h4>
                    <h4 className={` mt-2 text-${cartTotal <=3? 'danger': cartTotal<=5?'warning':cartTotal<= 7?'primary':'success'}`}>Total Price:{cartTotal}</h4>
                    <button className='btn btn-warning my-3'disabled={isEmpty} onClick={() => emptyCart()}>Empty</button>
                         <table  className='table table-bordered table-hover table-striped text-center my-2 ' >
                            <thead>
                                <tr className='bg-danger text-light'>
                                  <th>ID</th>
                                  <th>title</th>
                                  <th>Quantity</th>
                                  <th>price</th>
                                  <th>category</th>
                                  <th>Image</th>
                                  <th>Actions</th>
                                 
                                  
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((value ,index) =>{
                                    return(
                                        <tr
                                        key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.title}</td>
                                            <td>{value.quantity}</td>
                                            <td>{value.price}</td>
                                            <td>{value.category}</td>
                                            <td><img src={value.image} alt='abc' style={{height:'50px'}}/></td>
                                            <td>
                                            <button className='btn btn-danger mx-3' onClick={() => updateItemQuantity(value.id, value.quantity - 1)} >-</button>
                                                <button className='btn btn-success' onClick={() => updateItemQuantity(value.id, value.quantity + 1)} >+</button>
                                                <button className='btn btn-dark mx-3' onClick={() => removeItem(value.id)}>Remove</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                         </table>
                        </div>
                        :
                        <div className='clearboth d-flex justify-content-center align-items-center'>
 <span className=' d-block text-center text-capitalize fw-bold text-danger ' style={{fontSize:"30px"}}>Please Add Products To Cart First</span></div> 
                        }
                        </div>
                            
                        </div>
    </>
  )
}

export default CartTable
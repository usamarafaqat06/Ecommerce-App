import React from 'react'
import {  useCart } from 'react-use-cart'
function Product(props) {
  const { addItem } = useCart()
  return (
    <>
   
     <div className="col-lg-3 col-xs-12">
      
            <div className=" my-5 mx-3 pt-4 px-2 card card-shadow hvr-bounce-in " style={{overflow:'hidden' , minHeight:"0px"}}>
                <img src={props.image} style={{ height:"200px", objectFit:'contain'}} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title " style={{overflow:'hidden', textOverflow:"ellipsis" ,whiteSpace:"nowrap" ,fontSize:"17px"}}>{props.title}</h5>
                    <h5 class="card-title">${props.price}</h5>
                    <p class="card-text">{props.desc}</p>
                    <div className='d-grid ' >
                    <button className='btn btn-danger mb-2' onClick={()=>addItem(props.item)}>Add to Cart</button>
                    </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Product
import React from 'react'
import cart from  "./images/cart.webp"
import cart1 from  "./images/cart1.webp"
import carts from  "./images/carts.jpg"
function Slider() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner"  >
    <div className="carousel-item active">
      <img src={cart} className="d-block w-100" alt="..." style={{height:'80vh'}}/>
    </div>
    <div className="carousel-item">
      <img src={cart1} className="d-block w-100" alt="..." style={{height:'80vh'}}/>
    </div>
    <div className="carousel-item">
      <img src={carts} className="d-block w-100" alt="..." style={{height:'80vh'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider

import React from 'react'
import './Task.css'
import { Link } from 'react-router-dom'
function NavbarTask() {
  return (
    <> 
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand ms-3 text-danger" href="/"><i class="fa-solid fa-cart-shopping"></i>Shop Here</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/"><i class="fa fa-home" aria-hidden="true"></i>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Products"><i class="fa-solid fa-database"></i>Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/CartTable"><i class="fa-solid fa-table"></i>Checkout</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default NavbarTask
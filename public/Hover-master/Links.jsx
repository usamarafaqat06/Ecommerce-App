import React from 'react'
import { Link } from 'react-router-dom'
function Links() {
  return (
    <>
    <div className='mx-5 mt-5'  style={{textAlign:'right'}}>
     <Link style={{color:'red',fontWeight:'bold' ,marginLeft:'10px' }} to="/Products"> View All</Link>
     </div>
    </>
  )
}

export default Links
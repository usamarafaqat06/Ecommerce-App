import React, { useEffect, useState } from 'react';
import Products from './Products';

function CartsData({ cartData }) {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (value) => {
    setSearchText(value);
  };

  useEffect(() => {
    // Filter the cartData based on searchText
    const filteredData = cartData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredData);
  }, [cartData, searchText]);

  return (
    <>
      <div className="container">
        <div class="input-group w-75 mx-auto  my-5 ">
          <input
            type="search"
            class="form-control rounded bg-light border border-dark rounded-pill"
            placeholder="Filter Products"
            aria-label="Search"
            aria-describedby="search-addon"
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
         
        </div>
        <div className="row">
          {data.length >0 ? data.map((item, index) => {
            return (
              <Products
                key={index}
                title={item.title}
                desc={item.category}
                price={item.price}
                image={item.image}
                item={item}
              />
            );
          })
        :<div className='clearboth d-flex justify-content-center align-items-center'>
 <span className=' d-block text-center text-capitalize fw-bold text-danger ' style={{fontSize:"30px"}}>No Product found</span></div> 
                            
        }
        </div>
      </div>
    </>
  );
}

export default CartsData;
 
             
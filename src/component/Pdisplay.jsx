import React,{useState ,useEffect} from 'react'
 import axios from 'axios';
 import Products
  from './Products';
  import ProductButton from './ProductButton';
function Pdisplay() {
  
    const [cartData, setCartData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const totalPages = Math.ceil(cartData.length / pageSize);
    const currentData = cartData.slice(
        (currentPage - 1) * pageSize, currentPage * pageSize
    )
  
    useEffect(() => {
        fetchProduct();
    }, []);
        
    
    const fetchProduct = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setCartData(response.data);
        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <>
           <div className="container">
                <div className='row'>
                {currentData.map((item, index) => {
                        return (
                            <Products
                                key={index}
                                title={item.title}
                                desc={item.category}
                                price={item.price}
                                image={item.image}
                                item={item}
                            />
                        )
                    })
                    }
                    </div>
                </div>
                 <ProductButton
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    /> 
    </>
  )
}

export default Pdisplay

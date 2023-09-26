import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import CartsData from "./component/CartsData";
import Products from "./component/Products";
import ProductNav from "./component/ProdcuctNav";
import CartTable from "./component/CartTable";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cartData" element={<CartsData />}></Route>
            <Route path="/Product" element={<Products />}></Route>
            <Route path="/Products" element={<ProductNav />}></Route>
            <Route path="/CartTable" element={<CartTable />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;

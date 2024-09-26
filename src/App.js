
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shopcategory from "./Pages/Shopcategory";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import banner1 from "./Components/Images/banner_mens.png";
import banner2 from "./Components/Images/banner_women.png";
import banner3 from "./Components/Images/banner_kids.png";


function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Shop/>}></Route>
      <Route path="/Men" element={<Shopcategory banner={banner1} category="men"/>}></Route>
      <Route path="/women" element={<Shopcategory banner={banner2} category="women"/>}></Route>
      <Route path="/kids" element={<Shopcategory banner={banner3} category="kid"/>}></Route>
      <Route path="/product" element={<Product/>}>
      <Route path=":productId" element={<Product/>}></Route>
      </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
     </Routes>
     </BrowserRouter>
     
    
    
  
    
      <Footer/>
    
      
  
  


  
    </div>
  );
}

export default App;

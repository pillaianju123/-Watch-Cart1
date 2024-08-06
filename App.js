import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login.jsx";
import Register from "./Register.jsx";
import Carts from "./Carts.jsx";
import { myContext } from "./Context.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { watches } from "./watch.jsx";
import ProductView from "./ProductView.jsx";
import Wish from "./wish.jsx";
import Addcart from "./Addcart.jsx";
import Profile from "./Profile.jsx";
// import Footer from './Footer.jsx';
import React from "react";
import Footer from "./Footer";
import Admin from "./Admin.jsx";
import Main from "./Main.jsx";
import Admindash from "./Admindash.jsx";
import Product from"./Product.jsx";
import ManageUser from "./ManageUser.jsx";
import Piguet from "./Piguet.jsx";
import Patek from "./Patek.jsx";
import Jaeger from "./Jaeger.jsx";
import Cartier from "./Cartier.jsx";
import Hudolt from "./Hudlot.jsx";


function App() {
  const [user, setUser] = useState([]);
  const [watch, setWatch] = useState(watches);
  const [wish, setWish] = useState([]);
  const [addcart, setAddCart] = useState([]);
  const [num, setNum] = useState(1);
  const[product,setProduct]=useState([])
  const[banned,setBanned]=useState([]);
  console.log("Banned",banned);
  

  
  const data = {
    user,
    setUser,
    watch,
    setWatch,
    wish,
    setWish,
    addcart,
    setAddCart,
    num,
    setNum,product,setProduct,banned,setBanned
    

  };
  return (
    <div className="App">
      <div>
        {/* <header className="App-header"> */}
        {/* Your existing header content */}
        {/* </header> */}
        {/* <main>Your existing main content</main> */}
        <BrowserRouter>
          <myContext.Provider value={data}>
            {/* <Navbar/> */}
            <Routes>
              <Route path="/"element={<Main/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Carts" element={<Carts />} />
              <Route path="/Wish" element={<Wish />} />
              <Route path="/carts/:title" element={<ProductView />} />
              <Route path="/Cart" element={<Addcart />} />
              <Route path="/Profile" element={<Profile />}></Route>
              <Route path="/Admin"element={<Admin/>}></Route>
              <Route path="/Main"element={<Main/>}></Route>
              <Route path="/Admindash"element={<Admindash/>}></Route>
              <Route path="/Product"element={<Product/>}></Route>
              <Route path="/ManageUser"element={<ManageUser/>}></Route>
              <Route path="/Piguet"element={<Piguet/>}></Route>
              <Route path="/Patek"element={<Patek/>}></Route>
              <Route path="/Jaeger"element={<Jaeger/>}></Route>
              <Route path="/Cartier"element={<Cartier/>}></Route>
              <Route path="/Hudlot"element={<Hudolt/>}></Route>
              {/* <Route path="/Wish"element={<Profile/>}></Route> */}
              {/* <Route path="/Contactus"element={<Contactus/>}/> */}

              {/* <Route path="/Nav" element={<Nav/>}></Route> */}
            </Routes>
          </myContext.Provider>
        </BrowserRouter>
      </div>
      {/* <div className="footermain"> */}
        {/* <Footer /> */}
      {/* </div> */}
    </div>
  );
}
export default App;

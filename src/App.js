import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aboutpage from "./pages/Aboutpage";
import Loginpage from "./pages/Loginpage";
import Homepage from "./pages/Homepage";
import Productspage from "./pages/Productspage";
import Productdetails from "./pages/Productdetails";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Usercontext from "./pages/Usercontext";
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Cart from "./pages/Cart";

function App() {

  var user_id=localStorage.getItem("user_id")
  const [details,changedetails]=useState(null)

  const FetchData=async()=>{
    const data=new FormData()

data.append("user_id",user_id)
const response =await axios.post("https://amazon.indianhackerslab.com/get-account.php",data,{header:{'content-type':'multipart/form-data'}})
if(response){
    console.log (response.data.data)
    if(response.data.status==="success")
    {
      console.log(response.data.data[0])
      changedetails(response.data.data)
    }
}
}

useEffect(()=>{
  FetchData()
},[user_id])
  return (
    <div className="App">
    <Usercontext.Provider value={details}>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
        <Route path="/login" element={<Loginpage></Loginpage>}></Route>
        <Route path="/products" element={<Productspage></Productspage>}></Route>
        <Route path="/productsdetails/:product_id" element={<Productdetails/>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </Usercontext.Provider>
    </div>

  );
}

export default App;

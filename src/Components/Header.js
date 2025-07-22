import React from 'react'
import download from '../images/download.png'
import cart2 from '../images/cart2.png'
import location from '../images/location.png'
import india from '../images/india.png'
import { Dropdown } from "react-bootstrap";
import { Link } from 'react-router';
const Header = () => {
  return (
    <div className="Header">
      <div className="first-navbar">
    <img src={download} alt='logo' width="110" height="50"></img>
    <div className="location">
      <img src={location} alt="hlo" height='30' width="30"></img>
      <div>
        <p>Delivering to Attili 534134</p>
        <h5>Update location</h5>
      </div>
    </div>
    <div className="searchbar"></div>
    <div className="lang">
      <img src={india} alt="india" height="30" width="30"></img>
      <h5>EN</h5></div>
    <div>
    <p>Hello Customer</p>
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm">
        <h6 className="mb-0 d-inline">Account & List</h6>
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-black">
        <Dropdown.Item>
          <Link to="/login" className="btn btn-primary w-100">Login</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/signup" className="btn btn-primary w-100">Sign-up</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/account" className="btn btn-primary w-100">Account</Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    <div>
      <p>Returns</p>
      <h5>& orders</h5></div>
    <div className="cart">
      <img src={cart2} alt="hlo" width="30" height="30"></img>
      <h5><Link to="/cart" className="text-white text-decoration-none">cart</Link></h5>
    </div>
        

  </div>
    <div className="second-navbar">
    <h6><Link to="/products" className="text-white text-decoration-none">All</Link></h6>
    <h6>MX Player</h6>
    <h6>Sell</h6>
    <h6>Best Sellers</h6>
    <h6>Today's Deals</h6>
    <h6>Mobiles</h6>
            <h6>Customer Service</h6>
            <h6>Electronics</h6>
            <h6>Prime</h6>
            <h6>New Releases</h6>
            <h6>Amazon Pay</h6>
            <h6>Home & Kitchen</h6>
            <h6>Fashion</h6>
            <h6>Computers</h6>
      

    </div>

</div>
    
  )
}

export default Header

import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
    <footer className="bg-dark text-white mt-5 #1E3A4C">
      <div className="bg-secondary text-center py-3" onClick={scrollToTop} style={{ cursor: "pointer" }}>
        <p className="mb-0">Back to top</p>
      </div>
      
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Make Money with Us</h5>
            <ul className="list-unstyled">
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Amazon Payment Products</h5>
            <ul className="list-unstyled">
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <h5>Let Us Help You</h5>
            <ul className="list-unstyled">
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary text-center py-3">
        <p className="mb-0">&copy; 2025 Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
      </div>
  )
}

export default Footer
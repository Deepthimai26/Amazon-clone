
import React,{useContext} from 'react';
import Usercontext from './Usercontext';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router';

const Account = () => {

  var details=useContext(Usercontext)
  const Logout=()=>{
    localStorage.removeItem("user_id")
    window.location.replace("/")
  }

    const accountOptions = [
      {
        title: "Your Orders",
        description: "Track, return, or buy things again",
        link: "/orders",
      },
      {
        title: "Login & Security",
        description: "Edit login, name, and mobile number",
        link: "/login-security",
      },
      {
        title: "Prime",
        description: "View benefits and payment settings",
        link: "/prime",
      },
      {
        title: "Your Addresses",
        description: "Edit addresses for orders and gifts",
        link: "/addresses",
      },
      {
        title: "Your Business Account",
        description:
          "Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit.",
        link: "/business-account",
      },
      {
        title: "Payment Options",
        description: "Edit or add payment methods",
        link: "/payment-options",
      },
      {
        title: "Amazon Pay Balance",
        description: "Add money to your balance",
        link: "/amazon-pay-balance",
      },
      {
        title: "Contact Us",
        description: "Contact our customer service via phone or chat",
        link: "/contact-us",
      },
    ];
  

  return (

    <div>
      {details && details.length > 0 ? (
  <div className="container mt-4">
  <div className="row align-items-center border p-3 shadow rounded bg-light">
    <div className="col-md-4 text-center">
      <img 
        src="https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg"
        alt="Profile" 
        className="rounded-circle border border-primary" 
        width="120" 
        height="120"
      />
    </div>
    <div className="col-md-8">
    <h2 className="text-primary">{details[0].username }</h2>
    <h4 className="text-muted">{details[0].user_id }</h4>
    <h4 className="text-muted">{details[0].registration_date }</h4>
    <h4 className="text-muted">{details[0].address}</h4>
      <h4 className="text-muted">{details[0][9] }</h4>
      <button onClick={()=>{Logout()}} type="button" class="btn btn-outline-primary me-2">Logout</button>
    </div>
  </div>
</div>
) : (
  <></>
)}

      <Container className="my-5">
        <h2 className="mb-4">Your Account</h2>
        <Row>
          {accountOptions.map((option, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>
                    <Link to={option.link} className="text-dark text-decoration-none">
                      {option.title}
                    </Link>
                  </Card.Title>
                  <Card.Text className="text-muted">{option.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  )
}

export default Account
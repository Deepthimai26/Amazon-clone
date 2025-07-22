import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router';
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from 'react';
import Checklogin from './Checklogin';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Home = () => {
  const [loggedin,setLoggedin]=useState(Checklogin())
    const[products,changeProducts]=useState(null)
    const FetchData=async()=>{
        const data=new FormData()
        const response=await axios.post("https://amazon.indianhackerslab.com/get-products.php",data,{header:{'content-type':'multipart/form-data'}})
    if(response){
        console.log(response.data.products )
        changeProducts(response.data.products)
        changeLoading(false)
    }
    }
    products?products.map((product)=>{
        console.log(product)
    }):console.log("No Products")
    const[loading,changeLoading]=useState(true)
    useEffect(()=>{
        FetchData()
    },[])
  return (
    <div>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>
    {loggedin?
          <div>
            <Link to={"/account"} class="btn btn-outline-primary me-2">Accounts</Link>
        </div>:<div class="col-md-3 text-end">
        <Link to={"/login"} type="button" class="btn btn-outline-primary me-2">Login</Link>
        <Link to={"/Signup"}type="button" class="btn btn-primary">Sign-up</Link>
      </div>}

    </header>
    <div>
        <div className="d-flex flex-wrap container">
        {products?products.map((product)=>(
        <div className="col-3 mb-3 p-2 ">
            <div className="innerbox shawdow border p-2">
            <FavoriteBorderOutlinedIcon/>
            <img src={product.images} className="w-100"></img>
            <h5>{product.name}</h5>
       
       
        <Rating name="half-rating" readOnly defaultValue={product.rating} precision={0.5} />
        <p>{product.ratings}</p>
        <h6>Rs.{product.price}</h6>
        <p>MRP.<del>{product.cutoff_price}</del></p>
        <h6>({product.discount}%off)</h6>
        <div className="d-flex justify-content-between">
        <Link to={'/productsdetails/'+product.product_id}>
        <button className="btn btn-info">View Details</button>
        </Link>
        <button className="btn btn-warning">Add to Cart</button>
       
        </div>
            </div>
        
        
    </div>
         )):<div><p>No Products</p></div>}
        </div>
        {loading? <div className='d-flex flex-wrap container'>
            <div className='col-3 shadow mb-4 p-3 m-8'>
            <Skeleton variant="rectangular" width={300} height={300} />
            </div>
            <div className='col-3 shadow mb-4 p-3 m-8'>
            <Skeleton variant="rectangular" width={300} height={300} />
            </div>
            <div className='col-3 shadow mb-4 p-3 m-8'>
            <Skeleton variant="rectangular" width={300} height={300} />
            </div>
            <div className='col-3 shadow mb-4 p-3 m-8'>
            <Skeleton variant="rectangular" width={300} height={300} />
            </div>
            <div className='col-3 shadow mb-4 p-3 m-8'>
            <Skeleton variant="rectangular" width={300} height={300} />
            </div>
            <div className='col-3 shadow mb-4 p-3 m-8'>
            <Skeleton variant="rectangular" width={300} height={300} />
            </div>
            </div>
            :<></>}
    </div>
    </div>
  )
}

export default Home
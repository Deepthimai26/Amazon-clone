import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router';
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from 'react';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Products = () => {
    const addToCart = (product) => {
        let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingProduct = existingCart.find((item) => item.product_id === product.product_id);
      
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          existingCart.push({ ...product, quantity: 1 });
        }
      
        localStorage.setItem("cart", JSON.stringify(existingCart));
        alert("Product added to cart!");
      };
    
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
    const [favorites, setFavorites] = useState({});
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  return (
    <div>
        <div className="d-flex flex-wrap container">
        {products?products.map((product)=>(
        <div className="col-3 mb-3 p-2 ">
            <div className="innerbox shawdow border p-2">
            <div onClick={() => toggleFavorite(product.product_id)} style={{ cursor: "pointer" }}>
                {favorites[product.product_id] ? <FavoriteIcon color="error" /> : <FavoriteBorderOutlinedIcon />}
              </div>
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
        <button className="btn btn-warning" onClick={() => addToCart(product)}>Add to Cart</button>
       
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
    
  )
}

export default Products;
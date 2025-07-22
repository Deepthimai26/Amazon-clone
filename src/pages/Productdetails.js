import axios from 'axios';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';

const Productdetails = () => {
    const { product_id } = useParams();
    const [details, setDetails] = useState(null);

    const FetchData = async () => {
        const data = new FormData();
        data.append("product_id", product_id);

        const response = await axios.post("https://amazon.indianhackerslab.com/get-product-details.php", data, { 
            headers: { 'content-type': 'multipart/form-data' }
        });

        if (response) {
            console.log(response.data);
            setDetails(response.data.product_data);
        }
    };

    const addToCart = () => {
        let existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingProduct = existingCart.find((item) => item.product_id === details.product_id);
      
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            existingCart.push({ ...details, quantity: 1 });
        }
      
        localStorage.setItem("cart", JSON.stringify(existingCart));
        alert("Product added to cart!");
    };

    useEffect(() => {
        FetchData();
    }, [product_id]);

    return (
        <div>
            {details ? (
                <>
                    <div className='d-flex'>
                        <div className='col-5'>
                            <img className='w-100' src={details.images} alt={details.name} />
                        </div>
                        <div className='col-7 p-5'>
                            <h4>{details.name}</h4>
                            <div className='p-4'>
                                <Rating name="half-rating" readOnly value={details.rating} precision={0.5} />
                                <p>{details.ratings}</p>
                                <h6>Rs.{details.price}</h6>
                                <p>MRP. <del>{details.cutoff_price}</del></p>
                                <h6>({details.discount}% off)</h6>
                                <p>Brand: {details.brand}</p>
                                <p>Product Type: {details.product_type}</p>
                                <div className="d-flex justify-content-between p-2">
                                    <button className="btn btn-info">Buy Now</button>
                                    <button className="btn btn-warning" onClick={addToCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>No details</>
            )}
        </div>
    );
};

export default Productdetails;

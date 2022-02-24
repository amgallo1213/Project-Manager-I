import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllProducts = (props) => {
   
    const [productList, setProductList] =  useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <div>
        {
            productList.map((product, index) => (
                <div key={index} class="product">
                    <Link to={`/product/${product._id}`}>
                    {product.title}
                    </Link>
                    <p><Link to ={`/product/edit/${product._id}`}>Edit |</Link>
                    <Link to ={`/product/delete/${product._id}`}> Delete</Link></p>
                </div>
            ))
        }
        </div>)

}

export default AllProducts;
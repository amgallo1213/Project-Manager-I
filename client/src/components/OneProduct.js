import React, { useState, useEffect } from 'react';
import axios from 'axios';


const OneProduct = (props) => {
    const {id} = props;
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setSingleProduct(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <div>
            <header><h1>{singleProduct.title}</h1></header>
            <p>Price: {singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
        </div>
    )

}

export default OneProduct;
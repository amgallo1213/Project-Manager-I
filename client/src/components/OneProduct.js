import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

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
    }, [id])

    return(
        <div>
            <header><h1>{singleProduct.title}</h1></header>
            <p>Price: &#36;{singleProduct.price}</p>
            <p>Description: {singleProduct.description}</p>
            <p><Link to="/product/edit/:id">Edit</Link>
            <Link to="/">Home</Link></p>
        </div>

        
    )

}

export default OneProduct;
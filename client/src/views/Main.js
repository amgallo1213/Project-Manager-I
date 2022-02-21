import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';

const Main = (props) => {

    const [products, setProducts] = useState([]);
    
    return(
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <br/>
            <h2>All Products</h2>
            <AllProducts />
        </div>
    )
}

export default Main;
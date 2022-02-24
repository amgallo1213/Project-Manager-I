import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';


const Main = (props) => {

    const [products, setProducts] = useState([]);
    
    return(
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <hr/>
            <h2>All Products</h2>
            <AllProducts />
        </div>
    )
}

export default Main;
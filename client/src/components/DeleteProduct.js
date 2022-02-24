import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
// import { deleteProduct } from '../../../server/controllers/product.controller';

const ProductList = (props) => {
    const { removeFromDom, products, setProduct, id } = props;
    const deleteProduct = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/product/${idFromBelow}`)
            .then(res => {
                removeFromDom(res)
            .catch(err => console.log(err))
    })
    
    return(
        <div>
            {
                products.map((product, index) => {
                return (
                    <div key={index}>
                        <Link to={`/product/${id}`}>
                            {product._id}
                        </Link>
                        <button onClick={()=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
                )}
                )
            }  
         </div> 
    ) 
}

export default ProductList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditProduct = (props) => {

    const {id} = (props);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

const editHandler = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8000/api/product/${id}`, 
    {
        title, price, description
    })
    .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
    })
    .catch ((err) => {
        console.log(err)
    })
}

    return(
        <div>
            <form onSubmit={editHandler}>
                <p>
                    <label>Title</label><br/>
                    <input value={title} type="text" onChange={(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label><br/>
                    <input value={price} type="text" onChange={(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label><br/>
                    <input value={description} type="text" onChange={(e)=>setDescription(e.target.value)}/>
                </p>
                <button type="submit">Edit Product</button>
            </form>
            <Link to="/">Home</Link>

        </div>
    )
}




export default EditProduct;





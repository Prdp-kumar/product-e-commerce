import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'
import ProductCard from './ProductCard';

const Product = () => {

    let [result, setResult] = useState([])
    

    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
            .then((res) => {
                setResult(res.data.products)
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    // console.log(result)
    // console.log(activeId )
    return (
        <>          
            <h2>Product component</h2>
            <div className='container'>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {result.map((item,i)=>{
                        return < ProductCard item={item}
                        thumbnail ={item.thumbnail}
                        title ={item.title}
                        category ={item.category}
                        Price ={item.price}
                        discountPercentage ={item.discountPercentage}
                        Rating ={item.rating}
                        Stock ={item.stock}
                        id={item.id}/>
                    })}    
            </div>
            </div>
        </>
    )
}
export default Product;
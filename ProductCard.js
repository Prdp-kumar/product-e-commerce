import React from 'react'
import {useState} from "react"

 function ProductCard(item,thumbnail,title,id,discountPercentage , category,Price,Rating,Stock) {
    let[activeId ,setActiveId] = useState(null)
  return (
    <div class={`${activeId ==item.id ? "col active-product-card" : "col"}`}>
                        <div onClick={()=>{
                            setActiveId(id)
                        }}
                        class="Card">
                          <img src={thumbnail} class="card-img-top" style={{height:"250px"}} alt="..."/>
                          <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text"><b>Category : </b>{category}</p>
                            <p class="card-text"><b>Price : </b>{Price}</p>
                            <p class="card-text"><b>Discount : </b>{discountPercentage}%</p>
                            <p class="card-text"><b>Rating : </b>{Rating}</p>
                            <p class="card-text"><b>Stock : </b>{Stock}</p>
                          </div>
                        </div>
                      </div>
    
  )
}
export default ProductCard;

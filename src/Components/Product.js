import React from "react";
import '../App.css';


function Product({siteTag, image, title, price}) {
    return(
    <article>
        <span>{siteTag}</span>
        <img src={image} alt={title}/>
        <p>{title}</p>
        <h4>{price}</h4>
    </article>
)

}

export default Product;
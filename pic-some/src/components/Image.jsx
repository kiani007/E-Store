import React, { useState, useContext } from "react";
import {Context} from "../Context"

function Image({ img, getClass}) {
    const {toggleFavorite, addToCart, cartItems,removeFromtheCart}= useContext(Context)
    const [hovered, setHovered] = useState(false)
    
    
        
    function heartIco() {
        if (img.isFavorite) {
            return  <i className="ri-heart-fill favorite" onClick={()=>toggleFavorite(img.id)}></i>
        }
        else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={()=>toggleFavorite(img.id)}></i>
        }
    }
    function cartIco() {
        const alreadyInaCart = cartItems.some(items=>items.id === img.id)
        if (alreadyInaCart) {
           return <i className="ri-shopping-cart-fill cart" onClick={()=>removeFromtheCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    function displayPrice() {
        if (hovered) {
             return <span className="Price">${img.price}</span>
         }
    }
    return (
        
        <div className={`${getClass} relative`}
            onMouseEnter={() => {setHovered(true)}}
            onMouseLeave={() => { setHovered(false) }}>
            
            <img src={img.url} className="image-grid" />
            
            {heartIco()}
            {cartIco()}
            {displayPrice()}
            
            
        </div>
       
    )
}           
export default Image
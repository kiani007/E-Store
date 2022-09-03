import React,{useContext,useState,useRef} from "react"
import { useMemo } from "react"
import { Context } from "../Context"
function Cart() {
  
    const { cartItems, removeFromtheCart,delAllCart } = useContext(Context)
    const [isOrder, setOrder] = useState(false)
    const isDisable = useRef(false) 
    const cartElements = cartItems.map(items => {
        return <div key={items.id} className="cartItems">
            <i className="ri-delete-bin-line deleteItem"onClick={()=>removeFromtheCart(items.id)}></i>
            <img src={items.url} className="cart-image"/>
            <div className="itemPrice"> ${items.price} </div>
        </div>
    })
    function clickHandler() {
        setOrder(true)
        isDisable.current.disabled = "true"

        setTimeout(() => {
            setOrder(false)
            isDisable.current.disabled = false
            delAllCart()
            
        },3000)

    }
    const totalPrice = useMemo(
        () => {
            let total = 0
            if (cartItems.length > 0) {
                for (let i = 0; i < cartItems.length; i++)
                {
                    total = total + cartItems[i].price     
                }
            }
            return total
        }, [cartItems]
    )
    console.log(totalPrice)
    return (
        <main className="cart-page">
            <div className="h1-div">
                {cartItems.length > 0 ?<h1>Your Cart Items </h1> : <h1>You have no Item In cart </h1>}
            </div>
            {cartElements}
            {cartItems.length>0?<p className="total-cost">Total:${totalPrice}</p>:<></>}
            {cartElements.length>0?<div className="orderNowButton">
                <button onClick={clickHandler} ref={isDisable}>{isOrder?"ORDERING...":"ORDER NOW"}</button>
            </div>:<></>}
        </main>
    )
}

export default Cart
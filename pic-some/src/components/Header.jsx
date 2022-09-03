import React,{useContext} from "react";
import {Link} from "react-router-dom"
import {Context} from "../Context"
function Header() {
    const { cartItems } = useContext(Context);//using context for the logic when cart have more than 1 item navbar cart should be filled
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"
    return (
        <header>
            <nav>
                <Link to='/'>
                    <h3 className="header--logo"> E-Store</h3>
                </Link>
                <Link to='/cart'>
                    <i className={cartClassName}></i>
                </Link>
            </nav>

        </header>
    )
}           
export default Header
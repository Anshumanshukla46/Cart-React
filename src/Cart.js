import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
    render() {
        return (

            <div className="cart">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}


// After changes it is must to write -
export default Cart;
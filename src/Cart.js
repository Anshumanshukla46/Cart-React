import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    // State
    constructor() {
        super(); // calling constructor of super class  (React.Component)
        this.state = {
            products: [
                {
                    price: 9,
                    title: "Watch",
                    qty: 1,
                    img: "",
                    id: 1
                },

                {
                    price: 99,
                    title: "Mobile Phone",
                    qty: 10,
                    img: "",
                    id: 2
                },

                {
                    price: 999,
                    title: "Laptop",
                    qty: 4,
                    img: "",
                    id: 3
                }
            ]
        }
    }


    render() {

        /*        const arr = [1, 2, 3, 4, 5];
                'map' can be used to get all the elements
                  arr.map((item) => {
                                return item + 5;
                    })
        */

        const { products } = this.state;

        return (

            <div className="cart">
                {/* passing props */}

                {products.map((product) => {
                    return (<CartItem
                        product={product}
                        key={product.id}

                    />)
                })}

            </div>
        );
    }
}


// After changes it is must to write -
export default Cart;
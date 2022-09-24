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

    handleIncreaseQuantity = (product) => {
        console.log("increase the qty", product);

        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products: products // products -> short-hand
        });
    }


    handleDecreaseQuantity = (product) => {
        console.log("decrease the qty", product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if (products[index].qty === 0)
            return;

        products[index].qty -= 1;

        this.setState({
            products: products
        });
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
                {/* passing props as well */}

                {products.map((product) => {
                    return (<CartItem
                        product={product}

                        key={product.id}

                        onIncreaseQuantity={this.handleIncreaseQuantity}

                        onDecreaseQuantity={this.handleDecreaseQuantity}

                    />)
                })}

            </div>
        );
    }
}



// After changes it is must to write -
export default Cart;
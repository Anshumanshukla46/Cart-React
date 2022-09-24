import React from "react";

class CartItem extends React.Component {

    // State
    constructor() {
        super(); // calling constructor of super class  (React.Component)
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: ""
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }

    // adding eventListeners by binding(because without that it will not get refence to constructor)

    // this arrow function is same as -> this.increaseQuantity = this.increaseQuantity.bind(this)
    increaseQuantity = () => {
        // console.log("this.state", this.state);

        // setState form React.component for increasing quantity by plus button

        // setState will re-render the object
        // two ways of implementing:

        // way 1: it will do swallow merging 
        // this.setState(
        //     {
        //         qty: this.state.qty + 1
        //     }
        // );


        // way 2: if i require prevState then i will use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }


    decreaseQuantity = () => {
        console.log(this.state)
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }


    // to convert class component to react component
    render() {

        // object structuring
        const { price, title, qty } = this.state;

        return (
            <div className="cart-item">
                <div className="left-block">

                    {/* added style */}
                    <img style={styles["image"]} />
                </div>

                <div className="right-block">

                    {/* can add object directly */}

                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "gray" }}>Rs {price}</div>
                    <div style={{ color: "gray" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}

                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
                            onClick={this.increaseQuantity}
                        // binded just because for calling the constructor
                        />

                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />

                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />

                    </div>

                </div>
            </div>
        );
    }
}



// styling object using styles

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "gray"
    }
}


// After changes it is must to write -
export default CartItem;
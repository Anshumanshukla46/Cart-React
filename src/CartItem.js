import React from "react";

class CartItem extends React.Component {

    // State
    constructor() {
        super(); // calling constructor of super class
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: ""
        }
    }

    // to convert class component to react component
    render() {

        // object structuring
        const { price, title, qty } = this.state;

        return (
            <div className="cart-item">
                <div className="left-block">

                    {/* added style */}
                    <img style={styles.image} />
                </div>

                <div className="right-block">

                    {/* can add object directly */}

                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "gray" }}>Rs {price}</div>
                    <div style={{ color: "gray" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}

                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/748/748113.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />

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


// After all item it is must to write
export default CartItem;
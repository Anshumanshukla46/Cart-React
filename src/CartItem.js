import React from "react";

class CartItem extends React.Component {

    // to convert class component to react component
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">

                    {/* added style */}
                    <img style={styles.image} />
                </div>

                <div className="right-block">

                    {/* can add object directly */}

                    <div style={{ fontSize: 25 }}>Phone</div>
                    <div style={{ color: "gray" }}>Rs. 999</div>
                    <div style={{ color: "gray" }}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/*  */}
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
import React from "react";

const CartItem = (props) => {

    // setState in promise
    /*
        testing() {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('done');
                }, 5000);
            })
    
            promise.then(() => {
                // in promise,ajax 'setState' act like a synchronous call
                this.setState({ qty: this.state.qty + 10 });
    
                this.setState({ qty: this.state.qty + 10 });
                this.setState({ qty: this.state.qty + 10 });
    
                // but after react 17 whole setState is asynchronous
    
    
                // due to 'synchronous call' this will be up-to-date
                console.log('state', this.state);
            })
        }
    */

    /*        
        adding eventListeners by binding(because without that it will not get refence to constructor)
    
        this arrow function is same as -> this.increaseQuantity = this.increaseQuantity.bind(this)
        increaseQuantity = () => {
            console.log("this.state", this.state);
    
            setState form React.component for increasing quantity by plus button
            setState will re-render
    
            setState will re-render the object
            two ways of implementing:
    
            way 1: it will do swallow merging 
            this.setState(
                {
                    qty: this.state.qty + 1
                },()=> {}
            );
    
    
            way 2: if i require prevState then i will use this
            this.setState((prevState) => {
                return {
                    qty: prevState.qty + 1
                }
            }, () => {
                console.log('this.state', this.state)
            });
        }
    
    
        decreaseQuantity = () => {
            const { qty } = this.state;
    
            if (qty === 0) {
                return;
            }
            this.setState((prevState) => {
                return {
                    qty: prevState.qty - 1
                }
            });
        }
    */


    // to convert class component to react component
    // accesing the passed 'props'

    // object structuring
    const { price, title, qty } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;


    return (
        <div className="cart-item">
            <div className="left-block">

                {/* added style */}
                <img style={styles.image}
                    src={product.img}
                />
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
                        src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png"
                        onClick={() => onIncreaseQuantity(product)}
                    // binded just because for calling the constructor
                    />


                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
                        onClick={() => onDecreaseQuantity(product)}
                    />


                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={() => onDeleteProduct(product.id)}
                    />

                </div>

            </div>
        </div>
    );
}



// styling object using styles

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


// After changes it is must to write -
export default CartItem;
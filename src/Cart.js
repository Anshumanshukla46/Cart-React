import React from 'react';
import CartItem from './CartItem';

// at run-time react will pass props by default
const Cart = (props) => {

    /*        
            const arr = [1, 2, 3, 4, 5];
            'map' can be used to get all the elements
            arr.map((item) => {
                return item + 5;
            })
    */

    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                )
            })}
        </div>
    );
}

// After changes it is must to write -
export default Cart;
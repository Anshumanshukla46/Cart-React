import React from 'react';

// using the cart
import Cart from './Cart';

import Navbar from './Navbar';

import * as firebase from 'firebase';

// Root component
class App extends React.Component {


  // State
  constructor() {
    super(); // calling constructor of super class  (React.Component)
    this.state = {
      products: []
    }

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();

  }

  handleIncreaseQuantity = (product) => {
    console.log("increase the qty", product);

    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products // products -> short-hand
    })

  }

  // product as argument
  handleDecreaseQuantity = (product) => {
    console.log('dec the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  // id as argument
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{array}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }


  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">

        {/* using after importing  */}
        <Navbar count={this.getCartCount()} />

        {/* passing via props */}
        <Cart
          products={products}

          onIncreaseQuantity={this.handleIncreaseQuantity}

          onDecreaseQuantity={this.handleDecreaseQuantity}

          onDeleteProduct={this.handleDeleteProduct}
        />

        <div style={{ fontSize: 20, padding: 20 }}>TOTAL: {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;

import React from 'react';

// using the cart
import Cart from './Cart';

import Navbar from './Navbar';

// Root component
class App extends React.Component {


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
          img: "https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80",
          id: 3
        }
      ]
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
      </div>
    );
  }
}

export default App;

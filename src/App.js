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
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/A_popular_model_of_ELLIOT_FRANZ%C3%89N.jpg",
          id: 1
        },

        {
          price: 99,
          title: "Mobile Phone",
          qty: 10,
          img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/03/1-Realme-GT-2-Pro-lead-scaled.jpg",
          id: 2
        },

        {
          price: 999,
          title: "Laptop",
          qty: 4,
          img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/01/PREDATOR-HELIOS-300-PH317-56-05-scaled.jpg",
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

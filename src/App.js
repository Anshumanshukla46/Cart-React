import React from 'react';

// using the cart
import Cart from './Cart';

import Navbar from './Navbar';

// for using firebase
import { firestore as db } from './firebase-config'
import firebase from './firebase-config';


// Root component
class App extends React.Component {


  // State
  constructor() {
    super(); // calling constructor of super class  (React.Component)

    this.state = {
      products: [],
      loading: true
    }

    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();

  }


  componentDidMount() {

    /*
    firebase
      .firestore()
      .collection('product')
      .get()
      .then((snapshot) => {
//      then -> means it is returning me some promise

        console.log(snapshot);
        // currently if we do any change in firebase then we have toi refresh but we do not want to refresh then
        // we have to use 'eventListener()' and 'onSnapshot()in place of get'


        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });




        const products = snapshot.docs.map((doc) => {

          const data = doc.data();
          // adding the auto generated id as well as otherwise it gives the warning of not 'having a unique id'
          data['id'] = doc.id;


          return data;
        });


        this.setState({
          products,
          loading: false
        });

      });
    */


    // now without refreshing the data can be fetched 
    // firebase
    //   .firestore()
    //   .collection('product')
    //   .onSnapshot((snapshot) => {

    //     // all this happen due to onSnapshot;

    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     });

    //     const products = snapshot.docs.map((doc) => {

    //       const value = doc.data();

    //       value['id'] = doc.id;
    //       return value;
    //     });

    //     this.setState({
    //       products,
    //       loading: false
    //     });
    //   })


    // Quering the product using the "where(_,_,_)" before "onSnapshot"

    //  can have more the one where 


    firebase
      .firestore()
      .collection('product')
      // .where('price', '==', 99)
      // .where('title', '==', 'Mouse')
      // .orderBy('price', 'asc')
      .orderBy('price', 'desc')
      .onSnapshot((snapshot) => {

        // all this happen due to onSnapshot;

        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data())
        });

        const products = snapshot.docs.map((doc) => {

          const value = doc.data();

          value['id'] = doc.id;
          return value;
        });

        this.setState({
          products,
          loading: false
        });
      })

  }



  // added data into the firebase
  // arrow function
  addProduct = () => {
    firebase
      .firestore()
      .collection('product')
      .add({
        img: '',
        price: 900,
        qty: 3,
        title: 'washing machine'
      })
      .then((docRef) => {
        console.log("added ", docRef);
      })
      .catch((error) => {
        console.log(error);
      })


  }



  handleIncreaseQuantity = (product) => {
    console.log("increase the qty", product);

    const { products } = this.state;
    const index = products.indexOf(product);


    // commented just to get the quantity now from the database not by 'eventListener'

    /*
        products[index].qty += 1;
    
        this.setState({
          products: products // products -> short-hand
        })
    */


    // using this we will get the docRef and then update accordingly
    const docRef = firebase.firestore().collection('product').doc(products[index].id);


    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((error) => {
        console.log("Error : ", error);
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

    /*  
        products[index].qty -= 1;
    
        this.setState({
          products: products
        })
    
    */


    const docRef = firebase.firestore().collection('product').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('updated successfully');
      })
      .catch((error) => {
        console.log("Error : ", error);
      })
  }



  // id as argument
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    /*    const items = products.filter((item) => item.id !== id); // [{array}]
    
        this.setState({
          products: items
        })
    */

    // same as update
    const docRef = firebase.firestore().collection('product').doc(id);

    docRef
      .delete()
      .then(() => {
        console.log('Deleted successfully');
      })
      .catch((error) => {
        console.log("Error : ", error);
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
    const { products, loading } = this.state;
    return (
      <div className="App">

        {/* using after importing  */}
        <Navbar count={this.getCartCount()} />

        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}> Add a product </button> */}


        {/* passing via props */}
        <Cart
          products={products}

          onIncreaseQuantity={this.handleIncreaseQuantity}

          onDecreaseQuantity={this.handleDecreaseQuantity}

          onDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <h1>Loading Products ... </h1>}

        <div style={{ fontSize: 20, padding: 10 }}>TOTAL: {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;


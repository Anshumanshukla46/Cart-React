import React from 'react';

// using the cart
import Cart from './Cart';

import Navbar from './Navbar';

// Root component
function App() {
  return (
    <div className="App">

      <Navbar />
      {/* using after importing  */}
      <Cart />

    </div>
  );
}


export default App;

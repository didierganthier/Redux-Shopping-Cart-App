import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <div className="App">
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;

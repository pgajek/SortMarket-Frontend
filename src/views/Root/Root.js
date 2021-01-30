import "./Root.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomeScreen from "views/Home/HomeScreen";
import RegisterScreen from "views/Register/RegisterScreen";
import AboutScreen from "views/About/AboutScreen";
import ProductsScreen from "views/Products/ProductsScreen";
import ProductScreen from "views/Product/ProductScreen";
import CartView from "views/CartView/CartView";

function Root() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/about" component={AboutScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/cart" component={CartView} />
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/products/:id" exact component={ProductsScreen} />

      {/*
        <Route path="/cart/:id?" exact component={CartScreen} />

        <Route path="/order" exact component={OrderScreen} />
        <Route path="/payment" exact component={PaymentScreen} /> */}
    </BrowserRouter>
  );
}

export default Root;

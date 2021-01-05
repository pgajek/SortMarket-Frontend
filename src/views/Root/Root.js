import "./Root.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomeScreen from "views/Home/HomeScreen";
import AboutScreen from "views/About/AboutScreen";

function Root() {
  return (
    <BrowserRouter>
      <div className="root">
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        {/* <Route path="/register" component={RegisterScreen} />
        <Route path="/cart/:id?" exact component={CartScreen} />
        <Route path="/products" exact component={ProductsScreen} />
        <Route path="/product/:id" exact component={ProductDetailsScreen} />
        <Route path="/order" exact component={OrderScreen} />
        <Route path="/payment" exact component={PaymentScreen} /> */}
      </div>
    </BrowserRouter>
  );
}

export default Root;

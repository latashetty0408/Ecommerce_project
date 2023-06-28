// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Category from "./components/Category";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCollection from "./components/ProductCollection";
import AddToCart from "./components/AddToCart";
import WishList from "./components/WishList";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Category} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/categories/:category_id" children={<ProductCollection />} />
          <Route exact path='/add_to_cart' component={AddToCart} />
          <Route exact path='/shop_wishlist' component={WishList} />
          <Route exact path='/about' component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

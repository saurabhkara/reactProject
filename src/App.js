import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Navigation from './compoenents/Navigation';
import  Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import ProductsPage from "./pages/ProductsPage";
import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";



function App(){
    const[cart, setCart]=useState({});
    //fetch from local storage ...

    useEffect(()=>{
       const cart= window.localStorage.getItem('cart');
       setCart(JSON.parse(cart))
       //console.log(cart);

    },[])

    useEffect(()=>{
        window.localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    return (
        <>
            <Router>
                <CartContext.Provider value={{cart, setCart}} > 
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    {/* <Route path="/about" component={About}></Route> */}
                    <Route path="/products" exact component={ProductsPage}></Route>
                    <Route path="/products/:id"  component={SingleProduct}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
                </CartContext.Provider>
            </Router>
        </>

)}

export default App;
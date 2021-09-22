import React,{ useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';


const Product = (props) => {

    const [isAdding, setIsAdding]=useState(false);
    const {product} =props;
    const {cart, setCart} = useContext(CartContext);
    // console.log(props);
    //console.log(props.product)

    const addToCart=(event,product)=>{
        event.preventDefault();

        let _cart ={...cart}
        if(!_cart.items){
            _cart.items={}
        }
        if(_cart.items[product.id]){
            _cart.items[product.id]= _cart.items[product.id]+1;
        }else{
            _cart.items[product.id]=1;
        }

        if(!_cart.totalItems){
            _cart.totalItems=0;
        }

        _cart.totalItems=_cart.totalItems+1;
        setCart( _cart);

        setIsAdding(true);

        setTimeout(()=>{
            setIsAdding(false)
        }, 1000)

        // const cart = {
        //     items:{
        //         '1':2,
        //         '2':3,
        //     },
        //     totalItem:5,

        // }

    }

    return (
        <Link to={`/products/${product.id}`}>
        <div>
            <img src="./images/peproni.png" alt="pizza" />
            <div className='text-center'>
                <h2 className='text-lg font-bold py-2'>{props.product.name}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{props.product.username}</span>
            </div>

            <div className="flex justify-between items-center mt-4" >
                <span>₹ {props.product.id}</span>
                <button disabled={isAdding} className={` ${isAdding ? 'bg-green-500' :'bg-yellow-500'} py-1 px-4 rounded-full font-bold `} onClick={(e)=>{addToCart(e,product)}}>ADD{isAdding?'ED':''}</button>
            </div>
        </div>
        </Link>
    )
}
export default Product;
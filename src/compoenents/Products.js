import React, {useState, useEffect, useContext} from 'react';
import Product from './Product';
import { CartContext } from '../CartContext';

export default function Products() {
    //const{name} =useContext(CartContext);

    const[products, setProducts]=useState([]);

    // const fetchProducts = async ()=>{
    //     try{
    //         const res= await fetch('api/products/j');
    //         if(res.status==200){
    //             const data= await res.json()
    //             setProducts(data);
    //         }
    //     }catch(error){console.log(error)} 
    // }


    useEffect(()=>{
        // fetch('/api/product')
        // .then(response=>response.json)
        // .then(products=>{
        //     setProducts(products)
        // }
        // )
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            // console.log(data);
            setProducts(data)
        }).catch(error=>console.log(error))

    },[]) //empty array called as dependecy array

    return (
        <div className="container mx-auto pb-24 ">
            <h1 className="text-lg font-bold my-8">Products </h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map((product)=>
                        <Product  key={product.id} product={product}/>
                    
                    )
                }      

            </div>
        </div>
    )
}

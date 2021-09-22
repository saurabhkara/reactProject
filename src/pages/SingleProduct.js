import React, { useState, }from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';



export default function SingleProduct() {
    
    const[product, setProduct]=useState({});
    const params= useParams();
    //console.log(params)
    const histroy =useHistory();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response=>
            response.json()
        )
        .then(data =>{
            console.log(data)
            setProduct(data)
            
        })
    },[params.id])
    //console.log(product.address.city)
    return (
        <div className='container mx-auto mt-12'>
        <button className='mb-12 font-bold' onClick={()=>histroy.goBack()}> Back</button>
            <div className='flex'> 
                <img src="../images/peproni.png" alt="pizza" />
                <div className='ml-16'>
                    <h1 className='text-xl font-bold'>{product.name}</h1>
                    <div className='text-md'>{product.username}</div>
                    <div className='font-bold mt-2'>₹{product.id} </div>
                    <button className='py-1 px-8 mt-4 rounded-full font-bold bg-yellow-500'>ADD</button>
                </div>


            </div>
            
        </div>
    )
}

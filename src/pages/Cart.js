import React from 'react'

const Cart = () => {
    return (
        <div className='mx-auto lg:w-1/2 w-full pb-24'>
          <h1  className='my-12 font-bold'>Cart Item</h1>
          <ul>
              <li className='mb-12'>
                  <div className='flex items-center justify-between'>
                      <div className='flex items-center'>
                          <img className='h-16' src='/images/peproni.png' alt='image'/>
                          <span className='font-bold ml-4 w-48'>Peproni</span>
                      </div>
                      <div>
                          <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                          <b className='px-4'>2</b>
                          <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                      </div>
                      <span className='font-bold'>₹ 500</span>
                      <button className='bg-red-500 px-4 py-2 rounded-full leading text-white'>Delete</button>
                    </div>
              </li>
              <li className='mb-12'>
                  <div className='flex items-center justify-between'>
                      <div className='flex items-center'>
                          <img className='h-16' src='/images/peproni.png' alt='image'/>
                          <span className='font-bold ml-4 w-48'>Peproni</span>
                      </div>
                      <div>
                          <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>-</button>
                          <b className='px-4'>2</b>
                          <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>+</button>
                      </div>
                      <span className='font-bold'>₹ 500</span>
                      <button className='bg-red-500 px-4 py-2 rounded-full leading text-white'>Delete</button>
                    </div>
              </li>
          </ul>
          <hr className='my-6'></hr>
          <div className='text-right'>
              <b>Grand Total : ₹ 1000 </b>
          </div>
          <div  className='text-right mt-6'>
                <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
          </div>
            
        </div>
    )
}
export default Cart;

"use client";

import React, { useState } from 'react';
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary'
import CartItem from '../CartItem/CartItem'
import './Cart.css';

const Cart = () => {


  return (
    <div>
      <div className='cart-container'>
        <div className='font-[700] text-2xl mb-6'>Keranjang</div>
        <div className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 xl:space-x-10'>
          <div className='w-full lg:w-2/3 space-y-8'>
          <CartItem/>
          </div>
          <div className='w-full lg:w-1/3 relative mt-10 sm:mt-0'>
          <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
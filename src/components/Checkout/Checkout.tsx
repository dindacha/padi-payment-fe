import React from 'react';
import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem'
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary'
import Address from '../Address/Address';

const Checkout = () => {
  return (
    <div className='checkout-container'>
      <div className='flex items-center space-x-4'>
        <div className='font-[700] text-2xl mb-6'>Checkout</div>
      </div>
      <div className='flex flex-col space-x-0 space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0'>
        <div className='w-full lg:w-2/3 space-y-8'>
          <div className='flex flex-col space-y-8'>
            <Address/>
            <CheckoutItem />
          </div>
        </div>
        <div className='w-full lg:w-1/3'>
          <div className='sticky-summary'>
            <CheckoutSummary/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

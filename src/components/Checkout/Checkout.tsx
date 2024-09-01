"use client";

import React, { useState } from 'react';
import './Checkout.css';
import CheckoutItem from '../CheckoutItem/CheckoutItem'
import CheckoutSummary from '../CheckoutSummary/CheckoutSummary'
import Address from '../Address/Address';
import Payment from '../Payment/Payment';

const Checkout = () => {

  const [isPaymentVisible, setIsPaymentVisible] = useState(false);

  const handleShowPayment = () => {
    setIsPaymentVisible(true); // Tampilkan Payment saat tombol "Metode Lain" di-klik
  };

  return (
  <div>
    <div className='space-y-2 checkout-container'>
      <div className='flex items-center space-x-4'>
        <div className='font-[700] text-2xl mb-6'>Pengiriman</div>
      </div>
      <div className='flex flex-col space-x-0 space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0'>
          <div className='w-full lg:w-2/3 space-y-8'>
            <div className='flex flex-col grow space-y-8'>
              
              {/* Tampilkan CheckoutItem jika isPaymentVisible false, jika tidak tampilkan Payment */}
              {!isPaymentVisible ? (
                <>
                <Address/>
                <CheckoutItem />
                </>
              ) : (
                <Payment />
              )}

            </div>
          </div>

          <div className='w-full lg:w-1/3'>
          {/* Kirim fungsi handleShowPayment sebagai props ke CheckoutSummary */}
          <CheckoutSummary onShowPayment={handleShowPayment} />
          </div>
      </div>
    </div>
  </div>
  )
}

export default Checkout
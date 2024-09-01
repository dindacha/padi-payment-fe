import React from 'react'
import Link from 'next/link';
import './CheckoutSummary.css';

interface CheckoutSummaryProps {
    onShowPayment: () => void;
  }

const CheckoutSummary : React.FC<CheckoutSummaryProps> = ({ onShowPayment }) => {
  return (
    <div className="checkout-summary-container">
        <div className="checkout-summary-header">
            <h3 className="checkout-summary-title">Ringkasan Belanja</h3>
            <hr className="checkout-summary-divider" />
            <div className="checkout-summary-footer">
            <div className="flex justify-between">
                <div className="checkout-summary-total">Total Harga</div>
                <div className="checkout-summary-price">Rp0</div>
            </div>

            {/* Tombol untuk menampilkan Payment lain */}
            <div className='pt-4'>
                <button 
                onClick={onShowPayment} 
                className='legion-button legion-button--md legion-button--solid-secondary legion-button--block legion-button--center w-full whitespace-nowrap !bg-secondary-50 !text-black rounded-lg'>
                <span>Metode Lain</span>
                </button>
            </div>

            <div className='pt-6'>
                <Link href="/checkout" passHref>
                    <button className='legion-button legion-button--md legion-button--solid-primary legion-button--block legion-button--center w-full whitespace-nowrap !bg-secondary-70 !text-white rounded-lg css-1iekmdr'>
                    <span>Beli</span>
                    </button>
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutSummary
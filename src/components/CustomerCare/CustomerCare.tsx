import React from 'react';
import './CustomerCare.css';

const CustomerCare: React.FC = () => {
  return (
    <button className="customer-care-button">
            <img 
                alt="Customer Care" 
                src="https://padiumkm.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomer-care.f88118e4.svg&w=48&q=25" 
                width="36" 
                height="36" 
                loading="lazy"
            />
            <span className='font-medium text-primary-70 text-sm'>Customer Care</span>
        </button>
  )
}

export default CustomerCare
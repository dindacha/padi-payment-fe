
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './CheckoutSummary.css';
import PaymentModal from '../PaymentModal/PaymentModal';



const CheckoutSummary = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (


    <div>
        <div className="mb-4">
            <div className="rounded-md p-4 cursor-pointer bg-[#FEF2E6] border border-[#F7931E]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div><img alt="" src="https://padiumkm.id/_next/static/media/ticket-discount.4360d588.svg"/></div>
                        <div className=" text-sm font-[700] bg-FEF2E6">Gunakan Promo?</div>
                    </div>
                    <div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" className="text-paletteText-primary" color="#F7931E" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(140, 145, 151)" }}>
                            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="checkout-summary-container">
            <div className="checkout-summary-header">
                <h3 className="checkout-summary-title">Ringkasan Belanja</h3>
                <hr className="checkout-summary-divider" />
                <div className="checkout-summary-footer">
                <div className="flex justify-between m-1">
                    <div className="checkout-summary-total">Total Harga (5 Barang)</div>
                    <div className="checkout-summary-price">Rp0</div>
                </div>
                <div className="flex justify-between m-1">
                    <div className="checkout-summary-total">Total Ongkos Kirim</div>
                    <div className="checkout-summary-price">Rp0</div>
                </div>
                <div className="flex justify-between m-1">
                    <div className="checkout-summary-price">Total Belanja</div>
                    <div className="checkout-summary-price">Rp0</div>
                </div>

                <div className='pt-6'>
                    <Link href="/payment" passHref>
                        <button className="w-full px-4 h-9 border border-secondary-70 rounded-lg text-white bg-secondary-70 hover:bg-secondary-40 font-medium">
                            Bayar dengan
                        </button>
                    </Link>
                </div>

                {/* tooooombol untuk menampilkan payment lain */}
                <div className='pt-4'>
                    <button className="w-full px-4 h-9 border border-secondary-70 rounded-lg text-white bg-secondary-70 hover:bg-secondary-40 font-medium" 
                    onClick={openModal}>
                        Pilih Metode Pembayaran Lain 
                    </button>
                </div>

                <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckoutSummary
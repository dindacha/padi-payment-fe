import React, { useState } from 'react';
import Link from 'next/link';
import './PaymentModal.css';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {

    const [activeTab, setActiveTab] = useState('virtualAccount'); // Default tab

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-3xl relative">
                <button
                    className="absolute top-7 right-10 text-gray-600 text-3xl"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="space-y-6">
                    <div className="flex items-center space-x-2">
                        <div className="font-[700] text-2xl text-paletteText-primary">
                            Metode Pembayaran
                        </div>
                    </div>
                    <hr style={{ marginTop: '1.2rem', marginBottom: '0.5rem', borderColor: '#ddd' }} />

                    {/* Tab Navigation */}
                    <div className="tab-container">
                        <div className="tab-buttons">
                            <button
                                className={`tab-button ${activeTab === 'virtualAccount' ? 'active' : ''}`}
                                onClick={() => setActiveTab('virtualAccount')}
                            >
                                Virtual Account
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'digitalWallet' ? 'active' : ''}`}
                                onClick={() => setActiveTab('digitalWallet')}
                            >
                                Dompet Digital
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'creditCard' ? 'active' : ''}`}
                                onClick={() => setActiveTab('creditCard')}
                            >
                                Credit Card
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'qris' ? 'active' : ''}`}
                                onClick={() => setActiveTab('qris')}
                            >
                                QRIS
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="flex flex-col space-y-4">
                        {activeTab === 'virtualAccount' && (
                            <div className="space-y-4">
                                <div className="font-[700]">Virtual Account</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {/* Options */}
                                    <div className="flex items-center space-x-8">
                                        <div className="flex items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                className="accent-secondary-70 w-5 h-5 cursor-pointer"
                                            />
                                            <div className="block lg:hidden font-[600] text-xs">
                                                Mandiri Virtual Account
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'digitalWallet' && (
                            <div className="space-y-4">
                                <div className="font-[700]">Dompet Digital</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-8">
                                        <div className="flex items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                className="accent-secondary-70 w-5 h-5 cursor-pointer"
                                            />
                                            <div className="block lg:hidden font-[600] text-xs">DANA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'creditCard' && (
                            <div className="space-y-4">
                                <div className="font-[700]">Credit Card</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-8">
                                        <div className="flex items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                className="accent-secondary-70 w-5 h-5 cursor-pointer"
                                            />
                                            <div className="block lg:hidden font-[600] text-xs">
                                                Credit Card
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'qris' && (
                            <div className="space-y-4">
                                <div className="font-[700]">QRIS</div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-8">
                                        <div className="flex items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                className="accent-secondary-70 w-5 h-5 cursor-pointer"
                                            />
                                            <div className="block lg:hidden font-[600] text-xs">
                                                QRIS
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Checkout Summary */}
                    <div>
                        <div className="checkout-summary-footer">
                        <h3 className="checkout-summary-title">Ringkasan Belanja</h3>

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
                        </div>
                    </div>

                    <Link href="/payment" passHref>
                        <button className="w-full px-4 h-9 border border-secondary-70 rounded-lg text-white bg-secondary-70 hover:bg-secondary-40 font-medium mt-4">
                            Bayar dengan
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PaymentModal;

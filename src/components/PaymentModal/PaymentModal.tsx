// PaymentModal.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPaymentList } from '../../app/api/payment'; 

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('virtualAccount'); // Default tab
  const [paymentData, setPaymentData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const fetchPaymentData = async () => {
        try {
          const data = await getPaymentList();
          console.log('Fetched payment data:', data);
          setPaymentData(data);
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          setError('Failed to fetch payment data.');
          console.error('Error fetching payment data:', errorMessage);
        }
      };

      fetchPaymentData();
    }
  }, [isOpen]);
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 payment-modal">
      <div className="bg-white rounded-lg p-10 w-full max-w-3xl relative">
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
              {paymentData.map((category: any, index: number) => (
                <button
                  key={index}
                  className={`tab-button ${activeTab === category.category_name.toLowerCase().replace(' ', '') ? 'active' : ''}`}
                  onClick={() => setActiveTab(category.category_name.toLowerCase().replace(' ', ''))}
                >
                  {category.category_name}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex flex-col space-y-4">
            {paymentData.map((category: any) => (
              activeTab === category.category_name.toLowerCase().replace(' ', '') && (
                <div key={category.id} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.payments.map((payment: any) => (
                      <div key={payment.id} className="flex flex-col space-y-2">
                        <div className="flex items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full py-[14px] px-4 cursor-pointer justify-between">
                          <label className="radio-label flex items-center space-x-4">
                            <input
                              type="radio"
                              name="paymentMethod"
                              className="accent-secondary-70 w-5 h-5 cursor-pointer"
                              id={`payment-${payment.id}`} 
                            />
                            <div className="block font-[700]">
                              {payment.payment_name}
                            </div>
                          </label>
                          <div className="w-24 h-10 flex items-center justify-center">
                            <img 
                              src={payment.logo} 
                              alt={`${payment.payment_name} logo`} 
                              className="object-contain w-full h-full" 
                            />
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {payment.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
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
};

export default PaymentModal;

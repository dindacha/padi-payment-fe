import React, { useEffect, useState, useRef } from 'react';

import './PaymentModal.css';
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface Payment {
  id: string;
  payment_name: string;
  logo: string;
  note: string;
}

interface Category {
  id: string;
  category_name: string;
  payments: Payment[];
}

interface PaymentsData {
  data: Category[];
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(''); 
  const [payments, setPayments] = useState<PaymentsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
 
  const totalAmountRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const paymentsUrl = process.env.NEXT_PUBLIC_PAYMENTS_URL;
  const transactionsUrl = process.env.NEXT_PUBLIC_TRANSACTIONS_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

  
  useEffect(() => {
    const listPayment = async () => {

      if (!paymentsUrl) {
        console.error('Payments URL is not defined');
        return;
      }

      try {
        const res = await fetch(paymentsUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch payment data');
        }
        const json = await res.json();
        setPayments(json);
        setActiveTab(
          json.data[0].category_name.toLowerCase().replace(' ', '')
        );
        setLoading(false);
      } catch (error) {
        console.error('Error fetching payment data:', error);
        setLoading(false);
      }
    };

    if (isOpen) {
      listPayment();
    }
  }, [isOpen]);

  const handlePayment = async () => {
    if (!selectedPaymentId) {
      alert('Please select a payment method.');
      return;
    }
    
    setIsSubmitting(true);
    setError(null); 
    
    const totalAmountString = totalAmountRef.current?.textContent || '0';
    const totalAmount = parseFloat(totalAmountString.replace(/[^\d.-]/g, '')) || 0;

    try {
      if (!transactionsUrl) {
        console.error('Payments URL is not defined');
        return;
      }
      
      const res = await fetch(transactionsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          payment_id: selectedPaymentId,
          gross_amount: totalAmount,
        }),
      });
  
      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message || 'Payment failed');
      }
  
      const result = await res.json();
      const transactionId = result.data.id;
      router.push(`/payment?transactionId=${transactionId}`);
  
      alert('Payment processed successfully!');
      onClose(); 
    } catch (error) {
      if (error instanceof Error) {
        console.error('Payment error:', error.message);
        setError(error.message);
      } else {
        console.error('Unknown error:', error);
        setError('An unknown error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!payments || !payments.data) {
    return <div>No payment data available</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 payment-modal-black">
      <div className="bg-white rounded-lg p-10 m-4 w-full max-w-3xl relative payment-modal-white">
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
          <hr
            style={{ marginTop: '1.2rem', marginBottom: '0.5rem', borderColor: '#ddd' }}
          />
          <div className="tab-container">
            <div className="tab-buttons">
              {payments.data.map((category, index) => (
                <button
                  key={index}
                  className={`tab-button ${
                    activeTab === category.category_name.toLowerCase().replace(' ', '')
                      ? 'active'
                      : ''
                  }`}
                  onClick={() =>
                    setActiveTab(category.category_name.toLowerCase().replace(' ', ''))
                  }
                >
                  {category.category_name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {payments.data.map(
              (category) =>
                activeTab ===
                  category.category_name.toLowerCase().replace(' ', '') && (
                  <div key={category.id} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.payments.map((payment) => (
                        <div key={payment.id} className="flex flex-col space-y-2">
                          <div className="flex items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full py-[14px] px-4 cursor-pointer justify-between">
                            <label className="radio-label flex items-center space-x-4">
                              <input
                                type="radio"
                                name="paymentMethod"
                                className="accent-secondary-70 w-5 h-5 cursor-pointer"
                                id={`payment-${payment.id}`}
                                onChange={() => setSelectedPaymentId(payment.id)}
                              />
                              <div className="font-[700]">
                                {payment.payment_name}
                              </div>
                            </label>
                            <div className="w-24 h-10 flex items-center justify-center">
                              <img
                                src= {`padi-umkm/${payment.logo}`}
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
            )}
          </div>

          <div>
            <div className="checkout-summary-footer">
              <h3 className="checkout-summary-title">Ringkasan Belanja</h3>
              <div className="flex justify-between m-1">
                <div className="checkout-summary-total">Total Harga (5 Barang)</div>
                <div className="checkout-summary-price">Rp10000</div>
              </div>
              <div className="flex justify-between m-1">
                <div className="checkout-summary-total">Total Ongkos Kirim</div>
                <div className="checkout-summary-price">Rp2345</div>
              </div>
              <div className="flex justify-between m-1">
                <div className="checkout-summary-price">Total Belanja</div>
                <div className="checkout-summary-price" ref={totalAmountRef}>Rp123456</div>
              </div>
            </div>
          </div>

          <Link href="/payment" passHref>
          <button
            onClick={handlePayment}
            className="w-full px-4 h-9 border border-secondary-70 rounded-lg text-white bg-secondary-70 hover:bg-secondary-40 font-medium mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Bayar'}
          </button>
          </Link>


          {error && <div className="text-red-500 mt-4">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

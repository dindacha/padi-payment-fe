"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import "./CheckoutSummary.css";
import PaymentModal from "../PaymentModal/PaymentModal";

const CheckoutSummary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentName, setPaymentName] = useState("");
  const [Id, setId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const totalAmountRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const paymentsUrl = process.env.NEXT_PUBLIC_PAYMENTS_URL;
  const transactionsUrl = process.env.NEXT_PUBLIC_TRANSACTIONS_URL;
  const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchPaymentData = async () => {
      if (!paymentsUrl) {
        console.error('Payments URL is not defined');
        return;
      }

      try {
        const response = await fetch(`${paymentsUrl}suggest`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("HTTP Error:", response.status, response.statusText);
          throw new Error("Failed to fetch payment data");
        }

        const data = await response.json();
        console.log("Full fetched data object:", data);
        setPaymentName(data.data.payment_name);
        setId(data.data.id);

      } catch (error) {
        console.error("Error fetching payment data:", error);
        setError("Failed to fetch payment data");
      } 
    };

    fetchPaymentData();
  }, [paymentsUrl, apiToken]);


  const handlePayment = async () => {
    setIsSubmitting(true);
    setError(null);

    const totalAmountString = totalAmountRef.current?.textContent || "0";
    const totalAmount = parseFloat(totalAmountString.replace(/[^\d.-]/g, ""));
    const paymentId = +Id;

    try {
      if (!transactionsUrl) {
        console.error('Transactions URL is not defined');
        return;
      }

      const res = await fetch(transactionsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          payment_id: paymentId,
          gross_amount: totalAmount,
        }),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message || "Payment failed");
      }

      const result = await res.json();
      const transactionId = result.data.id;
      router.push(`/payment?transactionId=${transactionId}`);
      console.log("ini resultnya", result);
      console.log("ini id trans nya", transactionId);
      alert("Payment processed successfully!");
      closeModal();

    } catch (error) {
      if (error instanceof Error) {
        console.error("Payment error:", error.message);
        setError(error.message);
      } else {
        console.error("Unknown error:", error);
        setError("An unknown error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <div className="rounded-md p-4 cursor-pointer bg-[#FEF2E6] border border-[#F7931E]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <img
                  alt=""
                  src="https://padiumkm.id/_next/static/media/ticket-discount.4360d588.svg"
                />
              </div>
              <div className="text-sm font-[700] bg-FEF2E6">
                Gunakan Promo?
              </div>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                className="text-paletteText-primary"
                color="#F7931E"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(140, 145, 151)" }}
              >
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
              <div className="checkout-summary-price">Rp2000000</div>
            </div>
            <div className="flex justify-between m-1">
              <div className="checkout-summary-total">Total Ongkos Kirim</div>
              <div className="checkout-summary-price">Rp150000</div>
            </div>
            <div className="flex justify-between m-1">
              <div className="checkout-summary-price">Total Belanja</div>
              <div className="checkout-summary-price" ref={totalAmountRef}>
                Rp123456
              </div>
            </div>

            <div className="pt-6">
              <button
                className="w-full px-4 h-9 border border-secondary-70 rounded-lg text-white bg-secondary-70 hover:bg-secondary-40 font-medium"
                onClick={handlePayment}
                disabled={isSubmitting}
              >
                Bayar dengan {paymentName ? `${paymentName}` : "..."}
              </button>
              {error && (
                <div className="error-message text-red-500 text-sm mt-2">
                  {error}
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                className="w-full px-4 h-9 border border-secondary-70 rounded-lg text-white bg-secondary-70 hover:bg-secondary-40 font-medium"
                onClick={openModal}
              >
                Pilih Metode Pembayaran Lain
              </button>
            </div>

            <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;

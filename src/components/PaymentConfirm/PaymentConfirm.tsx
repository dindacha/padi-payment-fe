"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import './PaymentConfirm.css';

interface Payment {
   logo: string;
   payment_name: string;
 }
 
 interface Transaction {
   no_payment: string;
   status: string;
   dueDate: string;
   gross_amount: number;
   payment: Payment; 
   payment_name: string;
 }

const PaymentConfirm = () => {
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('transactionId');

  const NEXT_PUBLIC_API_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjgyMjA0NjUsImlhdCI6MTcyNTYyODQ2NSwibmJmIjoxNzI1NjI4NDY1LCJzdWIiOiI4NTNlYmE4NS05NjBhLTQ3ODUtYTVhZS1mYjQ4ZTExNTk5OWYifQ.3aZRpZeRrm8v372JYbXJ2mjTyNWQ9cyxi8BUl36NqmKGnoPnqnEI41ZI1vmOWXbdYLEzxOucQjXrtk2uMcNGrQ'; 

  useEffect(() => {
   if (!transactionId) {
     console.log('transactionId is null or undefined');
     return;
   }
 
   const fetchData = async () => {
     try {
       const response = await fetch(`https://zenspire-f5ec6.et.r.appspot.com/api/v1/transactions/${transactionId}`, {
         headers: {
           'Authorization': `Bearer ${NEXT_PUBLIC_API_TOKEN}`,
         },
       });
 
       if (!response.ok) {
         const errorMessage = await response.text();
         console.error('API error:', errorMessage);
         throw new Error('Network response was not ok');
       }
 
       const data = await response.json();
       console.log('Fetched data:', data);
       setTransaction(data.data);
       
     } catch (error) {
       if (error instanceof Error) {
         setError(error.message); 
       } else {
         setError('An unknown error occurred');
       }
     } finally {
       setLoading(false);
     }
   };
 
   fetchData();

 }, [transactionId]);
 

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;
  if (!transaction) return <div>No transaction data available.</div>;

  return (
   <div className="p-2">
   {transaction ? (
     <div className="md:w-[700px] lg:w-[700px] mx-auto mt-[24px]">
       <img src="payment-confirm-padiumkm.svg" alt="general confirmation" className="w-[300px] mx-auto" />
       
       <div className="w-full flex-col justify-center items-center gap-1 inline-flex">
         <div className="text-neutral-600 text-xl font-bold leading-7">Lakukan Pembayaran Dalam</div>
         <div className="text-center text-red-600 text-lg font-bold capitalize leading-relaxed">
           <div>{transaction.status}</div>
         </div>
         <div className="text-neutral-600 text-sm font-normal leading-[21px]">Tanggal Jatuh Tempo</div>
         <div className="text-center text-neutral-600 text-lg font-bold capitalize leading-relaxed">
           {new Date(transaction.dueDate).toLocaleDateString()}
         </div>
       </div>
       <div className="inline-flex w-full flex-col items-center gap-8 my-6">
         <div className="flex flex-col items-center justify-start gap-[42px] self-stretch rounded-lg border border-slate-200">
           <div className="flex flex-col items-end justify-start self-stretch rounded-lg">
             <div className="flex flex-col items-start justify-start gap-1 self-stretch bg-slate-50">
               <div className="inline-flex items-start justify-between gap-2.5 self-stretch px-4 py-3">
                 <div className="text-[18px] font-bold leading-relaxed text-neutral-600">{transaction.payment.payment_name}</div>
                 <img className="h-6" src={`padi-umkm/${transaction.payment.logo}`} alt={transaction.payment_name || 'logo'} />
               </div>
               <div className="inline-flex items-center justify-start gap-1 self-stretch">
                 <div className="h-[1px] shrink grow basis-0 bg-slate-200"></div>
               </div>
             </div>
             <div className="flex flex-col items-center justify-start gap-4 self-stretch py-5">
               <div className="flex flex-col items-start justify-start gap-4 self-stretch px-4">
                 <div className="inline-flex items-center justify-between gap-1 self-stretch">
                   <div className="text-[16px] font-normal leading-normal text-neutral-600">Nomor Virtual Account</div>
                   <div className="inline-flex flex-col items-end justify-start gap-2.5">
                     <div className="inline-flex items-center justify-center gap-2">
                       <div className="text-center text-[20px] font-bold leading-7 text-neutral-600">
                         {transaction.no_payment}
                       </div>
                       <div className="flex items-center justify-start gap-1 cursor-pointer" data-testid="txtSalin">
                         <div className="text-[14px] font-normal underline text-[#009EA9]">Salin</div>
                         <div className="relative h-4 w-4">
                           <div className="absolute left-0 top-0 h-4 w-4">
                             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#009EA9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                               <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
                             </svg>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="inline-flex items-center justify-start gap-1 self-stretch">
                 <div className="h-[1px] shrink grow basis-0 bg-slate-200"></div>
               </div>
               <div className="inline-flex items-start justify-between self-stretch px-4">
                 <div className="text-[16px] font-normal leading-normal text-neutral-600">Total Harga</div>
                 <div className="flex items-start justify-center gap-2">
                   <div className="text-center text-[20px] font-bold leading-7 text-neutral-600">
                     {`Rp ${transaction.gross_amount}`}
                   </div>
                   <div className="flex items-center justify-center gap-3">
                     <div className="flex items-center justify-start gap-1 cursor-pointer" data-testid="txtSalin">
                       <div className="text-[14px] font-normal underline text-[#009EA9]">Salin</div>
                       <div className="relative h-4 w-4">
                         <div className="absolute left-0 top-0 h-4 w-4">
                           <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="#009EA9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                             <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
                           </svg>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
 
         <div className="flex gap-4">
           <Link href="/checkout">
             <button 
               data-testid="btnKembaliKeBeranda" 
               className="w-80 flex items-center justify-center gap-2 rounded border border-cyan-600 bg-white py-2"
             >
               <span className="text-[16px] font-medium capitalize leading-normal text-cyan-600">
                 Kembali ke beranda
               </span>
             </button>
           </Link>
           <Link href="/checkout">
             <button 
               data-testid="btnCekStatusPesanan" 
               className="w-80 flex items-center justify-center gap-2 rounded bg-cyan-600 cursor-pointer py-2"
             >
               <span className="text-[16px] font-medium capitalize leading-normal text-neutral-50">
                 Cek Status Pesanan
               </span>
             </button>
           </Link>
         </div>

        
 
         <div className="flex flex-col items-center justify-start gap-[42px] self-stretch rounded-lg ">
            <div className="flex flex-col items-end justify-start self-stretch rounded-lg">
               <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                  <div className="inline-flex items-start justify-start gap-2.5 self-stretch px-4 py-3">
                     <div className="text-[18px] font-bold leading-relaxed text-neutral-600">Cara Pembayaran</div>
                  </div>
               </div>
               <div className="w-full h-full false p-4">
                  <div className=" cursor-pointer" data-testid="icnExpand0">
                     <div className="h-full flex items-center justify-between">
                        <div className="flex grow items-center space-x-2">
                           <div className="font-[600] text-base text-paletteText-primary">ATM</div>
                        </div>
                        <div>
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full h-full false p-4">
                  <div className=" cursor-pointer" data-testid="icnExpand1">
                     <div className="h-full flex items-center justify-between">
                        <div className="flex grow items-center space-x-2">
                           <div className="font-[600] text-base text-paletteText-primary">IBANK</div>
                        </div>
                        <div>
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full h-full false p-4">
                  <div className=" cursor-pointer" data-testid="icnExpand2">
                     <div className="h-full flex items-center justify-between">
                        <div className="flex grow items-center space-x-2">
                           <div className="font-[600] text-base text-paletteText-primary">MBANK</div>
                        </div>
                        <div>
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full h-full false p-4">
                  <div className=" cursor-pointer" data-testid="icnExpand3">
                     <div className="h-full flex items-center justify-between">
                        <div className="flex grow items-center space-x-2">
                           <div className="font-[600] text-base text-paletteText-primary">ATM - BANK LAIN</div>
                        </div>
                        <div>
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full h-full false p-4">
                  <div className=" cursor-pointer" data-testid="icnExpand4">
                     <div className="h-full flex items-center justify-between">
                        <div className="flex grow items-center space-x-2">
                           <div className="font-[600] text-base text-paletteText-primary">INTERNET BANKING - BANK LAIN</div>
                        </div>
                        <div>
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-full h-full false p-4">
                  <div className=" cursor-pointer" data-testid="icnExpand5">
                     <div className="h-full flex items-center justify-between">
                        <div className="flex grow items-center space-x-2">
                           <div className="font-[600] text-base text-paletteText-primary">MOBILE BANKING - BANK LAIN</div>
                        </div>
                        <div>
                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      
       </div>
     </div>
     ) : (

      <div>Loading...</div>
      )}
  </div>
 
  );
};

export default PaymentConfirm;

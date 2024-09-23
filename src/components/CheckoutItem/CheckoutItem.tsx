'use client';
import React, { useEffect, useState } from 'react';
import checkoutData from './data/checkoutItems.json';
import './CheckoutItem.css';

interface CheckoutItem {
  id: number;
  imageSrc: string;
  title: string;
  location: string;
  availability: string;
  description: string;
  quantity: string;
  tax: string;
  taxpph: string;
  price: string;
  shippingOptions: string;
}

const CheckoutItemList: React.FC = () => {
  const [items, setItems] = useState<CheckoutItem[]>([]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    if (Array.isArray(checkoutData)) {
      setItems(checkoutData);
    }
  }, []);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target && !(e.target as HTMLElement).closest('.dropdown')) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative flex flex-col justify-between rounded-lg bg-white text-paletteText-primary p-4 space-y-6"
          style={{
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 10px 0px',
          }}
        >
          <div className="space-y-6">
            <div className="divide-y-4">
              <div className="divide-y pb-6">
                <div className="pb-6 space-y-4">
                  <div className="flex">
                    <div className="flex justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-12 h-12">
                          <img
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="rounded-lg"
                            sizes="100vw"
                            src="shop.svg"
                            style={{
                              position: 'absolute',
                              height: '100%',
                              width: '100%',
                              inset: '0px',
                              margin: 'auto',
                              objectFit: 'fill',
                              color: 'transparent',
                            }}
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="text-base font-semibold text-paletteText-primary">
                            {item.title}
                          </div>
                          <div className="text-sm text-paletteText-inactive">
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divide-y">
                  <div>
                    <div className="w-full flex flex-col justify-between space-y-4 py-4 md:flex-row md:items-center md:space-y-0">
                      <div className="space-y-2 w-full">
                        <div className="flex items-center space-x-4 w-full">
                          <div className="relative w-20 h-20 overflow-hidden text-sm bg-white rounded-lg">
                            <img
                              alt={item.title}
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              sizes="100vw"
                              src={item.imageSrc}
                              style={{
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                                inset: '0px',
                                objectFit: 'fill',
                                color: 'transparent',
                              }}
                            />
                          </div>
                          <div className="space-y-1 w-full">
                            <div className="flex justify-between w-full md:flex-row flex-col gap-2">
                              <div className="flex-1">
                                <div className="flex gap-2 items-center">
                                  <span className="font-bold text-[#F7931E] text-xs">
                                    {item.availability}
                                  </span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="flex-1">
                                    <div className="font-[700] text-paletteText-primary text-base line-clamp-2">
                                      {item.description}
                                    </div>
                                    <div>
                                      <div className="font-[600] text-paletteText-primary text-xs">
                                        {item.quantity}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end">
                                    <div className="font-[700] text-paletteText-primary">
                                      {item.price}
                                    </div>
                                    <div className="font-[700] text-paletteText-primary text-xs text-right">
                                      <div
                                        className="inline-block px-2 py-1 rounded-lg"
                                        style={{ backgroundColor: '#E6F4F7', color: '#0092AC', fontSize: '0.75rem', marginRight: '0.5rem' }}
                                      >
                                        {item.tax}
                                      </div>
                                      <div
                                        className="inline-block px-2 py-1 rounded-lg"
                                        style={{ backgroundColor: '#E6F4F7', color: '#0092AC', fontSize: '0.75rem' }}
                                      >
                                        {item.taxpph}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pt-6 space-y-4">
                                  <div className="w-full">
                                    <div className="border border-borderCard-divider bg-borderCard-card rounded-lg w-full h-full divide-y">
                                      <div className="relative w-full h-fit sm:h-[55px]">
                                        <div
                                          className="h-full flex items-center justify-between px-4 cursor-pointer"
                                          onClick={() => toggleDropdown(item.id)}
                                        >
                                          <div className="flex items-center space-x-2">
                                            <div className="p-2">
                                              <div
                                                className="font-[600] text-sm uppercase text-paletteText-primary"
                                                style={{ color: 'black' }}
                                              >
                                                reguler - Rp7.500
                                              </div>
                                              <div className="text-xs">
                                                Estimasi tiba  04 Sep - 04 Sep
                                              </div>
                                            </div>
                                          </div>
                                          <div>
                                            <svg
                                              stroke="currentColor"
                                              fill="currentColor"
                                              strokeWidth="0"
                                              viewBox="0 0 448 512"
                                              height="1em"
                                              width="1em"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                            </svg>
                                          </div>
                                        </div>
                                        {openDropdown === item.id && (
                                          <div className="absolute right-0 origin-top-right mt-2 rounded-lg shadow-lg bg-white cursor-default z-50 w-full dropdown">
                                            <div className="py-1">
                                              <div className="px-4 py-2 max-h-[296px] overflow-auto divide-y">
                                                <div className="flex items-center justify-between space-x-2 hover:bg-borderCard-card px-2 flex-col md:flex-row cursor-pointer">
                                                  <div className="flex items-center space-x-2 flex-col md:flex-row">
                                                    <div className="p-2 space-y-2 rounded-md w-full">
                                                      <div className="font-[700] uppercase">ekonomi</div>
                                                      <div className="font-[500] text-xs">Ketersediaan: 100 item</div>
                                                    </div>
                                                  </div>
                                                  <div className="w-full">
                                                    <div className="font-[700] text-right">Rp10.000</div>
                                                    <div className="font-[400] text-xs text-right">Estimasi tiba  04 Sep - 04 Sep</div>
                                                  </div>
                                                </div>
                                                <div className="flex items-center justify-between space-x-2 hover:bg-borderCard-card px-2 flex-col md:flex-row cursor-pointer">
                                                  <div className="flex items-center space-x-2 flex-col md:flex-row">
                                                    <div className="p-2 space-y-2 rounded-md w-full">
                                                      <div className="font-[700] uppercase">Express</div>
                                                      <div className="font-[500] text-xs">Ketersediaan: 100 item</div>
                                                    </div>
                                                  </div>
                                                  <div className="w-full">
                                                    <div className="font-[700] text-right">Rp15.000</div>
                                                    <div className="font-[400] text-xs text-right">Estimasi tiba  04 Sep - 04 Sep</div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className='flex mt-2 justify-between w-full md:flex-row flex-col gap-2'>
                                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <span
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#9E9E9E',
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        gap: '0.75rem',
                                        marginBottom: '0.5rem' 
                                      }}
                                    >
                                      <img
                                        src="https://padiumkm.id/_next/static/media/edit-3.dc4aa004.svg"
                                        alt=""
                                        style={{ width: '1rem', height: '1rem' }}
                                      />
                                      <div style={{ color: '#0092AC' }}>Catatan Untuk Penjual</div>
                                    </span>
                                  </div>
                                  <div>
                                    <div style={{ textAlign: 'left', color: '#000000' }}>Subtotal: 
                                      <span style={{ fontWeight: 700 }}> {item.price}</span>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutItemList;

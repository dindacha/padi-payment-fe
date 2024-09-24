import React from 'react'
import './Address.css'

const Address = () => {
  return (
    <div className='address-container'>
        <div className="flex flex-col space-y-8 sm:px-6 md:px-8 lg:px-0 address-box">
            <div 
                style={{
                    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.2), 0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
                }} 
                className="flex flex-col justify-between rounded-lg bg-white text-paletteText-primary p-4 space-y-4"
            >
                <div className="flex justify-between items-center">
                    <div className="text-xl font-[700] text-black">Alamat Pengiriman</div>
                    <span className="cursor-pointer text-secondary-70 font-bold hover:font-extrabold transition-all">
                        Pilih Alamat Lain
                    </span>
                </div>
                <div className="space-y-1">
                    <div className="flex items-center text-sm font-[700]">
                        <div>Rumah</div>
                        <div className="mx-2 w-1 h-1 bg-[#8C9197] rounded-full"></div>
                        <div>Dinda Chairunisa Darmadi</div>
                    </div>
                    <div className="text-sm">6285695470495</div>
                    <div className="text-sm">RT 008 RW 001, Kota Tangerang Selatan, Banten, 15414</div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Address
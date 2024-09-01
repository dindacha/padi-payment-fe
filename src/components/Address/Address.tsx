import React from 'react'

const Address = () => {
  return (
    <div>
        <div>
            <div className="flex flex-col space-y-8">
                <div style={{
                    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.2), 0px 2px 10px 0px rgba(0, 0, 0, 0.1)',
                    }} 
                    className="flex flex-col justify-between rounded-lg bg-white text-paletteText-primary p-4 space-y-4">
                    <div className="space-y-6">
                        <div className="text-xl font-[700] text-black">Alamat Pengiriman</div>
                        <div className="space-y-1">
                        <div className="text-sm font-[700]">Dinda Chairunisa Darmadi <small className="font-normal">(Rumah)</small></div>
                        <div className="text-sm">6285695470495</div>
                        <div className="text-sm">RT 008 RW 001  , Kota Tangerang Selatan , Banten, 15414</div>
                        </div>
                    </div>
                    <div><button className="w-full px-6 h-10 border rounded-lg border-secondary-70 text-secondary-70 font-medium hover:bg-secondary-70 hover:text-white">Pilih Alamat Lain</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Address
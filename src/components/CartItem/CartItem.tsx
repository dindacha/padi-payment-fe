import React from 'react'

const CartItem = () => {
  return (
    <div>
        <div className='divide-y-[4px] divide-borderCard-divider'>
            {/* choose all */}
            <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center space-x-4'>
                    <div>
                        <input type="checkbox" className='h-4 w-4 cursor-pointer accent-secondary-70'/>
                    </div>
                    <div className='text-paletteText-primary font-[400]'>Pilih Semua</div>
                </div>
                <button className='font-[500] text-paletteText-error cursor-pointer'>Hapus</button>
            </div>
            {/* choose one */}
            <div className='divide-y-[4px] divide-borderCard-divider'>
            <div>
                <div>
                    <div className="flex items-center space-x-4 mt-6 w-full false">
                        <div><input type="checkbox" className="h-4 w-4 cursor-pointer accent-secondary-70"></input></div>
                        <div className="relative">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white">
                                <img alt="PT. Adel Mau Testing 1 Tapi Lebih Panjang Namanya" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" 
                                // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=640&amp;q=25 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=750&amp;q=25 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=828&amp;q=25 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=1080&amp;q=25 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=1200&amp;q=25 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=1920&amp;q=25 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=2048&amp;q=25 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=3840&amp;q=25 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=3840&amp;q=25" 
                                style={{ 
                                    position: 'absolute',
                                    height: '100%',
                                    width: '100%',
                                    inset: '0px',
                                    objectFit: 'fill',
                                    color: 'transparent'
                                    }}></img>
                                </div>
                        </div>
                        <a rel="noopener noreferrer" target="_blank" href="/store/63eb27d5f31dd022a3c339fe">
                            <span className="cursor-pointer">
                            <div className="font-[600] text-paletteText-primary">PT. Adel Mau Testing 1 Tapi Lebih Panjang Namanya</div>
                            <div className="font-[400] text-[#5C5C6B] text-sm">Banten</div>
                            </span>
                        </a>
                    </div>
                    <div className="divide-y-[1px] divide-borderCard-divider">
                        <div>
                            <div className="w-full py-6">
                            <div className="flex w-full mb-3 gap-4  items-center md:space-y-0">
                                <div className="flex items-center space-x-4">
                                    <div><input type="checkbox" className="h-4 w-4 accent-secondary-70 cursor-pointer"></input></div>
                                    <div className="relative w-20 h-20 overflow-hidden text-sm bg-white rounded-lg">
                                        <img alt="Baterai ABC" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" 
                                        // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=640&amp;q=25 640w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=750&amp;q=25 750w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=828&amp;q=25 828w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=1080&amp;q=25 1080w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=1200&amp;q=25 1200w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=1920&amp;q=25 1920w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=2048&amp;q=25 2048w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=3840&amp;q=25 3840w" src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=3840&amp;q=25" 
                                        style={{ 
                                            position: 'absolute',
                                            height: '100%',
                                            width: '100%',
                                            inset: '0px',
                                            objectFit: 'fill',
                                            color: 'transparent'
                                            }}></img>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex md:flex-row flex-col w-full gap-2">
                                        <div className="space-y-1 w-full">
                                        <div className="flex gap-2 items-center"><span className="font-bold text-[#F7931E] text-xs">Tersedia 75</span></div>
                                        <a rel="noopener noreferrer" target="_blank" href="/product/baterai-abc/669497f1d973b1d4a4008a87">
                                            <span className="space-y-1 cursor-pointer">
                                                <div className="font-normal text-paletteText-primary text-base line-clamp-2">Baterai ABC</div>
                                            </span>
                                        </a>
                                        <div className="flex items-start md:items-center gap-1 md:flex-row flex-col mt-4">
                                            <div className="flex gap-1">
                                                <div className="bg-[#E6F4F7] text-[10px] flex items-center justify-center px-1 w-fit rounded-[4px] h-[18px] ">
                                                    <div className="flex items-center justify-center space-x-1" style={{ color: 'rgb(0, 146, 172)' }}><span className="font-medium font-ubuntu ">PPH 22</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="md:text-end text-start">
                                        <div className="font-[700] text-paletteText-primary">Rp750.000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-2 justify-between items-center">
                                <div className="flex items-center space-x-4">
                                    <span className="flex items-center text-secondary-70 text-sm font-medium space-x-3 cursor-pointer">
                                        <img src="/_next/static/media/edit-3.dc4aa004.svg" alt="" className="w-6 h-6"></img>
                                        <div>Catatan Untuk Penjual</div>
                                    </span>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <div className="flex space-x-2 sm:space-x-8">
                                        <div className="flex justify-center cursor-pointer items-center text-2xl text-[#686E76] font-bold">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                        </div>
                                        <div className="flex md:ml-0">
                                        <div className="relative h-fit flex items-center border-[1px] text-paletteText-primary rounded-sm leading-tight w-40 bg-white">
                                            <div className="flex items-center justify-center p-2 left-0 mr-3 border-r font-bold bg-inactive cursor-not-allowed">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-paletteText-inactive" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                                                </svg>
                                            </div>
                                            <div className="h-full py-1"><input className="w-full h-full text-sm focus:outline-none placeholder:text-[#8F95B2] text-center bg-transparent text-paletteText-primary" placeholder="0" pattern="^[0-9]*$" value="1"></input></div>
                                            <div className="flex items-center justify-center p-2 right-0 ml-3 border-l font-bold cursor-pointer
                                                ">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="text-paletteText-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"></path>
                                                    <path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"></path>
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
                </div>
            </div>






            </div>
        </div>
    </div>
  )
}

export default CartItem
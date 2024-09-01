import React from 'react'

const CheckoutItem = () => {
  return (
    <div>
      <div className="flex flex-col justify-between rounded-lg bg-white text-paletteText-primary p-4 space-y-6" 
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) 0px 2px 10px 0px',
      }}>
        <div>
            <div className="divide-y-4">
              <div className="divide-y pb-6">
                  <div className="pb-6 space-y-4">
                    <div className="flex">
                        <div className="flex justify-between w-full">
                          <div className="flex items-center space-x-4">
                              <div className="relative w-12 h-12">
                                <img alt="PT. Adel Mau Testing 1 Tapi Lebih Panjang Namanya" loading="lazy" decoding="async" data-nimg="fill" className="rounded-lg" sizes="100vw" 
                                // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=640&amp;q=25 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=750&amp;q=25 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=828&amp;q=25 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=1080&amp;q=25 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=1200&amp;q=25 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=1920&amp;q=25 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=2048&amp;q=25 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=3840&amp;q=25 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.ce5e97bb.svg&amp;w=3840&amp;q=25" 
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  inset: '0px',
                                  objectFit: 'fill',
                                  color: 'transparent',
                                }}/></div>
                              <div className="flex flex-col">
                                <div className="text-base font-semibold text-paletteText-primary">PT. Adel Mau Testing 1 Tapi Lebih Panjang Namanya</div>
                                <div className="text-sm text-paletteText-inactive">Banten</div>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div className="divide-y">
                        <div>
                          <div className="w-full flex flex-col justify-between space-y-4 py-4  md:flex-row md:items-center md:space-y-0">
                              <div className="space-y-2 w-full">
                                <div className="flex items-center space-x-4 w-full">
                                    <div className="relative w-20 h-20 overflow-hidden text-sm bg-white rounded-lg">
                                      <img alt="Baterai ABC" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" 
                                      // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=640&amp;q=25 640w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=750&amp;q=25 750w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=828&amp;q=25 828w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=1080&amp;q=25 1080w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=1200&amp;q=25 1200w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=1920&amp;q=25 1920w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=2048&amp;q=25 2048w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=3840&amp;q=25 3840w" src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fproduct%2Fimage%2F15072024%2F63eb27d5f31dd022a3c339fe%2F669497f1d973b1d4a4008a87%2F5fe13befff32dff37d22b4cfd6e3a8.jpg&amp;w=3840&amp;q=25" 
                                      style={{
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        inset: '0px',
                                        objectFit: 'fill',
                                        color: 'transparent',
                                      }}/></div>
                                    <div className="space-y-1 w-full">
                                      <div className="flex justify-between w-full md:flex-row flex-col gap-2">
                                          <div>
                                            <div className="flex gap-2 items-center"><span className="font-bold text-[#F7931E] text-xs">Tersedia 73</span></div>
                                            <div className="font-normal text-paletteText-primary text-base line-clamp-2">Baterai ABC</div>
                                            <div>
                                                <div className="font-[700] text-paletteText-primary text-xs">1pcs(166.67kg)</div>
                                                <div className="flex items-center gap-1">
                                                  <div className="flex items-center p-1 bg-categoryBg-milkyWay text-secondary-70 rounded-md w-fit">
                                                      <div className="text-xs flex-nowrap font-bold">PPH 22</div>
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
                                      <span className="flex items-center text-secondary-70 text-sm font-semibold space-x-3 cursor-pointer">
                                          <img 
                                          // src="/_next/static/media/edit-3.dc4aa004.svg" 
                                          alt="" className="w-4 h-4"></img>
                                          <div>Catatan Untuk Penjual</div>
                                      </span>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="pt-6 space-y-4">
                    <div className="w-full">
                        <div className="border border-borderCard-divider bg-borderCard-card rounded-lg w-full h-full divide-y">
                          <div className="relative w-full h-[55px]">
                              <div className="h-full flex items-center justify-between px-4 cursor-pointer">
                                <div className="flex items-center space-x-2">
                                    <div className="flex text-paletteText-primary font-semibold text-sm pl-2" 
                                    style={{
                                      color: 'rgb(128, 128, 128)',
                                    }}>
                                      <img src="/_next/static/media/kurir.c38072f5.svg" alt="kurir"/>
                                      <span className="ml-2">Pilih Pengiriman</span>
                                    </div>
                                </div>
                                <div>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                    </svg>
                                </div>
                              </div>
                              <div className="overflow-hidden font-ubuntu hidden right-0 origin-top-right absolute mt-2 rounded-lg shadow-lg bg-white focus:outline-none cursor-default z-50 w-full" style={{ zIndex: 1 }}>
                                <div className="py-1" role="none">
                                    <div>
                                      <div className="p-3 text-center font-[600]">Data pengiriman kosong.</div>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                  <div className="font-[700]">Subtotal</div>
                  <div className="font-[700]">Rp750.000</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
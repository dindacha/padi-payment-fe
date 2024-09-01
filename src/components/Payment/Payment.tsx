import React from 'react'

const Payment = () => {
  return (
    <div>
        <div className="space-y-12 container-layout">
            <div className="flex items-center space-x-4">
                <span className="cursor-pointer">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-3xl text-paletteText-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                    </svg>
                </span>
                <div className="font-[700] text-2xl text-paletteText-primary">Pembayaran</div>
            </div>
            <div className="flex flex-col space-x-0 space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
                <div className="w-full lg:w-2/3 space-y-8">
                    <div className="flex flex-col flex-[2]">
                        <div className="space-y-8 mt-8">
                        <div className="space-y-4">
                            <div className="flex-row">
                                <div className="h-[26px] bg-white justify-start items-start gap-2.5 inline-flex mb-2">
                                    <div className="grow shrink basis-0 text-neutral-600 text-[18px] font-bold leading-relaxed">Metode Pembayaran</div>
                                    <div className="text-red-600 text-[14px] font-bold leading-tight ml-[-10px]">*</div>
                                </div>
                            </div>

                            {/* virtual account */}
                            <div className="font-[700] text-neutral-600">Virtual Account</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-8">
                                    <div className="flex max-h-[55px] items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer" data-testid="clkMandiriVirtualAccount">
                                    <input type="radio" name="paymentMethod" className="accent-secondary-70 w-5 h-5 cursor-pointer" value="[object Object]"/>
                                    <div><img alt="" loading="lazy" width="80" height="90" decoding="async" data-nimg="1" 
                                    // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fmandiri-logo.svg&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fmandiri-logo.svg&amp;w=256&amp;q=75 2x" 
                                    src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fmandiri-logo.svg&amp;w=256&amp;q=75" 
                                    style={{ color: 'transparent' }}/></div>
                                    <div className="block lg:hidden font-[600] text-xs">Mandiri Virtual Account</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-8">
                                    <div className="flex max-h-[55px] items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer" data-testid="clkBniVirtualAccount">
                                    <input type="radio" name="paymentMethod" className="accent-secondary-70 w-5 h-5 cursor-pointer" value="[object Object]"/>
                                    <div><img alt="" loading="lazy" width="80" height="90" decoding="async" data-nimg="1" 
                                    // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fbni-logo.svg&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fbni-logo.svg&amp;w=256&amp;q=75 2x" 
                                    src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fbni-logo.svg&amp;w=256&amp;q=75" 
                                    style={{ color: 'transparent' }}/></div>
                                    <div className="block lg:hidden font-[600] text-xs">BNI Virtual Account</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-8">
                                    <div className="flex max-h-[55px] items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer" data-testid="clkBjbVirtualAccount">
                                    <input type="radio" name="paymentMethod" className="accent-secondary-70 w-5 h-5 cursor-pointer" value="[object Object]"/>
                                    <div><img alt="" loading="lazy" width="80" height="90" decoding="async" data-nimg="1" 
                                    // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fbjb.svg&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fbjb.svg&amp;w=256&amp;q=75 2x" 
                                    src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fbjb.svg&amp;w=256&amp;q=75" 
                                    style={{ color: 'transparent' }}/></div>
                                    <div className="block lg:hidden font-[600] text-xs">BJB Virtual Account</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        {/* dompet digital */}
                        <div className="space-y-2 mt-8">
                            <div className="font-[700]">Dompet Digital</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <div className="flex items-center space-x-8">
                                    <div className="flex max-h-[55px] items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer" data-testid="clkDana">
                                        <input type="radio" name="paymentMethod" className="accent-secondary-70 w-5 h-5 cursor-pointer" value="[object Object]"/>
                                        <div><img alt="" loading="lazy" width="80" height="20" decoding="async" data-nimg="1" className="h-[20px]" 
                                        // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fdana-logo.svg&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fdana-logo.svg&amp;w=256&amp;q=75 2x" src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fdana-logo.svg&amp;w=256&amp;q=75" 
                                        style={{ color: 'transparent' }}/></div>
                                        <div className="block lg:hidden font-[600] text-xs">DANA</div>
                                    </div>
                                    </div>
                                    <span className="text-zinc-500 text-xs font-normal font-['Ubuntu'] leading-[18px]">*Maks. transaksi Rp20 juta</span>
                                </div>                              
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
                        </div>

                        {/* credit card */}
                        <div className="space-y-2 mt-8">
                            <div>
                                <div className="font-[700]">Credit Card</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <div className="flex items-center space-x-8">
                                    <div className="flex max-h-[55px] items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer" data-testid="clkCreditCard">
                                        <input type="radio" name="paymentMethod" className="accent-secondary-70 w-5 h-5 cursor-pointer" value="[object Object]"/>
                                        <div><img alt="" loading="lazy" width="80" height="90" decoding="async" data-nimg="1" 
                                        // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fcard-logo.svg&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fcard-logo.svg&amp;w=256&amp;q=75 2x" src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fcard-logo.svg&amp;w=256&amp;q=75" 
                                        style={{ color: 'transparent' }}/></div>
                                        <div className="block lg:hidden font-[600] text-xs">Credit Card</div>
                                    </div>
                                    </div>
                                    <span className="text-zinc-500 text-xs font-normal font-['Ubuntu'] leading-[18px]">*Maks. transaksi Rp200 juta</span>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-8">
                                    <div className="flex max-h-[55px] items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer" data-testid="clkKartuKreditIndonesia">
                                        <input type="radio" name="paymentMethod" className="accent-secondary-70 w-5 h-5 cursor-pointer" value="[object Object]"/>
                                        <div><img alt="" loading="lazy" width="80" height="90" decoding="async" data-nimg="1" 
                                        // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fkki-logo-2.svg&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fkki-logo-2.svg&amp;w=256&amp;q=75 2x" 
                                        src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fkki-logo-2.svg&amp;w=256&amp;q=75" 
                                        style={{ color: 'transparent' }}/></div>
                                        <div className="block lg:hidden font-[600] text-xs">Kartu Kredit Indonesia</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* QRIS */}
                        <div className="space-y-2 mt-8">
                            <div className="font-[700]">QRIS</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <div className="flex items-center space-x-8">
                                    <div className="flex max-h-[55px] items-center border border-borderCard-divider bg-borderCard-card rounded-lg w-full space-x-4 py-[14px] px-4 cursor-pointer" data-testid="clkPembayaranQr">
                                        <input type="radio" name="paymentMethod" className="accent-secondary-70 w-5 h-5 cursor-pointer" value="[object Object]"/>
                                        <div className="relative overflow-hidden text-sm h-12 w-12 "><img alt="Pembayaran QR" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" 
                                        // srcset="/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=640&amp;q=25 640w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=750&amp;q=25 750w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=828&amp;q=25 828w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=1080&amp;q=25 1080w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=1200&amp;q=25 1200w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=1920&amp;q=25 1920w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=2048&amp;q=25 2048w, /_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=3840&amp;q=25 3840w" 
                                        src="https://stg.berasumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-stage.oss-ap-southeast-5.aliyuncs.com%2Fassets%2Fpayment%2Flogo%2Fsvg%2Fqris-logo.svg&amp;w=3840&amp;q=25" 
                                        style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'fill', color: 'transparent' }}/></div>
                                        <div className="block lg:hidden font-[600] text-xs">Pembayaran QR</div>
                                    </div>
                                    </div>
                                    <span className="text-zinc-500 text-xs font-normal font-['Ubuntu'] leading-[18px]">*Maks. transaksi Rp10 juta</span>
                                </div>
                            </div>
                        </div>

                        {/* catatan */}
                        <div className="w-full space-y-6 mt-8 h-14 p-2 rounded flex-col justify-start items-start gap-2.5 inline-flex">
                            <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                <div className="grow shrink basis-0 h-10 justify-start items-center gap-2.5 flex">
                                    <div className="grow shrink basis-0">
                                        <span className="text-zinc-500 text-[12px] font-medium leading-none">Catatan:
                                            <br/>
                                        </span>
                                        <span className="text-red-600 text-[14px] font-bold leading-tight">*</span>
                                        <span className="text-zinc-500 text-[14px] font-bold leading-tight"> </span>
                                        <span className="text-zinc-500 text-[14px] font-normal leading-tight">Wajib diisi</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>



                {/* <div class="w-full lg:w-1/3">
                    <div class="flex w-full relative">
                        <div class="sticky top-36 space-y-4 w-full lg:w-[378px] xl:w-[584px]">
                        <div style="box-shadow:0px 0px 2px 0px #00000033,0px 2px 10px 0px #0000001A" class="flex flex-col justify-between rounded-md border-[1px] border-[#DEE3ED] bg-white text-paletteText-primary p-8">
                            <div class="divide-y-4">
                                <div class="mb-4">
                                    <div class="rounded-md p-4  cursor-pointer bg-[#FEF2E6]">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <div><img alt="" src="/_next/static/media/ticket-discount.4360d588.svg"></div>
                                            <div class=" text-sm font-[700] bg-FEF2E6 false">Gunakan Promo?</div>
                                        </div>
                                        <div>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-paletteText-primary" color="#F7931E" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(247, 147, 30);">
                                                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-xl font-[700] mb-3 pt-4">Ringkasan Belanja</div>
                                    <hr>
                                    <div>
                                    <div class="divide-y">
                                        <div class="space-y-1 my-4">
                                            <div class="flex items-center justify-between text-sm">
                                                <div class="flex-nowrap text-ellipsis overflow-hidden number-of-line-1">Nama Toko</div>
                                                <div class="flex-nowrap text-ellipsis overflow-hidden number-of-line-1">Tobagaz</div>
                                            </div>
                                            <div>
                                                <div class="flex items-center justify-between text-sm">
                                                <div class="flex items-center space-x-1">
                                                    <div>Total Harga 1 Barang (0.75 kg)</div>
                                                    <div class="italic font-bold"></div>
                                                </div>
                                                <div>Rp3.000</div>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between text-sm mb-3">
                                                <div class="flex-nowrap text-ellipsis overflow-hidden number-of-line-1">Pengiriman</div>
                                                <div class="flex-nowrap text-ellipsis overflow-hidden number-of-line-1">Rp0</div>
                                            </div>
                                            <div class="flex items-center justify-between py-2 text-sm">
                                                <div class="font-[700]">Total Pesanan</div>
                                                <div class="font-[700]">Rp3.000</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center justify-between my-3 text-sm">
                                            <div class="flex-nowrap text-ellipsis overflow-hidden number-of-line-1">PPn pengiriman</div>
                                            <div class="flex-nowrap text-ellipsis overflow-hidden number-of-line-1">Rp0</div>
                                        </div>
                                        <div class="flex items-center justify-between my-3 text-sm">
                                            <div class="flex-nowrap text-ellipsis overflow-hidden number-of-line-1">Biaya transaksi Metode Pembayaran</div>
                                            <div class="flex-nowrap text-ellipsis overflow-hidden number-of-line-1">Rp1.665</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <div class="flex items-center text-base justify-between mb-4">
                                    <div class="font-[700]">Total Harga</div>
                                    <div class="font-[700]">Rp4.665</div>
                                    </div>
                                    <div><button data-testid="btnBayar" class="w-full px-6 h-10 border rounded-lg 
                                    text-white bg-secondary-70 hover:bg-secondary-40 font-medium">Bayar</button></div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    </div>
  )
}

export default Payment
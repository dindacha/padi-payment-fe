import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <footer className="bg-borderCard-card text-paletteText-primaryflex flex-col items-center footer">

            {/* info */}
            <div className="container-layout text-center space-y-5 xl:flex xl:text-left xl:space-y-0 py-14 px-5 xl:px-0 mt-5">
                {/* informasi */}
                <div className="flex flex-col space-y-6 text-center md:space-y-0 md:text-left md:flex-row xl:pr-[100px] xl:space-y-0 xl:text-left">
                    <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:w-fit">
                        <div className="text-xl font-bold text-paletteText-primary footer-section-title">PaDi UMKM</div>
                        <div className="text-paletteText-inactive space-y-3 whitespace-nowrap">
                            <div className="cursor-pointer hover:text-secondary-70 text-sm">Tentang PaDi UMKM</div>
                            <a href="/"><div className="cursor-pointer hover:text-secondary-70 text-sm">Syarat & Ketentuan</div></a>
                            <a href="/"><div className="cursor-pointer hover:text-secondary-70 text-sm">Kebijakan Privasi</div></a>
                            <a href="/"><div className="cursor-pointer hover:text-secondary-70 text-sm">Finance</div></a>
                        </div>
                    </div>
                    <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:ml-[100px] xl:w-fit !mt-0">
                        <div className="text-xl font-bold text-paletteText-primary footer-section-title">Informasi</div>
                        <div className="text-paletteText-inactive space-y-3 whitespace-nowrap">
                            <div className="cursor-pointer hover:text-secondary-70 text-sm">FAQ (Tanya Jawab)</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col space-y-5 text-center xl:text-left xl:ml-[100px] xl:w-fit !mt-0">
                        <div className="text-xl font-bold text-paletteText-primary footer-section-title">Penjual</div>
                        <div className="text-paletteText-inactive space-y-3 whitespace-nowrap">
                            <div className="cursor-pointer hover:text-secondary-70 text-sm">Panduan Penjual</div>
                            <div className="cursor-pointer hover:text-secondary-70 text-sm">Marketplace</div>
                            <div className="cursor-pointer hover:text-secondary-70 text-sm">Tender</div>
                            <div className="cursor-pointer hover:text-secondary-70 text-sm">Tender</div>
                            <div className="cursor-pointer hover:text-secondary-70 text-sm">Control Tower</div>
                        </div>
                    </div>
                </div>

                {/* kontak */}
                <div className="w-full xl:w-full flex flex-col space-y-5 overflow-hidden">
                    <div className="text-xl font-bold text-paletteText-primary footer-section-title">Hubungi Kami</div>
                    <div className="text-paletteText-inactive space-y-2">
                        <div className="text-sm">Gedung Telkom Divisi Digital Business & Technology</div>
                        <div className="text-sm">Jl. Prof. DR. Soepomo No.139, RT.13/RW.2, Tebet Barat, Tebet, Jakarta Selatan, Jakarta 12810, Indonesia</div>
                        <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
                            <div className="pr-4 text-sm">Senin - Jumat</div>
                            <div className="flex items-center pl-4 space-x-4 text-sm">08:00 - 17:00 WIB</div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4 mb-0 justify-center xl:justify-start">
                            <div className="cursor-pointer">
                                <a href="" className="w-full h-full">
                                    <img src="facebook-padiumkm.png" alt="facebook" width="24" height="24"/>
                                </a>
                            </div>
                            <div className="cursor-pointer">
                                <a href="" className="w-full h-full">
                                    <img src="x-padiumkm.png" alt="x" width="24" height="24"/>
                                </a>
                            </div>
                            <div className="cursor-pointer">
                                <a href="" className="w-full h-full">
                                    <img src="instagram-padiumkm.png" alt="instagram" width="24" height="24"/>
                                </a>
                            </div>
                            <div className="cursor-pointer">
                                <a href="" className="w-full h-full">
                                    <img src="youtube-padiumkm.png" alt="youtube" width="24" height="24"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-paletteText-inactive space-y-2">
                        <div className="text-sm font-semibold">Layanan Pengaduan Konsumen</div>
                        <div className="text-sm font-semibold">PaDi UMKM</div>
                        <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
                            <div className="flex items-center space-x-1 text-sm">
                                <img src="mail-padiumkm.png"></img>
                                <div className="text-sm">cs@padiumkm.id</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-paletteText-inactive space-y-2">
                        <div className="text-sm font-semibold">Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan RI</div>
                        <div className="flex divide-x-[1px] divide-paletteText-inactive justify-center xl:justify-start">
                            <div className="flex items-center pr-4 text-sm">
                                <img src="wa-padiumkm.png" alt="whatsapp" />
                                <div className="pl-1">+62 853 1111 1010</div>
                            </div>
                            <div className="flex items-center pl-4 space-x-1 text-sm">
                                <img src="mail-padiumkm.png" alt="" />
                                <div className="text-sm">contact.us@kemendag.go.id</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* metode pembayaran */}
            <div className="container-layout">
                <div className="md:border-2 p-5">
                    <div className="text-xl font-bold mb-6 text-center lg:text-start">Metode Pembayaran</div>
                    <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="mandiri-logo.svg" alt="" width="70" height="70" />
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="bni-logo.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="bsi-logo.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="bri-logo.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="btn-logo-2.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="bjb.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="qris-logo.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="dana-logo.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="linkaja-logo.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="ovo-logo.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="card-logo.svg" alt="" width="70" height="70"/>
                        </div>
                        <div className="cursor-pointer flex-none w-fit items-center">
                            <img src="kki-logo-2.svg" alt="" width="70" height="70"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="container-layout pb-6 text-center">
                <div className="text-paletteText-inactive text-base text-sm">©2022-2025 Pasar Digital UMKM Indonesia</div>
            </div>

        </footer>

    </div>
  )
}

export default Footer
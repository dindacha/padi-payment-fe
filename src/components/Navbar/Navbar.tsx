import React from 'react';
import './Navbar.css'; 
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40">
        <nav className="justify-between bg-inactive z-40 h-9 hidden md:flex nav-top">
            <div className="flex px-[22px] z-40 bg-inactive w-full">
                <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                    Mitra PaDi UMKM
                </div>
                <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                    Menjadi Penjual
                </div>
                <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                    Info
                </div>
                <div className="flex items-center text-xs font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                    Pusat Bantuan
                </div>
            </div>
            <div className="navbar-logos">
                <div className="flex items-center logo">
                    <img src="/logo-bbi.svg" alt="Logo bangga buatan Indonesia" width="24" height="24"></img>
                </div>
                <div className="flex items-center logo">
                    <img src="/logo-bumn.svg" alt="Logo bangga buatan Indonesia" width="65" height="12"></img>
                </div>
            </div>
        </nav>

        <div className="w-full z-40 flex-col flex bg-white border-b-2 nav-mob">
            <div className='flex items-center flex-col sm:flex-row justify-around bg-white py-0 z-30 px-5 w-full h-[60px] md:h-[80px] '>
                {/* left */}
                <div className='flex flex-col-mob items-center justify-between w-full h-full mt-3 sm:mt-0 md:mt-0 lg:mt-0'>
                    <div className='flex-none items-center justify-center h-full w-[100px] max-w-[100px] md:w-[120px] md:max-w-[120px] pr-7'>
                        <a><span className='flex items-center justify-center cursor-pointer w-full h-full'>
                            <img src='logo-padiumkm.png' alt='padiUMKM'></img>
                            </span></a>
                    </div>
                    <nav className='hidden md:flex items-center justify-center h-full'>
                        <div className='flex items-center justify-start h-full w-[90px] lg:w-[110px] h-full'>
                            <img src='category-padiumkm.png' className='!w-[16px] !h-[16px] items-center flex mr-2'></img>
                            <p className='flex items-center text-sm font-medium text-[#444B55] py-2 cursor-pointer'>Kategori</p>
                        </div>
                    </nav>
                    <div className='relative items-center w-full h-10 text-paletteText-primary px-3 leading-tight hidden sm:flex border-2 rounded-[8px] search-bar-mobile'>
                        <div className='w-full h-full '>
                            <input type="text" placeholder='Cari produk, jasa, atau vendor' className='w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm' />
                        </div>
                        <div className='flex items-center justify-center right-0 pl-2'>
                            <img src='search-padiumkm.png'></img>
                        </div>
                    </div>
                    <div className='h-full pl-5 sm:flex hidden items-center justify-center'>
                        <a>
                        <div className='relative flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive min-w-[60px]'>
                            <div className='flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md py-[5px] px-[6px] w-[40px] h-[40px]'>
                                <img src="notification-padiumkm.png" alt="" />
                            </div>
                        </div>
                        </a>
                        <Link href="/cart" passHref> 
                            <div className='relative flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive min-w-[60px]'>
                                <div className='flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md py-[5px] px-[6px] w-[40px] h-[40px]'>
                                <img src="cart-padiumkm.png" alt="Cart Icon" />
                                </div>
                            </div>
                        </Link>
                        <span>
                            <div className='relative flex items-center justify-center cursor-pointer h-full w-full text-paletteText-inactive min-w-[60px]'>
                                <div className='flex items-center justify-center hover:bg-[#F3F5FC] hover:rounded-md py-[5px] px-[6px] w-[40px] h-[40px]'>
                                    <img src="chat-padiumkm.png" alt="" />
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                {/* right */}
                <div className='flex items-center w-full sm:w-fit h-full'>
                    <div className='items-center justify-center pl-4 hidden sm:flex space-x-5 h-full'>
                        <div className='flex items-center justify-center h-full space-x-3'>
                            <div className='relative w-10 h-10 overflow-hidden text-sm rounded-full'>
                                <img src="user-padiumkm.png" alt="" />
                            </div>
                            <div className='flex flex-col '>
                                <div className='max-w-[120px] truncate text-sm text-paletteText-primary'>Dinda Chairunisa Darmadi</div>
                                <div className='text-xs text-paletteText-inactive whitespace-nowrap'>Buyer Retail</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        
    </div>
  )
}

export default Navbar
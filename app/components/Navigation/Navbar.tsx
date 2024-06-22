'use client'
import { useState } from 'react'
import Link from 'next/link'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ToggleSidebar from './ToggleSidebar';

const Navbar = () => {

    const [sidebarState, setSidebarState] = useState<boolean>(false);

  return (
    <>
    <nav className='fixed top-0 left-0 z-50 w-screen shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] flex justify-between items-center px-6 py-4 lg:px-[5em] lg:py-8 bg-priColor lg:bg-[transparent] lg:shadow-none'>
        <div>
            <Link href="/" className='text-[23px] lg:text-[34px] text-[white] lg:text-darkText'>Go <span className='font-semibold'>Food</span></Link>
        </div>
        <div className='hidden lg:block'>
            <ul className='flex justify-center items-center'>
                <li>
                    <Link href='/' className='flex justify-center items-center text-[14px] lg:text-[17px] font-semibold text-[white] lg:text-darkText mx-4'>Home <i className="fa-solid fa-chevron-down text-sm mx-1"></i></Link>
                </li>
                <li>
                    <Link href='/' className='flex justify-center items-center text-[14px] lg:text-[17px] font-semibold text-[white] lg:text-darkText mx-4'>Groceries <i className="fa-solid fa-chevron-down text-sm mx-1"></i></Link>
                </li>
                <li>
                    <Link href='/' className='flex justify-center items-center text-[14px] lg:text-[17px] font-semibold text-[white] lg:text-darkText mx-4'>Pages <i className="fa-solid fa-chevron-down text-sm mx-1"></i></Link>
                </li>
            </ul>
        </div>
        <div className='flex justify-between items-center'>
            <div className='hidden lg:block mr-[8em]'>
                <Link href='/' className='group flex justify-center items-center text-[14px] lg:text-[17px] font-semibold text-[white] hover:bg-transparentWhite px-4 py-3 rounded-md'>Connect with us <i className="group-hover:translate-x-2 transition-all duration-500 fa-solid fa-arrow-right text-sm mx-3"></i></Link>
            </div>
            <div className='flex items-center'>
                <button className='nav-icon px-[15px] pt-[13px] pb-[11px] lg:px-[20px] lg:pt-[17px] lg:pb-[15px]'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className='hidden sm:inline nav-icon px-[16px] lg:px-[21px] py-[12px] lg:py-[16px] mx-2 rounded-full'>
                    <i className="fa-regular fa-user"></i>
                </button>
                <button className='relative hidden sm:inline nav-icon px-[14px] lg:px-[20px] pt-[12px] lg:pt-[18px] pb-[10px] lg:pb-[14px] mx-2 rounded-full'>
                    <i className="fa-regular fa-heart"></i>
                    <span className='notify-badge'>2</span>
                </button>
                <button className='relative hidden sm:inline nav-icon px-[14px] lg:px-[19px] py-[12px] lg:py-[16px] mx-2 rounded-full'>
                    <ShoppingBagOutlinedIcon className='text-[16px]  font-semibold' />
                    <span className='notify-badge'>0</span>
                </button>
                <button onClick={() => {setSidebarState(true)}} className='lg:hidden nav-icon px-[15px] py-[12px] mx-2 rounded-full'>
                    <i className="fa-solid fa-bars-staggered"></i>
                </button>
            </div>
        </div>
    </nav>
    <ToggleSidebar state={sidebarState} setState={setSidebarState} />
    </>
  )
}

export default Navbar
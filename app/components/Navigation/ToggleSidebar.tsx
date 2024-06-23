import Link from 'next/link'
import React from 'react'

type sidebarProps = {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleSidebar = ({state, setState}: sidebarProps) => {

  return (
    <aside className={((!state) ? 'right-[-100%] invisible': 'right-0 visible') + ' fixed top-0 z-50 bg-[white] h-screen w-[86%] sm:w-[46%] md:w-[40%] lg:hidden shadow-[10px_20px_50px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 '}>
        <header className='flex justify-between items-center py-[16.9px] px-2 bg-priColor'>
        <p className='font-bold font-sec text-[20px] px-5 text-[white]'>Hey, User!</p>
            <button onClick={() => {setState(false)}} className='text-[13px] text-[white] bg-transparentWhite hover:bg-transparentWhiteHover px-[16px] py-[11px] mx-2 rounded-full'>
                <i className="fa-solid fa-times"></i>
            </button>
        </header>
        <div className='flex flex-col justify-start items-start'>
            <Link href="/" onClick={() => {setState(false)}} className='w-full px-6 py-4 font-semibold text-darkText hover:text-priColor hover:bg-softGray'>Home</Link>
            <Link href="/" onClick={() => {setState(false)}} className='w-full px-6 py-4 font-semibold text-darkText hover:text-priColor hover:bg-softGray'>Groceries</Link>
            <Link href="/" onClick={() => {setState(false)}} className='w-full px-6 py-4 font-semibold text-darkText hover:text-priColor hover:bg-softGray'>Pages</Link>
            <Link href="/" onClick={() => {setState(false)}} className='flex items-center w-full px-6 py-4 font-semibold text-darkText hover:text-priColor hover:bg-softGray'>Cart <span className="bg-secColor rounded-full px-[7px] py-[2px] text-priColor font-medium text-[10px] mx-4">0</span></Link>
            <Link href="/" onClick={() => {setState(false)}} className='flex items-center w-full px-6 py-4 font-semibold text-darkText hover:text-priColor hover:bg-softGray'>Wishlist  <span className="bg-secColor rounded-full px-[7px] py-[2px] text-priColor font-medium text-[10px] mx-4">2</span></Link>
            <Link href="/" onClick={() => {setState(false)}} className='w-full px-6 py-4 font-semibold text-darkText hover:text-priColor hover:bg-softGray'>Account</Link>
        </div>
    </aside>    
  )
}

export default ToggleSidebar
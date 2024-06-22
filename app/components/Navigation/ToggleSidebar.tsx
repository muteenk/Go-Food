import React from 'react'

interface sidebarProps {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleSidebar = ({state, setState}: sidebarProps) => {

  return (
    <aside className={((!state) ? 'right-[-100%]': 'right-0') + ' absolute top-0 bg-[white] h-screen w-[58%] sm:w-[46%] md:w-[40%] lg:hidden shadow-[10px_20px_50px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 '}>
        <header>
            <button onClick={() => {setState(false)}} className='text-[13px] text-[white] bg-priColor px-[15px] py-[12px] mx-2 rounded-full'>
                <i className="fa-solid fa-times"></i>
            </button>
        </header>
        ToggleSidebar
    </aside>    
  )
}

export default ToggleSidebar
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className='flex justify-center items-center w-[45%]'>
        <aside className='w-[15%]'>
            <Image src="https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg" alt='Food Item' height={600} width={600} className='w-full h-[7em] shadow-lg rounded-md' />
        </aside>
        <div className='flex flex-col mx-auto w-[80%]'>
            <div className='flex justify-between items-center py-4 border-b-[3px] border-dashed border-softGray'>
                <h3 className='text-[30px] font-sec font-bold text-darkText'>Italian Style Chicken Meatballs</h3>
                <p className='text-[30px] font-sec font-bold text-priColor'>$8.45</p>
            </div>
            <div className='flex justify-between items-center py-4'>
                <p className='font-semibold text-grayText'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <Link href='/' className='group text-priColor'>SHOP NOW <i className="group-hover:translate-x-2 translate-all duration-500 fa-solid fa-arrow-right text-sm mx-3"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default Card
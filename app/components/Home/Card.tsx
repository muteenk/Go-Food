import { FoodItems } from '@/app/lib/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({foodItem}: {foodItem: FoodItems}) => {
  return (
    <div className='flex justify-center items-center w-[45%] mx-3 my-4 px-5 hover:bg-softGray rounded-md'>
        <aside className='w-[15%]'>
            <Image src={foodItem.strMealThumb} alt='Image Unavailable' height={600} width={600} className='w-full h-[7em] shadow-lg rounded-md' />
        </aside>
        <div className='flex flex-col mx-auto w-[80%]'>
            <div className='flex justify-between items-center py-4 border-b-[3px] border-dashed border-softGray'>
                <h3 className='text-[30px] font-sec font-bold text-darkText'>{foodItem.strMeal}</h3>
                <p className='text-[30px] font-sec font-bold text-priColor'>$8.45</p>
            </div>
            <div className='flex justify-between items-center py-4'>
                <p className='font-semibold text-grayText'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <Link href='/' className='group text-priColor font-medium'>SHOP NOW <i className="group-hover:translate-x-2 translate-all duration-500 fa-solid fa-arrow-right text-sm mx-3"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default Card
import { FoodItems } from '@/app/lib/interfaces'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({foodItem}: {foodItem: FoodItems}) => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center w-[50em] sm:w-[90%] lg:w-[80%] min-[1280px]:w-[48%] min-[1500px]:w-[45%] my-1 sm:my-4 px-5 py-3 sm:py-2 hover:bg-softGray rounded-md'>
        <aside className='w-[60%] sm:w-[15%]'>
            <Image src={foodItem.strMealThumb} alt='Image Unavailable' height={600} width={600} className='w-full h-auto sm:h-[7em] mt-4 sm:mt-0 shadow-lg rounded-md' />
        </aside>
        <div className='flex flex-col mx-auto w-[80%]'>
            <div className='flex justify-between items-center py-4 border-b-[3px] border-dashed border-softGray'>
                <h3 className='text-[19px] min-[1480px]:text-[23px] min-[1700px]:text-[30px] font-sec font-bold text-darkText mr-4'>{foodItem.strMeal}</h3>
                <p className='text-[19px] min-[1480px]:text-[23px] min-[1700px]:text-[30px] font-sec font-bold text-priColor'>$8.45</p>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center py-4'>
                <p className='font-semibold text-grayText text-[13px] min-[1480px]:text-[15px] min-[1700px]:text-[16px] mr-4 text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <Link href='/' className='group text-priColor font-medium text-nowrap text-[14px] min-[1480px]:text-[16px]'>SHOP NOW <i className="group-hover:translate-x-2 translate-all duration-500 fa-solid fa-arrow-right text-sm mx-3 my-5 sm:my-0"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default Card
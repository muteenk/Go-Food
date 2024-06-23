import React from 'react'

const CategorySelector = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-1 mb-12">
        <button className="bg-softGray text-darkText hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300">FRUITS AND VEGETABLES</button>
        <button className="bg-softGray text-darkText hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300">BAKERY</button>
        <button className="bg-softGray text-darkText hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300">MEAT AND SEAFOOD</button>
        <button className="bg-softGray text-darkText hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300">BEVERAGE</button>
        <button className="bg-softGray text-darkText hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300">BISCUIT AND SNACKS</button>
    </div>
  )
}

export default CategorySelector
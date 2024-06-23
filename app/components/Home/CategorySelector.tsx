import React from 'react'

type CategorySelectorProps = {
    category: string,
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

const CategorySelector = ({category, setCategory}: CategorySelectorProps) => {
  return (
    <>
      <div className="hidden sm:flex flex-wrap justify-center items-center mt-1 mb-12">
        <button onClick={() => {setCategory("fruits")}} className={((category === "fruits") ? "bg-priColor text-[white]" : "bg-softGray text-darkText") + " hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300"}>FRUITS AND VEGETABLES</button>
        <button onClick={() => {setCategory("bakery")}} className={((category === "bakery") ? "bg-priColor text-[white]" : "bg-softGray text-darkText") + " hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300"}>BAKERY</button>
        <button onClick={() => {setCategory("meat")}} className={((category === "meat") ? "bg-priColor text-[white]" : "bg-softGray text-darkText") + " hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300"}>MEAT AND SEAFOOD</button>
        <button onClick={() => {setCategory("beverage")}} className={((category === "beverage") ? "bg-priColor text-[white]" : "bg-softGray text-darkText") + " hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300"}>BEVERAGE</button>
        <button onClick={() => {setCategory("snacks")}} className={((category === "snacks") ? "bg-priColor text-[white]" : "bg-softGray text-darkText") + " hover:bg-priColor hover:text-[white] font-medium px-[36px] py-[15px] rounded-full mx-3 my-3 transition-all duration-300"}>BISCUIT AND SNACKS</button>
      </div>
      <div className='flex sm:hidden justify-center items-center'>
        <select onChange={(e) => {
          setCategory(e.target.value);
        }}
        className='w-[80%] border-[1px] border-priColor rounded-md px-4 py-3 text-priColor'>
          <option value="fruits">FRUITS AND VEGETABLES</option>
          <option value="bakery">BAKERY</option>
          <option value="meat">MEAT AND SEAFOOD</option>
          <option value="beverage">BEVERAGE</option>
          <option value="snacks">BISCUIT AND SNACKS</option>
        </select>
      </div>
    </>
  )
}

export default CategorySelector
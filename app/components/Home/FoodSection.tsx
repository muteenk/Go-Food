'use client'

import { useState } from "react"
import CategorySelector from "./CategorySelector";
import FoodCards from "./FoodCards";

const FoodSection = () => {
    const [category, setCategory] = useState<string>('fruits');
  return (
    <section>
        <header className="flex flex-col justify-center items-center mt-12 mb-5 mx-3">
            <h4 className="text-[21px] text-darkText font-bold text-center">Shop by Category</h4>
            <h1 className="font-sec text-[2.3em] sm:text-[2.5em] md:text-[3.2em] my-2 font-bold text-darkText leading-tight text-center">Top Category of Organic Food</h1>
        </header>
        <CategorySelector category={category} setCategory={setCategory} />
        <FoodCards category={category} />
    </section>
  )
}

export default FoodSection
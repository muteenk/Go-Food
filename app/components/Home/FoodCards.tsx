'use client'
import {useState, useEffect} from 'react'
import Card from './Card'
import { FoodItems } from '@/app/lib/interfaces'
import Spinner from '../Spinner'
import { error } from 'console'


const FoodCards = ({category}: {category: string}) => {

    const fetchFoodItems = async (options: string) => {
        try{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${options}`, { cache: 'force-cache' })
            const data = await response.json()
            setFoodItems(data.meals);
        }
        catch(err){
            setErrorMsg("Something went wrong: "+err);
        }
    }

    const [foodItems, setFoodItems] = useState<FoodItems[]>([])
    const [errorMsg, setErrorMsg] = useState<string | null>(null)

    useEffect(() => {

        setFoodItems([]);
        setErrorMsg(null);
        
        let arg: string;
        switch (category) {
            case "fruits":
                arg = "c=Vegetarian";
                break;
            case "bakery":
                arg = "c=Breakfast";
                break;
            case "meat":
                arg = "c=Beef&c=Chicken&c=Pork&c=Seafood";
                break;
            case "beverage":
                arg = "c=Miscellaneous";
                break;
            case "snacks":
                arg = "c=Side";
                break;
            default:
                arg = "c=Vegetarian";
                break;
        }

        fetchFoodItems(arg);
    }, [category])
    

  return (
    <main className='flex justify-center items-center flex-wrap w-screen mx-4 my-8'>
        { 
            (!errorMsg ? (
                foodItems.length === 0 ? <Spinner/> :
                foodItems.map((foodItem, index) => {
                    return (
                        <Card key={index} foodItem={foodItem} />
                    )
                })
            ) : <p>{errorMsg}</p> )
        }
    </main>
  )
}

export default FoodCards
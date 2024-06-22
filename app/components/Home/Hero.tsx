import Image from "next/image"
import FoodPlate from "../../assets/foodPlate.png"
import Leaf from "../../assets/leaf.png"

const Hero = () => {
  return (
    <section className="flex w-screen h-screen">

        <div className="flex justify-start items-center w-[60%] h-full">
            <div className="relative flex flex-col justify-start items-start w-[70%] ml-[5em]">
                <Image src={Leaf} alt="Leaf" height={300} width={100} className="absolute top-[1.5em] right-[15em] z-20 w-[2.5em] rotate-[-120deg]" />
                <h4 className="text-[25px] text-darkText font-bold">Discount up to 20%</h4>
                <h1 className="font-sec text-[3.5em] font-bold text-darkText leading-tight">Buy Fresh And Organic Grocery Food</h1>
                <p className="text-[18px] font-semibold text-[#d8d8d8] my-11"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minus animi veritatis, molestias, id repellendus cumque sed quidem consequuntur!</p>
                <div className="flex justify-between items-center w-full">
                    <button className="group bg-priColor text-[white] font-medium px-[20px] py-[10px] rounded-full mx-3 mr-14">SHOP NOW <i className="group-hover:translate-x-2 translate-all duration-500 fa-solid fa-arrow-right text-sm mx-3"></i></button>
                    <div className="flex flex-col justify-center items-center mx-11">
                        <h1 className="font-sec text-darkText text-[2.5em] font-bold">35k +</h1>
                        <p className="text-grayText font-sec font-bold text-[1.3em]">Users</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mx-11">
                        <h1 className="font-sec text-darkText text-[2.5em] font-bold">18k +</h1>
                        <p className="text-grayText font-sec font-bold text-[1.3em]">Products</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="relative flex justify-center items-center bg-priColor w-[45%]  h-full">
            <Image src={FoodPlate} alt="grocery" width={1920} height={1080} className="absolute top-[5em] left-[-17em] z-20 w-[140em] drop-shadow-[-3px_2px_1px_rgba(0,0,0,0.7)]"/>
            <div className="absolute top-[10em] left-[-12em] z-10 h-[44.5em] w-[44.5em] bg-priColor border-[7.6px] border-transparentWhite rounded-full"></div>
            <Image src={Leaf} alt="Leaf" height={300} width={100} className="absolute bottom-[10em] left-[32em] z-20 w-[3.4em] rotate-[-65deg]" />
            <Image src={Leaf} alt="Leaf" height={300} width={100} className="absolute bottom-[8em] left-[30em] z-20 w-[2.4em] rotate-[-28deg]" />
        </div>
    </section>
  )
}

export default Hero
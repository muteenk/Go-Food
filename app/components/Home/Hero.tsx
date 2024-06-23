import Image from "next/image"
import FoodPlate from "../../assets/foodPlate.png"
import Leaf from "../../assets/leaf.png"

const Hero = () => {
  return (
    <section className="flex flex-col min-[915px]:flex-row w-screen lg:mt-0 min-[915px]:h-screen min-[915px]:mt-[2em] mt-[7em]">

        {/* Left Section - (White Portion) */}
        <div className="bg-[#f2f1ec] flex justify-start items-center min-[915px]:w-[60%] h-full min-[915px]:my-0 my-7">
            <div className="relative flex flex-col md:justify-start md:items-start justify-center items-center min-[915px]:w-[70%] w-[85%] min-[915px]:ml-[5em] mx-auto min-[1400px]:mt-0 min-[915px]:mt-[5em] md:mt-[3em]">
                <Image src={Leaf} alt="Leaf" height={300} width={100} className="absolute top-[1.5em] right-[15em] z-20 w-[2.5em] rotate-[-120deg]" />
                <h4 className="text-[25px] text-darkText font-bold md:text-left text-center">Discount up to 20%</h4>
                <h1 className="font-sec text-[2.8em] mt-5 sm:mt-0 sm:text-[3.5em] font-bold text-darkText leading-tight md:text-left text-center">Buy Fresh And Organic Grocery Food</h1>
                <p className="text-[15px] sm:text-[18px] font-semibold text-[#d8d8d8] my-11  md:text-left text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minus animi veritatis, molestias, id repellendus cumque sed quidem consequuntur!</p>
                <div className="flex flex-col md:flex-row justify-between items-center w-full  md:flex-wrap">
                    <button className="group bg-priColor text-[white] font-medium px-[25px] py-[13px] rounded-full mx-3 md:mr-14">SHOP NOW <i className="group-hover:translate-x-2 translate-all duration-500 fa-solid fa-arrow-right text-sm mx-3"></i></button>
                    <div className="flex justify-center items-center my-12">
                        <div className="flex flex-col justify-center items-center pr-[3em] sm:pr-[4em] border-r border-r-[#d3d3d3]">
                            <h1 className="font-sec text-darkText text-[1.8em] sm:text-[2.5em] font-bold text-nowrap">35k +</h1>
                            <p className="text-grayText font-sec font-bold text-[1.3em]">Users</p>
                        </div>
                        <div className="flex flex-col justify-center items-center pl-[3em] sm:pl-[4em]">
                            <h1 className="font-sec text-darkText text-[1.8em] sm:text-[2.5em] font-bold  text-nowrap">18k +</h1>
                            <p className="text-grayText font-sec font-bold text-[1.3em]">Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Section - (Green Portion) */}
        <div className="relative flex justify-center items-center bg-priColor min-[915px]:w-[45%] w-screen h-[40vh] min-[915px]:h-full min-[915px]:mt-0 mt-[2em]">
            <Image src={FoodPlate} alt="grocery" width={1920} height={1080} className="absolute min-[915px]:top-[55%] top-[8em] translate-y-[-50%] min-[1512px]:left-[-13em] min-[1200px]:left-[-9em] lg:left-[-7em] min-[915px]:left-[-5em] z-20 lg:w-[48em] w-[28em] drop-shadow-[-3px_2px_1px_rgba(0,0,0,0.7)]"/>
            <div className="hero-ring"></div>
            <Image src={Leaf} alt="Leaf" height={300} width={100} className="hidden min-[915px]:inline absolute bottom-[10em] left-[66%] z-20 w-[3.4em] rotate-[-65deg]" />
            <Image src={Leaf} alt="Leaf" height={300} width={100} className="hidden min-[915px]:inline absolute bottom-[8em] left-[62%] z-20 w-[2.4em] rotate-[-28deg]" />
        </div>

    </section>
  )
}

export default Hero
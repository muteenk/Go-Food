import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const ScrollNav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-screen shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] hidden lg:flex justify-between items-center lg:px-3 min-[1420px]:px-[5em] px-6 py-3 bg-priColor animate-fadeIn">
        <div className="flex justify-between items-center w-[55%]">
          <div className="lg:ml-5">
            <Link
              href="/"
              className="text-[23px] text-[white]"
            >
              GO <span className="font-semibold">FOOD</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex justify-center items-center">
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-[14px] lg:text-[15px] font-semibold text-[white] mx-4"
                >
                  Home <i className="fa-solid fa-chevron-down text-sm mx-1"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-[14px] lg:text-[15px] font-semibold text-[white] mx-4"
                >
                  Groceries{" "}
                  <i className="fa-solid fa-chevron-down text-sm mx-1"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-[14px] lg:text-[15px] font-semibold text-[white] mx-4"
                >
                  Pages{" "}
                  <i className="fa-solid fa-chevron-down text-sm mx-1"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center w-[40%]">
          <div className="hidden lg:block lg:mr-[4em] min-[1180px]:mr-[3em]">
            <Link
              href="/"
              className="group flex justify-center items-center text-[14px] lg:text-[13px] min-[1180px]:text-[15px] font-semibold text-[white] hover:bg-transparentWhite px-4 py-3 rounded-md text-nowrap"
            >
              Connect with us{" "}
              <i className="group-hover:translate-x-2 transition-all duration-500 fa-solid fa-arrow-right text-sm mx-3"></i>
            </Link>
          </div>
          <div className="flex items-center">
            <button className="nav-icon px-[15px] pt-[13px] pb-[11px] min-[1250px]:px-[20px] min-[1250px]:pt-[17px] min-[1250px]:pb-[15px]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="hidden sm:inline nav-icon px-[16px] min-[1250px]:px-[21px] py-[12px] min-[1250px]:py-[16px] mx-2 rounded-full">
              <i className="fa-regular fa-user"></i>
            </button>
            <button className="relative hidden sm:inline nav-icon px-[14px] min-[1250px]:px-[20px] pt-[12px] min-[1250px]:pt-[18px] pb-[10px] min-[1250px]:pb-[14px] mx-2 rounded-full">
              <i className="fa-regular fa-heart"></i>
              <span className="notify-badge">2</span>
            </button>
            <button className="relative hidden sm:inline nav-icon px-[14px] min-[1250px]:px-[19px] py-[12px] min-[1250px]:py-[16px] mx-2 rounded-full">
              <ShoppingBagOutlinedIcon className="text-[16px]  font-semibold" />
              <span className="notify-badge">0</span>
            </button>
          </div>
        </div>
      </nav>
  )
}

export default ScrollNav
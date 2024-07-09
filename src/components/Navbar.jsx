import logo from "../assets/images/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full">
      <div className="">
        <Link to="/">
        <img src={logo} className="mt-4 ml-[5rem]" alt="" />
        </Link>
        <div className="flex">
          <ul className="flex gap-8 relative bottom-[2rem] left-[30rem] md:gap-[5rem] font-medium">
            <Link to="/">
            <li>
              <a href="">Home</a>
            </li>
            </Link>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Store</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-end relative bottom-[3rem] gap-5 right-[5rem]">
          <button className="bg-[#1DA756] text-white rounded-full p-2">
            <CiSearch />
          </button>
          <Link to="cart">
            <button className="bg-[#1DA756] text-white rounded-full p-2">
              <IoCartOutline />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

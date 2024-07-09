import React from "react";
import set from "../assets/images/Image.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import logo from "../assets/images/Logo.png";

function Cart() {
  return (
    <>
      {/* <div> */}
      <Navbar />
      <div className="grid grid-cols-2">
        <div className="border border-solid border-1 border-[#f1e6e6] rounded-md mt-6 ml-[5rem] w-[45rem]">
          <div>
            <h2 className="mt-3 ml-9 font-normal text-2xl">Shopping Cart</h2>
          </div>
          <div>
            <div className="grid grid-cols-3">
              <div>
                <img src={set} className="ml-[2rem] mt-[2rem]" alt="" />
              </div>
              <div className="relative right-[6rem] top-10">
                <h2 className="font-semibold">iMac Pro 2024 Gaming Monitor</h2>
                <h3 className="font-medium mt-1">
                  Color: <span className="text-[#7e7a7a]">White</span>
                </h3>
                <p className="mt-1">$120</p>
              </div>
              <div>
                <RiDeleteBin6Line className="text-red-400 w-5 h-6 ml-[13rem] mt-11" />
                <button className="flex ml-[8rem] mt-3 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                  <RiSubtractFill className="mt-1" />
                  <span>03</span>
                  <IoIosAdd className="mt-1" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <img src={set} className="ml-[2rem] mt-[2rem]" alt="" />
              </div>
              <div className="relative right-[6rem] top-10">
                <h2 className="font-semibold">iMac Pro 2024 Gaming Monitor</h2>
                <h3 className="font-medium mt-1">
                  Color: <span className="text-[#7e7a7a]">White</span>
                </h3>
                <p className="mt-1">$120</p>
              </div>
              <div>
                <RiDeleteBin6Line className="text-red-400 w-5 h-6 ml-[13rem] mt-11" />
                <button className="flex ml-[8rem] mt-3 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                  <RiSubtractFill className="mt-1" />
                  <span>03</span>
                  <IoIosAdd className="mt-1" />
                </button>
              </div>
            </div>
          </div>
          <Link to="/">
            <div className="flex mt-8 mb-7 gap-4 ml-[2rem] text-[#312F41]">
              <FaArrowLeft className="mt-1" />
              <h3 className="uppercase ]">Continue shopping</h3>
            </div>
          </Link>
        </div>
        <div className="border border-solid border-1 border-[#f1e6e6] rounded-md mt-6 ml-[9rem] mr-[5rem]">
          <div>
            <h2 className="ml-[2rem] font-semibold text-2xl mt-3">
              Cart Totals
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <div className="ml-[2rem] mt-3 font-normal text-xl text-[#5F6C72]">
                <h3>Sub-total (4)</h3>
                <h3 className="mt-2">Shipping</h3>
                <h3 className="mt-2">Discount</h3>
                <h3 className="mt-2">Tax</h3>
              </div>
              <div className="ml-[10rem] mt-3 text-xl mb-4">
                <p>$1400</p>
                <p className="mt-2 ml-4">Free</p>
                <p className="mt-2 ml-10">0</p>
                <p className="mt-2 ml-5">$40</p>
              </div>
            </div>
            <div className="px-9">
              <hr />
            </div>
            <div className="grid grid-cols-2 ml-[2rem] mt-4 text-xl">
              <h2 className="font-medium">Total</h2>
              <p className="font-semibold ml-[9rem]">$1440</p>
            </div>
          </div>
          <Link to="/pay">
            <div className="bg-[#1DA756] text-white text-center mt-3 ml-[2rem] mr-[2rem] rounded-sm mb-5">
              <button className="mt-3 font-semibold uppercase text-xl">
                Proceed to Checkout{" "}
              </button>
              <FaArrowRight className="relative left-[20rem] bottom-5 w-9 " />
            </div>
          </Link>
        </div>
      </div>

      <div className="bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default Cart;
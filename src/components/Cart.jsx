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
import laptop from "../assets/images/Macbook.png";
import iphone from "../assets/images/Iphone.png";
import ipad from "../assets/images/Ipad.png";
import imac from "../assets/images/Imac.png";
import imac1 from "../assets/images/Imac (1).png"
import airpod from "../assets/images/airpod pro.png"
import projector from "../assets/images/projector.png"
import jbl from "../assets/images/jbl.png"
// import logo from "../assets/images/Logo.png";

function Cart() {
  return (
    <>
      {/* <div> */}
      <Navbar />
      <div className="md:grid grid-cols-2">
        <div className="border border-solid border-1 border-[#f1e6e6] rounded-md mt-6 ml-1 md:ml-[5rem] md:w-[45rem]">
          <div>
            <h2 className="mt-3 ml-9 font-normal text-2xl">Shopping Cart</h2>
          </div>
          <div>
            <div className="grid grid-cols-3">
              <div>
                <img src={set} className="md:ml-[2rem] mt-[2rem]" alt="" />
              </div>
              <div className="relative right-[6rem] top-10">
                <h2 className="md:font-semibold ml-[3rem] md:ml-0 w-[10rem] md:w-[18rem]">iMac Pro 2024 Gaming Monitor</h2>
                <h3 className="font-medium mt-1 ml-[3rem] md:ml-0 w-[6rem]">
                  Color: <span className="text-[#7e7a7a]">White</span>
                </h3>
                <p className="mt-1 ml-[3rem] md:ml-0">$120</p>
              </div>
              <div>
                <RiDeleteBin6Line className="text-red-400 w-5 h-6 ml-[6rem] md:ml-[13rem] mt-11" />
                <button className="flex ml-4 md:ml-[8rem] mt-3 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                  <RiSubtractFill className="mt-1" />
                  <span>03</span>
                  <IoIosAdd className="mt-1" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <img src={set} className="md:ml-[2rem] mt-[2rem]" alt="" />
              </div>
              <div className="relative right-[6rem] top-10">
                <h2 className=" md:font-semibold ml-[3rem] md:ml-0 w-[10rem] md:w-[18rem]">iMac Pro 2024 Gaming Monitor</h2>
                <h3 className="font-medium mt-1 ml-[3rem] md:ml-0 w-[6rem]">
                  Color: <span className="text-[#7e7a7a]">White</span>
                </h3>
                <p className="mt-1 ml-[3rem] md:ml-0">$120</p>
              </div>
              <div>
                <RiDeleteBin6Line className="text-red-400 w-5 h-6 ml-[6rem] md:ml-[13rem] mt-11" />
                <button className="flex ml-4 md:ml-[8rem] mt-3 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
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
        <div className="border border-solid border-1 border-[#f1e6e6] rounded-md mt-6 ml-1 md:ml-[9rem] mr-1 md:mr-[5rem]">
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
              <div className=" ml-[7rem] md:ml-[10rem] mt-3 text-xl mb-4">
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
              <p className="font-semibold ml-[6rem] md:ml-[9rem]">$1440</p>
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

        <div className="md:flex gap-[80rem] mt-8">
            <h2 className="ml-[7rem] font-bold text-xl">Recently viewed</h2>
            <p className="hidden md:block text-xl">View all</p>
        </div>

        <div className=" md:grid grid-cols-4 ml-[5rem] mt-10">
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={laptop} className="" alt="" />
                        <h2 className="font-bold text-md">MacBook Air 2024</h2>
                        <div className="flex">
                            <p className="mt-5 font-medium text-lg">$1800.99</p>
                            <button className="flex ml-[4rem] mt-4 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                            <RiSubtractFill className="mt-1" />
                            <span>02</span>
                            <IoIosAdd className="mt-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <button className="bg-[#1DA756] text-white px-4 py-1 rounded-sm">Add to cart</button>
                            <button className="border-[#1DA756] text-[#1DA756] px-5 py-1 rounded-sm border-2 mr-3">Details</button>
                        </div>
                    </div>
                </div>
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={iphone} className="" alt="" />
                        <h2 className="font-bold text-md">Iphone 14 Pro</h2>
                        <div className="flex">
                            <p className="mt-5 font-medium text-lg">$900.99</p>
                            <button className="flex ml-[4rem] mt-4 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                            <RiSubtractFill className="mt-1" />
                            <span>02</span>
                            <IoIosAdd className="mt-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <button className="bg-[#1DA756] text-white px-4 py-1 rounded-sm">Add to cart</button>
                            <button className="border-[#1DA756] text-[#1DA756] px-5 py-1 rounded-sm border-2 mr-3">Details</button>
                        </div>
                    </div>
                </div>
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={ipad} className="" alt="" />
                        <h2 className="font-bold text-md">Ipad pro 2023</h2>
                        <div className="flex">
                            <p className="mt-5 font-medium text-lg">$3100.99</p>
                            <button className="flex ml-[4rem] mt-4 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                            <RiSubtractFill className="mt-1" />
                            <span>02</span>
                            <IoIosAdd className="mt-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <button className="bg-[#1DA756] text-white px-4 py-1 rounded-sm">Add to cart</button>
                            <button className="border-[#1DA756] text-[#1DA756] px-5 py-1 rounded-sm border-2 mr-3">Details</button>
                        </div>
                    </div>
                </div>
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={imac} className="" alt="" />
                        <h2 className="font-bold text-md">iMac Air 2024</h2>
                        <div className="flex">
                            <p className="mt-5 font-medium text-lg">$1700</p>
                            <button className="flex ml-[4rem] mt-4 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                            <RiSubtractFill className="mt-1" />
                            <span>02</span>
                            <IoIosAdd className="mt-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <button className="bg-[#1DA756] text-white px-4 py-1 rounded-sm">Add to cart</button>
                            <button className="border-[#1DA756] text-[#1DA756] px-5 py-1 rounded-sm border-2 mr-3">Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:flex gap-[78rem] mt-8">
                <h2 className="ml-[7rem] font-bold text-xl">Recommended for you</h2>
                <p className="hidden md:block text-xl">View all</p>
            </div>

            <div className=" md:grid grid-cols-4 ml-[5rem] mt-10">
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={imac1} className="" alt="" />
                        <h2 className="font-bold text-md">Oraimo Boom Box</h2>
                        <div className="flex">
                            <p className="mt-5 font-medium text-lg">$1700</p>
                            <button className="flex ml-[4rem] mt-4 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                            <RiSubtractFill className="mt-1" />
                            <span>02</span>
                            <IoIosAdd className="mt-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <button className="bg-[#1DA756] text-white px-4 py-1 rounded-sm">Add to cart</button>
                            <button className="border-[#1DA756] text-[#1DA756] px-5 py-1 rounded-sm border-2 mr-3">Details</button>
                        </div>
                    </div>
                </div>
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={airpod} className="" alt="" />
                        <h2 className="font-bold text-md">Airpod Pro</h2>
                        <div className="flex">
                            <p className="mt-5 font-medium text-lg">$1700</p>
                            <button className="flex ml-[4rem] mt-4 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                            <RiSubtractFill className="mt-1" />
                            <span>02</span>
                            <IoIosAdd className="mt-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <button className="bg-[#1DA756] text-white px-4 py-1 rounded-sm">Add to cart</button>
                            <button className="border-[#1DA756] text-[#1DA756] px-5 py-1 rounded-sm border-2 mr-3">Details</button>
                        </div>
                    </div>
                </div>
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={projector} className="" alt="" />
                        <h2 className="font-bold text-md">Mini Projector</h2>
                        <div className="flex">
                            <p className="mt-5 font-medium text-lg">$600</p>
                            <button className="flex ml-[4rem] mt-4 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                            <RiSubtractFill className="mt-1" />
                            <span>02</span>
                            <IoIosAdd className="mt-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <button className="bg-[#1DA756] text-white px-4 py-1 rounded-sm">Add to cart</button>
                            <button className="border-[#1DA756] text-[#1DA756] px-5 py-1 rounded-sm border-2 mr-3">Details</button>
                        </div>
                    </div>
                </div>
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={jbl} className="" alt="" />
                        <h2 className="font-bold text-md">MacBook Air 2024</h2>
                        <div className="flex">
                            <p className="mt-5 font-medium text-lg">$1700</p>
                            <button className="flex ml-[4rem] mt-4 gap-4 border border-solid border-[0.87px] border-[#E4E7E9] px-2 py-1 rounded-md">
                            <RiSubtractFill className="mt-1" />
                            <span>02</span>
                            <IoIosAdd className="mt-1" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-5 mt-4 mb-4">
                            <button className="bg-[#1DA756] text-white px-4 py-1 rounded-sm">Add to cart</button>
                            <button className="border-[#1DA756] text-[#1DA756] px-5 py-1 rounded-sm border-2 mr-3">Details</button>
                        </div>
                    </div>
                </div>
            </div>
      

      <div className="bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default Cart;

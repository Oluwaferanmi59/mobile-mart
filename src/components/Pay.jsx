import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import tvs from "../assets/images/Pixel.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Pay() {
  return (
    <>
      <div>
        <Navbar />
        <div className="md:grid grid-cols-2 gap-9">
          <div className="hidden md:block border border-solid border-1 border-[#f1e6e6] rounded-md mt-6 ml-[10rem] mb-[8rem]">
            <div>
              <h2 className="font-bold text-xl ml-[2rem] mt-5">
                Order Summary
              </h2>
            </div>
            <div>
              <div className="grid grid-cols-3 mt-4">
                <div className="ml-[2rem]">
                  <img src={tvs} alt="" />
                </div>
                <div className="relative right-[6rem]">
                  <h2 className="font-semibold text-xl ml-8 w-[14rem]">
                    iMac Pro 2024 Gaming <br />
                    Monitor 4k Display
                  </h2>
                </div>
                <div>
                  <p className="ml-[5rem] mt-4 font-medium text-xl w-[10rem]">
                    1 x <span className="text-[#1DA756] ">$650</span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-4">
                <div className="ml-[2rem]">
                  <img src={tvs} alt="" />
                </div>
                <div className="relative right-[6rem]">
                  <h2 className="font-semibold text-xl ml-8 w-[14rem]">
                    iMac Pro 2024 Gaming <br />
                    Monitor 4k Display
                  </h2>
                </div>
                <div>
                  <p className="ml-[5rem] mt-4 font-medium text-xl w-[10rem]">
                    1 x <span className="text-[#1DA756] ">$650</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-solid border-1 border-[#f1e6e6] rounded-md mt-6 ml-[1rem] mr-[1rem] mb-6">
              <div>
                <div className="grid grid-cols-2">
                  <div className="ml-[2rem] mt-3 font-normal text-xl text-[#5F6C72]">
                    <h3>Sub-total (4)</h3>
                    <h3 className="mt-2">Shipping</h3>
                    <h3 className="mt-2">Discount</h3>
                    <h3 className="mt-2">Tax</h3>
                  </div>
                  <div className="ml-[2rem] mt-3 text-xl ml-[10rem] mb-4">
                    <p>$1400</p>
                    <p className="mt-2 ml-4">Free</p>
                    <p className="mt-2 ml-10">0</p>
                    <p className="mt-2 ml-5">$40</p>
                  </div>
                </div>
              </div>
              <div className="px-9">
                <hr />
              </div>
              <div className="grid grid-cols-2 ml-[2rem] mt-4 text-xl">
                <h2 className="font-medium">Total</h2>
                <p className="font-semibold ml-[9rem]">$1440</p>
              </div>
              <Link to="/">
                <div className="bg-[#1DA756] text-white text-center mt-5 ml-[2rem] mr-[2rem] rounded-sm mb-5">
                  <button className="mt-3 font-semibold uppercase text-xl">
                    Continue shopping
                  </button>
                  <FaArrowRight className="relative left-[26rem] bottom-5 w-9 " />
                </div>
              </Link>
            </div>
          </div>
          <div className="border border-solid border-1 border-[#f1e6e6] rounded-lg mt-6 ml-[0rem] md:mr-[15rem] w-[37rem]">
            <div className="ml-[2rem] mt-7">
              <div>
                <h2 className="font-bold text-2xl">Pay with Card</h2>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    for="username"
                    className="font-medium text-[#545454] text-2xl"
                  >
                    Cardholder Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="border bg-gray-200 rounded-md px-[5rem] md:px-[11rem] py-6 mt-4 "
                  />
                </div>
                <div className="mt-4">
                  <label
                    for="username"
                    className="font-medium text-[#545454] text-2xl"
                  >
                    Card Number
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="border bg-gray-200 rounded-md px-[5rem] md:px-[11rem] py-6 mt-4 "
                  />
                </div>
              </div>
              <div className="md:grid grid-cols-2 mt-4">
                <div>
                  <label
                    for="username"
                    className="font-medium text-[#545454] text-2xl"
                  >
                    Expiry date
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="border bg-gray-200 rounded-md w-fit md:w-auto px-0 md:px-7 py-6 mt-4 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="font-medium text-[#545454] text-2xl"
                  >
                    CVV
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="border bg-gray-200 rounded-md w-fit md:w-auto md:ml-0 ml-[0rem] px-0 md:px-9 mr-[5rem] md:mr-0 py-6 mt-4 "
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="border bg-gray-200 rounded-md px-[5rem] md:px-[11rem] py-6 mt-4 "
                />
              </div>
              <div className="bg-[#1DA756] text-white text-center mt-7 mr-[13rem] md:mr-[1rem] rounded-md mb-5">
                <button className="mt-3 font-semibold uppercase text-xl">
                  Pay
                </button>
                <FaArrowRight className="relative left-[12rem] md:left-[19rem] bottom-5 w-9 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bottom-0 ">
        <Footer />
      </div>
    </>
  );
}

export default Pay;

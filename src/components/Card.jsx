import laptop from "../assets/images/Macbook.png";
import { RiSubtractFill } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import iphone from "../assets/images/Iphone.png";
import ipad from "../assets/images/Ipad.png";
import imac from "../assets/images/Imac.png";
import imac1 from "../assets/images/Imac (1).png"
import airpod from "../assets/images/airpod pro.png"
import projector from "../assets/images/projector.png"
import jbl from "../assets/images/jbl.png"
import headphone from "../assets/images/headphone.png"
import ps5 from "../assets/images/ps5.png"
import powerbank from "../assets/images/powerbank.png"
import watch from "../assets/images/smart watch.png"
import watch2 from "../assets/images/smart watch 2.png"

function Card(){
    return(
        <div>
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

            <div className=" md:grid grid-cols-4 ml-[5rem] mt-10">
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={headphone} className="" alt="" />
                        <h2 className="font-bold text-md">Headphone</h2>
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
                        <img src={ps5} className="" alt="" />
                        <h2 className="font-bold text-md">PS5 Controller</h2>
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
                        <img src={powerbank} className="" alt="" />
                        <h2 className="font-bold text-md">Wireless Power Bank</h2>
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
                        <img src={watch} className="" alt="" />
                        <h2 className="font-bold text-md">Smart Watch</h2>
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

            <div className=" md:grid grid-cols-4 ml-[5rem] mt-10">
                <div className="border border-solid border-2 border-[#1DA756] w-[17rem] rounded-md">
                    <div className="ml-4">
                        <img src={watch2} className="" alt="" />
                        <h2 className="font-bold text-md">Smart Watch</h2>
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
        </div>
    )
}

export default Card;
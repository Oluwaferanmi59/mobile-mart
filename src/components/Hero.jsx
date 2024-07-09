
import iphone from "../assets/images/Right Column.png"


function Hero(){
    return(
        <div>
            <div className=" md:grid grid-cols-2 bg-gradient-to-b from-[#FFFFFF] to-[#ecf8f0]">
                <div className="mt-[8rem] ml-[5rem] ">
                    <div className="">
                        <button className="bg-[#e6e3e3] rounded-full px-9 py-4 text-[#1DA756] font-medium text-xl">Find your perfect device</button>
                    </div>
                    <div>
                        <h2 className="font-bold text-5xl mt-10">Explore our store: <br />The <span className="text-[#1DA756]">best deals</span> you can get <br />anywhere</h2>
                    </div>
                    <div className="mt-7">
                        <button className="bg-[#1DA756] text-white rounded-full px-9 py-3 text-xl">Get Started </button>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src={iphone} className="aspect-ratio-w-[35rem] h-[35rem]" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
import iphone from "../assets/images/Right Column.png";

function Hero() {
  return (
    <div>
      <div className=" md:grid md:grid-cols-2 bg-gradient-to-b from-[#FFFFFF] to-[#ecf8f0] flex">
        {/* large screen */}
        <div className="hidden md:block mt-[8rem] ml-[5rem] ">
          <div className="">
            <button className="bg-[#e6e3e3] rounded-full px-9 py-4 text-[#1DA756] font-medium text-xl">
              Find your perfect device
            </button>
          </div>
          <div>
            <h2 className="font-bold text-5xl mt-10">
              Explore our store: <br />
              The <span className="text-[#1DA756]">best deals</span> you can get{" "}
              <br />
              anywhere
            </h2>
          </div>
          <div className="mt-7">
            <button className="bg-[#1DA756] text-white rounded-full px-9 py-3 text-xl">
              Get Started{" "}
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <div>
            <div className="">
              <img
                src={iphone}
                className="md:aspect-ratio-w-[35rem] md:h-[35rem] w-fit h-full flex mx-auto "
                alt=""
              />
            </div>
          </div>
        </div>

        {/* small screen */}

        <div className="md:hidden block">
          <div>
            <div>
              <div className="">
                <img
                  src={iphone}
                  className="md:aspect-ratio-w-[35rem] md:h-[35rem] w-fit h-full flex mx-auto "
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mt-[8rem] md:ml-[5rem] ">
            <div className="">
              <button className=" md:block bg-[#e6e3e3] rounded-full px-7  md:px-9 py-4 text-[#1DA756] font-medium text-sm md:text-xl">
                Find your perfect device
              </button>
            </div>
            <div>
              <h2 className="font-bold text-3xl md:text-5xl mt-10">
                Explore our store: <br />
                The <span className="text-[#1DA756]">best deals</span> you can
                get <br />
                anywhere
              </h2>
            </div>
            <div className="mt-7">
              <button className="bg-[#1DA756] text-white rounded-full px-9 py-3 text-xl">
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

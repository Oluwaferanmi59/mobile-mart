import logo from "../assets/images/Logo.png";
function Footer() {
  return (
    <div>
      <div>
        {/* <div className="grid grid-cols-5 relative top-[9rem] "> */}
        <div className="flex md:justify-between md:mx-48 mb-8 relative top-[9rem] ">
          <div>
            <img src={logo} alt="" />
            <p className="text-[#D9DBE1] text-sm">
              © 2020 Mobile Mart. All rights reserved
            </p>
          </div>

          <div className="flex justify-between px-12 gap-3 md:gap-32">
            <div className="">
              <h2 className="text-[#1DA756] font-semibold text-2xl">Product</h2>
              <ul className="relative top-6 ">
                <li>
                  <a href="">Overview</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Tutorials</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Releases</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-[#1DA756] font-semibold text-2xl">Product</h2>
              <ul className="relative top-6">
                <li>
                  <a href="">Overview</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Tutorials</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Releases</a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="text-[#1DA756] font-semibold text-2xl">Product</h2>
              <ul className="relative top-6">
                <li>
                  <a href="">Overview</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Tutorials</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Releases</a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h2 className="text-[#1DA756] font-semibold text-2xl">Product</h2>
              <ul className="relative top-6">
                <li>
                  <a href="">Overview</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Tutorials</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Releases</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

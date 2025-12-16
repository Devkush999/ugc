import { FaHome } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div>
      <nav>
        <div className="text-white w-100% bg-[#3d344b] flex flex-wrap justify-center gap-2 items-center p-2 text-sm">
          <div className="flex gap-2 items-center cursor-pointer hover:text-red-700">
            <FaHome className="text-orange-500 text-sm" />
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <FaArrowDown />
            <p className="">Skip to main content</p>
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <FaArrowDown />
            <p>Skip to Navigation</p>
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <AiFillSound />
            <p>Screen Reader</p>
            <p className="font-light">|</p>
          </div>
          <p className="cursor-pointer hover:text-red-700">Text Size:</p>
          <div className="flex gap-3">
            <p className="cursor-pointer hover:text-red-700">
              A<sup>-</sup>
            </p>
            <p className="cursor-pointer hover:text-red-700">A</p>
            <p className="cursor-pointer hover:text-red-700">
              A<sup>+</sup>
            </p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <p>Hindi</p>
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <p>Contact Us</p>
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <p>FAQs</p>
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <p>e-Procurement</p>
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <p>Tenders</p>
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <p>Jobs</p>
            <p className="font-light">|</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-red-700">
            <FaSearch className="text-xs" />
            <p className="font-light">|</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";


function Offices() {
  return (
    <div>
      <div className="bg-[url(/KeyInitiatives-Img/services2.jpg)] w-100% p-15">
        <p className="text-orange-700 ml-29 text-sm p-2">Home / UGC_Offices</p>
        <h1 className="text-white text-4xl ml-30">UGC_Offices</h1>
        <p className="text-[#ddd] text-xl ml-30 mt-2">
          University Grants Commission
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly p-25">
        <div>
        <h1 className="text-4xl text-[#ff6c3a]">UGC Offices</h1>
        <div>
        <h1 className="p-1 bg-[#ececec]">University Grants Commission (UGC) - Head Office</h1>
        </div>
        </div>
        <div>
        <div className="w-65 h-1.5 bg-[#ff6c3c]"></div>
        <div className="shadow p-5 h-85 w-65">
          <span className="text-[#525e61]">ABOUT</span>{" "}
          <span className="text-[#525e61]">UGC</span>
          <div className="mt-4">
            <ul>
              <li className="p-1 flex items-center gap-1 text-sm text-[#2e2b42] hover:text-[#ff6c3a] cursor-pointer">
                <FaArrowCircleRight className="text-amber-600 text-sm" />
                Genesis
              </li>
              <hr />
              <li className="p-1 flex items-center gap-1 text-sm text-[#2e2b42] hover:text-[#ff6c3a] cursor-pointer">
                <FaArrowCircleRight className="text-amber-600 text-sm" />
                Mandate
              </li>
              <hr />
              <li className="p-1 flex items-center gap-1 text-sm text-[#2e2b42] hover:text-[#ff6c3a] cursor-pointer">
                <FaArrowCircleRight className="text-amber-600 text-sm" />
                UGC ACT 1956
              </li>
              <hr />
              <li className="p-1 flex items-center gap-1 text-sm text-[#2e2b42] hover:text-[#ff6c3a] cursor-pointer">
                <FaArrowCircleRight className="text-amber-600 text-sm" />
                Logo
              </li>
              <hr />
              <li className="p-1 flex items-center gap-1 text-sm text-[#2e2b42] hover:text-[#ff6c3a] cursor-pointer">
                <FaArrowCircleRight className="text-amber-600 text-sm" />
                Bureaus
              </li>
              <hr />
              <li className="p-1 flex items-center gap-1 text-sm text-[#2e2b42] hover:text-[#ff6c3a] cursor-pointer">
                <FaArrowCircleRight className="text-amber-600 text-sm" />
                UGC Offices
              </li>
              <hr />
              <li className="p-1 flex items-center gap-1 text-sm text-[#2e2b42] hover:text-[#ff6c3a] cursor-pointer">
                <FaArrowCircleRight className="text-amber-600 text-sm" />
                Inter University Centres
              </li>
              <hr />
              <li className="p-1 flex items-center gap-1 text-sm text-[#2e2b42] hover:text-[#ff6c3a] cursor-pointer">
                <FaArrowCircleRight className="text-amber-600 text-sm" />
                National Facilities
              </li>
              <hr />
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Offices;

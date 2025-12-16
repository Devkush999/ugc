import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

function UGCAct() {
  return (
    <div>
      <div className="bg-[url(/KeyInitiatives-Img/services2.jpg)] w-100% p-15">
        <p className="text-orange-700 ml-29 text-sm p-2">Home / </p>
        <h1 className="text-white text-4xl ml-30">UGC ACT 1956</h1>
        <p className="text-[#ddd] text-xl ml-30 mt-2">
          University Grants Commission
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly p-25">
        <div>
          <h1 className="text-3xl text-[#ff6c3a]">UGC ACT 1956</h1>
          <div className="flex gap-2">
            <p>
              The University Grants Commission Act And Rules & Regulations Under
              The Act, 1956
            </p>
            <img
              src="https://www.ugc.gov.in/Content/images/MainPage/ugc_act.gif"
              alt=""
            />
          </div>
          <p className="w-xl">
            This publication has been printed under the direction and control of
            UGC and the Govt. of India shall not be deemed responsible for the
            material reproduced in this copy of the UGC Act, 1956 and Rules and
            Regulations under the Act, which is strictly meant for official use
            and shall not be used for commercial purpose.
          </p>
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

export default UGCAct;

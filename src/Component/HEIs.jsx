import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

function HEIs() {
  return (
    <>
      <div className="flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a] p-2 group relative z-50">
        <FaBuilding />
        <h1 className="cursor-pointer">HEIs</h1>
        <div className="absolute invisible group-hover:visible w-5xl bg-white text-black -left-180 top-12.5 p-2 flex justify-evenly  opacity-0
            -translate-x
            group-hover:opacity-150
            duration-700">
          <div className="mt-5">
            <h1 className="text-[#ff6c6a]">Universities</h1>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] mt-5 text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Central Universities</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>State Universities</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Deemed to be Universities</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>State Private Universities</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Fake Universities</p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-[#ff6c6a]">Colleges</h1>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] mt-5 text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Colleges (12(B)/2(f))</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Autonomous  Colleges</p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-[#ff6c6a]">Institution</h1>
            <div className="flex items-center gap-0.5 mt-5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Institutions of National Importance</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Institutions of Eminence</p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-[#ff6c6a]">HEIs Violating Regulations</h1>
            <div className="flex items-center gap-0.5 mt-5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>List of Fake Universities</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>List of HEIs not Following Ph.D Regulations</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>List of HEIs not appointed Ombudsperson</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>List of Defaulter State (Private) Universities</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HEIs;

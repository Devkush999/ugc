import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

function Organization() {
  return (
    <>
      <div className="flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a] p-2 group relative z-50">
        <FaBuilding />
        <h1 className="cursor-pointer">Organization</h1>
        <div className="absolute invisible group-hover:visible w-5xl bg-white text-black -left-50 top-12.5 p-2 flex justify-evenly opacity-0
            -translate-x
            group-hover:opacity-150
            duration-700">
          <div className="p-5">
            <h1 className="text-[#ff6c6a]">Commission</h1>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] mt-5 text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Commission Members</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Commission Decisions</p>
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-[#ff6c6a] ">Administration</h1>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] mt-5 text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Chairman</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Vice Chairman</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Secretary</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Financial Advisor</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Additional Secretaries</p>
            </div>
          </div>
          <div className="mt-15">
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Joint Secretaries</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Deputy Secretaries</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Education Officers</p>
            </div>
            <div className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-1 cursor-pointer">
              <FaLongArrowAltRight />
              <p>Under Secretaries</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organization;

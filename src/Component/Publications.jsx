import React from "react";
import { SiBookstack } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";

function Publications() {
  return (
    <>
      <div className="flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a] p-2 group relative cursor-pointer z-50">
        <SiBookstack />
        <h1 className="cursor-pointer">e-Publications</h1>
        <div className="absolute invisible group-hover:visible w-75 bg-white text-black left-0 top-12.5 p-2 opacity-0
            -translate-x
            group-hover:opacity-150
            duration-700">
          <p className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-2 cursor-pointer">
            <FaLongArrowAltRight />
            e-Books
          </p>
          <hr className="text-gray-300" />
          <p className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-2 cursor-pointer">
            <FaLongArrowAltRight />
            Annual Reports/ Annual Accounts
          </p>
          <hr className="text-gray-300" />
          <p className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-2 cursor-pointer">
            <FaLongArrowAltRight />
            Press Release
          </p>
          <hr className="text-gray-300" />
          <p className="flex items-center gap-0.5 hover:text-[#ff6c6a] text-[#2E2B42] text-sm font-light p-2 cursor-pointer">
            <FaLongArrowAltRight />
            Archives Publications
          </p>
        </div>
      </div>
    </>
  );
}

export default Publications;

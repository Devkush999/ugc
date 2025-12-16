import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

function Mandate() {
  return (
    <div>
      <div className="bg-[url(/KeyInitiatives-Img/services2.jpg)] w-100% p-15">
        <p className="text-orange-700 ml-29 text-sm p-2">Home / Mandate </p>
        <h1 className="text-white text-4xl ml-30">Mandate</h1>
        <p className="text-[#ddd] text-xl ml-30 mt-2">
          University Grants Commission
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly p-25">
        <div>
          <h1 className="text-3xl text-[#ff6c3a]">Mandate</h1>
          <p className="w-3xl text-sm mt-2">
            The UGC has the unique distinction of being the only grant-giving
            agency in the country which has been vested with two
            responsibilities: that of providing funds and that of coordination,
            determination and maintenance of standards in institutions of higher
            education.
          </p>
          <h2 className="mt-5 text-lg font-semibold text-[#2e2b42]">
            The UGC`s mandate includes:
          </h2>
          <ul className="text-base text-[#2e2b42] mt-5 w-4xl">
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-sm text-[#ff6c3a]" />
              Promoting and coordinating university education.
            </li>
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-sm text-[#ff6c3a]" />
              Determining and maintaining standards of teaching, examination and
              research in universities.
            </li>
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-sm text-[#ff6c3a]" />
              Framing regulations on minimum standards of education.
            </li>
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-sm text-[#ff6c3a]" />
              Monitoring developments in the field of collegiate and university
              education; disbursing grants to the universities and colleges.
            </li>
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-sm text-[#ff6c3a]" />
              Serving as a vital link between the Union and state governments
              and institutions of higher learning.
            </li>
            <li className="flex items-center gap-1">
              <FaCircleCheck className="text-sm text-[#ff6c3a]" />
              Advising the Central and State governments on the measures
              necessary for improvement of university education.
            </li>
          </ul>
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

export default Mandate;

import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

function Logo() {
  return (
    <div>
      <div className="bg-[url(/KeyInitiatives-Img/services2.jpg)] w-100% p-15">
        <p className="text-orange-700 ml-29 text-sm p-2">Home / </p>
        <h1 className="text-white text-4xl ml-30">Logo</h1>
        <p className="text-[#ddd] text-xl ml-30 mt-2">
          University Grants Commission
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly p-25">
        <img
          src="https://www.ugc.gov.in/Content/images/MainPage/ugc.jpg"
          alt=""
          className="h-70 mt-13"
        />
        <div>
          <h1 className="text-4xl text-[#ff6c3a]">Logo</h1>
          <p className="w-2xl text-sm mt-2">
            It was something that Prime Minister, Shri Atal Bihari Vajpayee,
            said during his speech on the occasion of the initiation of the
            University Grants Commission (UGC) Golden Jubilee Year on 28
            December, 2002 that sparked off the idea of revisiting the old UGC
            logo. In his speech, Shri Vajpayee spoke of the need to take a fresh
            look at the UGC Act, 1956 in the light of the new challenges for the
            education sector emerging in the twenty-first century. He also
            suggested that the Commission could consider changing its name to
            the `University Education Development Commission”. This name truly
            captures the changed role of the UGC in recent years.
          </p>
          <p className="w-2xl text-sm mt-5">
            Traditionally, UGC was entrusted with the task of co-ordination,
            formulation and maintenance of the standards of university
            education. To this end, it engaged itself in, among other things,
            framing regulations on minimum standards of education, determining
            standards of teaching, examination and research in universities,
            monitoring developments in the field of collegiate and university
            education, disbursing grants to universities and colleges and
            setting up common facilities, services and programmes for a group of
            universities in the form of Inter-University Centres.
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

export default Logo;

import { FaAngleRight } from "react-icons/fa";

import FooterImg01 from "/Footer-Img/Footer-img01.png";
import FooterImg02 from "/Footer-Img/Footer-img02.png";
import FooterImg03 from "/Footer-Img/Footer-img03.png";
import FooterImg04 from "/Footer-Img/Footer-img04.png";
import FooterImg05 from "/Footer-Img/Footer-img05.png";
import FooterImg06 from "/Footer-Img/Footer-img06.png";
import FooterImg07 from "/Footer-Img/Footer-img07.png";
import FooterImg08 from "/Footer-Img/Footer-img08.png";
import FooterImg09 from "/Footer-Img/Footer-img09.png";
import FooterImg10 from "/Footer-Img/Footer-img10.png";

function Footer() {
  const footerImages = [
    FooterImg01,
    FooterImg02,
    FooterImg03,
    FooterImg04,
    FooterImg05,
    FooterImg06,
    FooterImg07,
    FooterImg08,
    FooterImg09,
    FooterImg10,
  ];

  return (
    <div>
      {/* ================= MAIN FOOTER ================= */}
      <div className="bg-[#232c3b] w-full mt-5">
        {/* top color bar */}
        <div className="w-full h-1.5 flex">
          <span className="flex-1 bg-[#625575]" />
          <span className="flex-1 bg-[#daa32d]" />
          <span className="flex-1 bg-[#625575]" />
          <span className="flex-1 bg-[#daa32d]" />
        </div>

        {/* content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-10 justify-between">
            {/* -------- Column 1 -------- */}
            <div className="w-full md:w-[30%]">
              <h4 className="text-white font-bold mb-3">
                For UGC Officials
              </h4>

              <div className="flex flex-wrap gap-10 text-sm">
                <ul className="space-y-2 text-[#adafc7]">
                  {["e-Office", "NIC mail", "RTI online", "PG portal"].map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 cursor-pointer hover:text-white"
                      >
                        <FaAngleRight className="text-[#ff6c3a]" />
                        {item}
                      </li>
                    )
                  )}
                </ul>

                <ul className="space-y-2 text-[#adafc7]">
                  {[
                    "Professional Councils",
                    "State Higher Education Councils",
                    "MoE",
                    "AICTE",
                    "National Testing Agency (NTA)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 cursor-pointer hover:text-white"
                    >
                      <FaAngleRight className="text-[#ff6c3a]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* -------- Column 2 -------- */}
            <div className="w-full md:w-[30%]">
              <h4 className="text-white font-bold mb-3">Quick Links</h4>

              <div className="flex flex-wrap gap-10 text-sm">
                <ul className="space-y-2 text-[#adafc7]">
                  {[
                    "Web portal for Fellowship/Scholarship Legacy Cases",
                    "Rashtriya Uchchatar Shiksha Abhiyan",
                    "University Activity Monitoring Portal",
                    "Deemed to be University Portal",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 cursor-pointer hover:text-white"
                    >
                      <FaAngleRight className="text-[#ff6c3a]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="space-y-2 text-[#adafc7]">
                  {[
                    "DEB",
                    "UGC NET Online",
                    "UGC Regulations",
                    "UGC Circulars",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 cursor-pointer hover:text-white"
                    >
                      <FaAngleRight className="text-[#ff6c3a]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* -------- Column 3 -------- */}
            <div className="w-full md:w-[30%]">
              <h4 className="text-white font-bold mb-3">Contact Us</h4>

              <p className="text-[#adafc7] text-sm leading-6">
                University Grants Commission (UGC) <br />
                Bahadur Shah Zafar Marg, <br />
                New Delhi - 110002.
              </p>

              <p className="text-[#adafc7] text-sm mt-3">
                Phone: 011-23604446, 011-23604200
              </p>

              <p className="text-sm mt-3 cursor-pointer hover:text-white text-[#adafc7]">
                Email: contact.ugc@nic.in
              </p>

              <div className="bg-white inline-flex rounded-full overflow-hidden mt-4 text-sm font-bold">
                <span className="px-4 py-1">Total Visitors</span>
                <span className="bg-[#ff6c3a] px-4 py-1 text-white">
                  222682848
                </span>
              </div>
            </div>
          </div>

          {/* -------- Logos Section -------- */}
          <div className="mt-10">
            <hr className="border-gray-600 mb-6" />

            <div className=" flex flex-wrap justify-center ">
              {footerImages.map((img, index) => (
                <div
                  key={index}
                  className="bg-white w-full max-w-[210px] p-2 flex items-center justify-center
                             hover:scale-110 border-2 hover:border-orange-300 transition"
                >
                  <img
                    src={img}
                    alt={`footer-${index}`}
                    className="object-contain max-h-10"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-white text-[#3a354f] text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-4 justify-between items-center">
          <p>Copyright © 2025 UGC New Delhi, India</p>
          <p>Website last updated on: 02-01-2026</p>

          <div className="flex gap-3">
            <a href="/" className="hover:underline">
              Disclaimer
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

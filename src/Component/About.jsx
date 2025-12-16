import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function About() {
  const naviget = useNavigate();
  return (
    <>
      <div className="flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a] p-2 group relative cursor-pointer z-50">
        <FaInfoCircle />
        <h1>About</h1>
        <div
          className="absolute invisible group-hover:visible w-75 bg-white text-black left-0 top-12.5 p-2 opacity-0
            -translate-x
            group-hover:opacity-150
            duration-700"
        >
          <ul className="text-[#2E2B42] text-sm font-light">
            <li
              onClick={() => naviget("/About/genesis")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight /> 
              Genesis
            </li>
            <hr  className="text-gray-300"/>
            <li
              onClick={() => naviget("/About/mandate")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              Mandate
            </li>
            <hr  className="text-gray-300 text-xs"/>
            <li
              onClick={() => naviget("/About/ugcact")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              UGC Act
            </li>
            <hr  className="text-gray-300 text-xs"/>
            <li
              onClick={() => naviget("/About/logo")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              Logo
            </li>
            <hr  className="text-gray-300 text-xs"/>
            <li
              onClick={() => naviget("/About/organisational")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              UGC Organisational Chart
            </li>
            <hr  className="text-gray-300 text-xs"/>
            <li
              onClick={() => naviget("/About/bureaus")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              UGC Bureaus
            </li>
            <hr  className="text-gray-300 text-xs"/>
            <li
              onClick={() => naviget("/About/offices")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              UGC Offices
            </li>
            <hr  className="text-gray-300 text-xs"/>
            <li
              onClick={() => naviget("/About/university")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              Inter University Centres
            </li>
            <hr  className="text-gray-300 text-xs"/>
            <li
              onClick={() => naviget("/About/facilities")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              National Facilities
            </li>
            <hr  className="text-gray-300 text-xs"/>
            <li
              onClick={() => naviget("/About/securityaudit")}
              className="flex items-center p-2 gap-1 hover:text-[#ff6c3a]"
            >
              <FaLongArrowAltRight />
              Website Security Audit Certificate
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;

import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Genesis from "./ComponentsAbout/Genesis";
import Mandate from "./ComponentsAbout/Mandate";
import UGCAct from "./ComponentsAbout/UGCAct";
import Logo from "./ComponentsAbout/Logo";
import Organisational from "./ComponentsAbout/Organisational";
import Bureaus from "./ComponentsAbout/Bureaus";
import Offices from "./ComponentsAbout/Offices";
import University from "./ComponentsAbout/University";
import Facilities from "./ComponentsAbout/Facilities";
import SecurityAudit from "./ComponentsAbout/SecurityAudit";
import Organization from "./Component/Organization";
import KeyInitiatives from "./Component/KeyInitiatives";
import Guidelines from "./Component/Guidelines";
import Regulations from "./Component/Regulations";
import HEIs from "./Component/HEIs";
import FHEIList from "./Component/FHEIList";
import Publications from "./Component/Publications";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
// import { TiCalculator } from "react-icons/ti";
import { FaPencilAlt } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
// import { GiNotebook } from "react-icons/gi";
// import { FaCaretDown } from "react-icons/fa";
import Header from "./Component/Header";
import LogoHeader from "./Component/LogoHeader";
import Footer from "./Component/Footer";
// import { FaLongArrowAltRight } from "react-icons/fa";

function App() {
  return (
    <>
      <div>
        <Header />
        <LogoHeader />
        <BrowserRouter>
          <div className="w-100% bg-[#ff6c3a] text-white p-0.5 items-center font-bold flex justify-center">
            <ul className="flex flex-wrap">
              <Link to="/">
                <li className="p-3 flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a]">
                  <FaHome />
                  Home
                </li>
              </Link>
              <About/>
              <Organization/>
              <Link to="/keyInitiative">
                <li className="p-3 hover:bg-white hover:text-[#ff6c3a] flex items-center gap-1">
                  <FaPencilAlt />
                  KeyInitiative
                </li>
              </Link>
              <Link to="/guidelines">
                <li className="p-3 hover:bg-white hover:text-[#ff6c3a] flex items-center gap-1">
                  <FaInfoCircle />
                  Guidelines
                </li>
              </Link>
              <Link to="/regulations">
                <li className="p-3 hover:bg-white hover:text-[#ff6c3a] flex items-center gap-1">
                  <FaThList className="text-xs" />
                  Regulations
                </li>
              </Link>
              <HEIs/>
              <Link to="/FHEIList">
                <li className="p-3 hover:bg-white hover:text-[#ff6c3a] flex items-center gap-1">
                  <BsBank2 />
                  FHEIList
                </li>
              </Link>
              <Publications/>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/**Drop-Down**/}
            <Route path="/About/genesis" element={<Genesis/>}></Route>
            <Route path="/About/mandate" element={<Mandate/>}></Route>
            <Route path="/About/ugcact" element={<UGCAct/>}></Route>
            <Route path="/About/logo" element={<Logo/>}></Route>
            <Route path="/About/organisational" element={<Organisational/>}></Route>
            <Route path="/About/bureaus" element={<Bureaus/>}></Route>
            <Route path="/About/offices" element={<Offices/>}></Route>
            <Route path="/About/university" element={<University/>}></Route>
            <Route path="/About/facilities" element={<Facilities/>}></Route>
            <Route path="/About/securityaudit" element={<SecurityAudit/>}></Route>
            <Route path="/organization" element={<Organization />}></Route>
            <Route path="/keyInitiative" element={<KeyInitiatives />}></Route>
            <Route path="/guidelines" element={<Guidelines />}></Route>
            <Route path="/regulations" element={<Regulations />}></Route>
            <Route path="/HEIs" element={<HEIs />}></Route>
            <Route path="/FHEIList" element={<FHEIList />}></Route>
            <Route path="/publications" element={<Publications />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <About/> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

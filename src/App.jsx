import React, { Suspense, lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const Home = lazy(() => import("./Component/Home"));
const About = lazy(() => import("./Component/About"));

const Genesis = lazy(() => import("./ComponentsAbout/Genesis"));
const Mandate = lazy(() => import("./ComponentsAbout/Mandate"));
const UGCAct = lazy(() => import("./ComponentsAbout/UGCAct"));
const Logo = lazy(() => import("./ComponentsAbout/Logo"));
const Organisational = lazy(() => import("./ComponentsAbout/Organisational"));
const Bureaus = lazy(() => import("./ComponentsAbout/Bureaus"));
const Offices = lazy(() => import("./ComponentsAbout/Offices"));
const University = lazy(() => import("./ComponentsAbout/University"));
const Facilities = lazy(() => import("./ComponentsAbout/Facilities"));
const SecurityAudit = lazy(() => import("./ComponentsAbout/SecurityAudit"));

const Organization = lazy(() => import("./Component/Organization"));
const KeyInitiatives = lazy(() => import("./Component/KeyInitiatives"));
const Guidelines = lazy(() => import("./Component/Guidelines"));
const Regulations = lazy(() => import("./Component/Regulations"));
const HEIs = lazy(() => import("./Component/HEIs"));
const FHEIList = lazy(() => import("./Component/FHEIList"));
const Publications = lazy(() => import("./Component/Publications"));


import Header from "./Component/Header";
import LogoHeader from "./Component/LogoHeader";
import Footer from "./Component/Footer";


import { FaHome, FaInfoCircle, FaPencilAlt, FaThList } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

function App() {
  return (
    <>
      <Header />
      <LogoHeader />

      <BrowserRouter>
        <div className="w-full bg-[#ff6c3a] text-white p-0.5 font-bold flex justify-center">
          <ul className="flex flex-wrap">
            <Link to="/">
              <li className="p-3 flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a]">
                <FaHome />
                Home
              </li>
            </Link>

            <About />
            <Organization />

            <Link to="/keyInitiative">
              <li className="p-3 flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a]">
                <FaPencilAlt />
                KeyInitiative
              </li>
            </Link>

            <Link to="/guidelines">
              <li className="p-3 flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a]">
                <FaInfoCircle />
                Guidelines
              </li>
            </Link>

            <Link to="/regulations">
              <li className="p-3 flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a]">
                <FaThList className="text-xs" />
                Regulations
              </li>
            </Link>

            <HEIs />

            <Link to="/FHEIList">
              <li className="p-3 flex items-center gap-1 hover:bg-white hover:text-[#ff6c3a]">
                <BsBank2 />
                FHEIList
              </li>
            </Link>

            <Publications />
          </ul>
        </div>

        <Suspense
          fallback={
            <div className="text-center p-10 text-xl font-bold">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Dropdown Routes */}
            <Route path="/About/genesis" element={<Genesis />} />
            <Route path="/About/mandate" element={<Mandate />} />
            <Route path="/About/ugcact" element={<UGCAct />} />
            <Route path="/About/logo" element={<Logo />} />
            <Route path="/About/organisational" element={<Organisational />} />
            <Route path="/About/bureaus" element={<Bureaus />} />
            <Route path="/About/offices" element={<Offices />} />
            <Route path="/About/university" element={<University />} />
            <Route path="/About/facilities" element={<Facilities />} />
            <Route path="/About/securityaudit" element={<SecurityAudit />} />

            {/* Other Pages */}
            <Route path="/organization" element={<Organization />} />
            <Route path="/keyInitiative" element={<KeyInitiatives />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/regulations" element={<Regulations />} />
            <Route path="/HEIs" element={<HEIs />} />
            <Route path="/FHEIList" element={<FHEIList />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;

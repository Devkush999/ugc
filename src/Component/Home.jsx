import Slider01 from "/Heros-Img/video_slider1.mp4";
import Slider02 from "/Heros-Img/main-slider2.png";
import Slider03 from "/Heros-Img/main-slider3.png";
import GovImg from "/Mann ki baat-img.jpg";
import { FaLaptop } from "react-icons/fa";
import { FaRegHandPointUp } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import UGC01 from "/UGC_Equivalence-img01.jpg";
import UGC02 from "/UGC_Equivalence-img02.jpg";
import UGC03 from "/UGC_Equivalence-img03.png";
import UGC04 from "/UGC_Equivalence-img04.png";
import Star01 from "/Stars-Img/Stars-img01.jpg";
import Star02 from "/Stars-Img/Stars-img02.jpg";
import Star03 from "/Stars-Img/Stars-img03.jpg";
import Star04 from "/Stars-Img/Stars-img04.jpg";
import Digital01 from "/Digital-Img/Digital-img01.jpg";
import Digital02 from "/Digital-Img/Digital-img02.jpg";
import Digital03 from "/Digital-Img/Digital-img03.jpg";
import Digital04 from "/Digital-Img/Digital-img04.jpg";
import Digital05 from "/Digital-Img/Digital-img05.png";
import Digital06 from "/Digital-Img/Digital-img06.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="slider-container overflow-hidden">
        <Slider {...settings}>
          <div>
            <video src={Slider01} autoPlay loop muted></video>
          </div>
          <div>
            <img src={Slider02} alt="" />
          </div>
          <div>
            <img src={Slider03} alt="" />
          </div>
        </Slider>
      </div>
      <div className=" text-xl p-3 font-semibold text-[#ff6c3a]">
        <marquee behavior="" direction="">
          <p>
            Establishment of Equal Opportunity Centre and SC/ST Cell in HEIs and
            Submission of Data on Grievance Redressal (Last date extended upto
            07-02-2025) | Invitation of applications from eligible colleges for
            Deemed to be University status, may apply on the portal at
            https://deemed.ugc.ac.in/ | Invitation of applications from eligible
            colleges for conferment/extension of Autonomous status, colleges may
            apply on the portal at https://aucollege.ugc.ac.in
          </p>
        </marquee>
      </div>
      <div className="w-100% ">
        <div className="flex justify-center bg-pink-100 p-2">
          <img src={GovImg} alt="" className="h-35 cursor-pointer" />
        </div>
      </div>
      <div className="m-10  lg:ml-40 ">
        <h3 className="text-3xl font-bold text-gray-600">
          <span className="text-red-700">About </span>University Grants
          Commission
        </h3>
        <p className="text-2sm">
          The University Grants Commission (UGC) came into existence on 28th
          December, 1953 and became a statutory Organization of the Government
          of India by an Act of <br /> Parliament in 1956, for the
          coordination,determination and maintenance of standards of teaching,
          examination and research in university education.
        </p>
      </div>
      <div className="m-10 lg:ml-40">
        <button className=" bg-[#ff6c3a] p-2.5 rounded-4xl text-white text-2sm w-30 cursor-pointer hover:bg-sky-50 hover:text-black">
          Read More
        </button>
      </div>

      <div className=" bg-[url(/elements-dark.jpg)] p-10">
        <div className="flex flex-wrap justify-center gap-3 p-10">
          <div className="w-45 h-35 bg-white rounded-xl">
            <div className=" p-4">
              <FaLaptop className="text-4xl text-[#ff6c3a] mx-auto" />
              <p className="text-center text-gray-600 font-semibold">
                e-Governance <br />
                @UGC
              </p>
            </div>
          </div>
          <div className="w-45 h-35 bg-white rounded-xl">
            <div className=" p-4">
              <FaRegHandPointUp className="text-4xl text-[#ff6c3a] mx-auto" />
              <p className="text-center text-gray-600 font-semibold">
                Key
                <br />
                Initiatives
              </p>
            </div>
          </div>
          <div className="w-45 h-35 bg-white rounded-xl">
            <div className=" p-4">
              <FaGraduationCap className="text-4xl text-[#ff6c3a] mx-auto" />
              <p className="text-center text-gray-600 font-semibold">
                Student
                <br />
                Corner
              </p>
            </div>
          </div>
          <div className="w-45 h-35 bg-white rounded-xl">
            <div className=" p-4">
              <FaUsers className="text-4xl text-[#ff6c3a] mx-auto" />
              <p className="text-center text-gray-600 font-semibold">
                Faculty Corner
                <br />
                Non-Teaching Staff
              </p>
            </div>
          </div>
          <div className="w-45 h-35 bg-white rounded-xl">
            <div className=" p-4">
              <BsBank2 className="text-4xl text-[#ff6c3a] mx-auto" />
              <p className="text-center text-gray-600 font-semibold">
                Details of
                <br />
                HEIs
              </p>
            </div>
          </div>
          <div className="w-45 h-35 bg-white rounded-xl">
            <div className=" p-4">
              <FaGlobeAsia className="text-4xl text-[#ff6c3a] mx-auto" />
              <p className="text-center text-gray-600 font-semibold">
                UGC
                <br />
                Green Initiatives
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[url(/panel-img.jpg)] rounded-2xl ml-30 mr-30">
          <h2 className="text-3xl text-gray-600 font-bold text-center p-5">
            <span className="text-red-500">e-Governance</span>@UGC
          </h2>
          <div className="flex flex-wrap justify-center p-5 gap-8">
            <div className="w-60 h-50 bg-pink-100 rounded-2xl cursor-pointer text-center text-xl font-semibold text-gray-600 p-5 hover:text-red-500">
              <img src={UGC01} alt="" className="w-45 h-20 mx-auto" />
              <p className="mt-5">UGC Equivalence Portal</p>
            </div>
            <div className="w-60 h-50 bg-pink-100 rounded-2xl cursor-pointer text-center text-xl font-semibold text-gray-600 p-5 hover:text-red-500">
              <img src={UGC02} alt="" className="w-45 h-20 mx-auto" />
              <p className="mt-5">UGC Ph.D. Excellence Citation Portal</p>
            </div>
            <div className="w-60 h-50 bg-pink-100 rounded-2xl cursor-pointer text-center text-xl font-semibold text-gray-600 p-5 hover:text-red-500">
              <img src={UGC03} alt="" className="w-45 h-20 mx-auto" />
              <p className="mt-5">UGC FHEI</p>
            </div>
            <div
              className="w-60 h-50 bg-pink-100 rounded-2xl cursor-pointer text-center text-xl font-semibold text-gray-600 p-5 hover:text-red-500"
              text-xl
              font-semibold
              text-gray-600
              p-5
              hover:text-red-500
            >
              <img src={UGC04} alt="" className="w-45 h-20 mx-auto" />
              <p className="mt-5">Malviya Mission</p>
            </div>
          </div>
          <div className="text-center p-5 text-white">
            <button className="mb-5 bg-[#3f495a] p-2 w-28 rounded-4xl cursor-pointer hover:bg-pink-200 hover:text-black">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-3xl font-bold p-5">
        <h2 className="text-gray-600">
          <span className="text-red-500">Star Performer </span>of the Month
        </h2>
      </div>
      <div className="w-100% flex flex-wrap justify-center gap-25 p-5">
        <img
          src={Star01}
          alt=""
          className="w-40 rounded-tl-3xl rounded-br-3xl cursor-pointer  border-2 border-gray-300 hover:shadow-sm shadow-gray-400"
        />
        <img
          src={Star02}
          alt=""
          className="w-40 rounded-tl-3xl rounded-br-3xl cursor-pointer  border-2 border-gray-300 hover:shadow-sm shadow-gray-400"
        />
        <img
          src={Star03}
          alt=""
          className="w-40 rounded-tl-3xl rounded-br-3xl cursor-pointer  border-2 border-gray-300 hover:shadow-sm shadow-gray-400"
        />
        <img
          src={Star04}
          alt=""
          className="w-40 rounded-tl-3xl rounded-br-3xl cursor-pointer  border-2 border-gray-300 hover:shadow-sm shadow-gray-400"
        />
      </div>
      <div className="text-center text-white">
        <button className="mb-5 bg-[#3f495a] p-2 w-28 rounded-4xl cursor-pointer hover:bg-pink-200 hover:text-black">
          View All
        </button>
      </div>

      <div>
        <hr className="text-gray-200" />
        <div className="text-center text-3xl font-bold p-5">
          <h2 className="text-gray-600">
            <span className="text-red-500">Digital </span>Initiatives
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 p-2">
          <img
            src={Digital01}
            alt=""
            className="w-40 h-18 border-2 border-gray-300 hover:shadow-sm shadow-gray-400 cursor-pointer rounded-tl-3xl rounded-br-3xl"
          />
          <img
            src={Digital02}
            alt=""
            className="w-40 h-18 border-2 border-gray-300 hover:shadow-sm shadow-gray-400 cursor-pointer rounded-tl-3xl rounded-br-3xl"
          />
          <img
            src={Digital03}
            alt=""
            className="w-40 h-18 border-2 border-gray-300 hover:shadow-sm shadow-gray-400 cursor-pointer rounded-tl-3xl rounded-br-3xl"
          />
          <img
            src={Digital04}
            alt=""
            className="w-40 h-18 border-2 border-gray-300 hover:shadow-sm shadow-gray-400 cursor-pointer rounded-tl-3xl rounded-br-3xl"
          />
          <img
            src={Digital05}
            alt=""
            className="w-40 h-18 border-2 border-gray-300 hover:shadow-sm shadow-gray-400 cursor-pointer rounded-tl-3xl rounded-br-3xl"
          />
          <img
            src={Digital06}
            alt=""
            className="w-40 h-18 border-2 border-gray-300 hover:shadow-sm shadow-gray-400 cursor-pointer rounded-tl-3xl rounded-br-3xl"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

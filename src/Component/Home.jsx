import Slider01 from "/Heros-Img/video_slider1.mp4";
import Slider02 from "/Heros-Img/main-slider2.png";
import Slider03 from "/Heros-Img/main-slider3.png";
import GovImg from "/Mann ki baat-img.jpg";

import {
  FaLaptop,
  FaRegHandPointUp,
  FaGraduationCap,
  FaUsers,
  FaGlobeAsia,
} from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const cardsData = [
    { icon: FaLaptop, title: "e-Governance @UGC" },
    { icon: FaRegHandPointUp, title: "Key Initiatives" },
    { icon: FaGraduationCap, title: "Student Corner" },
    { icon: FaUsers, title: "Faculty Corner / Non-Teaching Staff" },
    { icon: BsBank2, title: "Details of HEIs" },
    { icon: FaGlobeAsia, title: "UGC Green Initiatives" },
  ];

  const ugcData = [
    { img: UGC01, title: "UGC Equivalence Portal" },
    { img: UGC02, title: "UGC Ph.D. Excellence Citation Portal" },
    { img: UGC03, title: "UGC FHEI" },
    { img: UGC04, title: "Malviya Mission" },
  ];

  const stars = [Star01, Star02, Star03, Star04];

  const digitalImgs = [
    Digital01,
    Digital02,
    Digital03,
    Digital04,
    Digital05,
    Digital06,
  ];

  return (
    <div className="w-full">
      {/* Slider */}
      <div className="slider-container overflow-hidden">
        <Slider {...settings}>
          <div>
            <video
              className="w-full max-h-[500px] object-cover"
              src={Slider01}
              autoPlay
              loop
              muted
            />
          </div>
          <div>
            <img className="w-full object-cover" src={Slider02} alt="slider2" />
          </div>
          <div>
            <img className="w-full object-cover" src={Slider03} alt="slider3" />
          </div>
        </Slider>
      </div>

      {/* Marquee */}
      <div className="text-orange-500 text-sm sm:text-base md:text-lg p-2">
        <marquee>
          Alert: Students/Parents can verify the authenticity of Higher
          Educational Institutions (HEIs) before taking admission (Please check
          under Main Menu Tab (HEIs)) | Invitation of applications from eligible
          colleges for Deemed to be University status, may apply on the portal
          at https://deemed.ugc.ac.in/ | Invitation of applications from
          eligible colleges for conferment/extension of Autonomous status,
          colleges may apply on the portal at https://aucollege.ugc.ac.in
        </marquee>
      </div>

      {/* Government Image */}
      <div className="flex justify-center bg-pink-100 p-5">
        <img
          src={GovImg}
          alt="Gov"
          className="h-20 sm:h-40 md:h-60 cursor-pointer object-contain"
        />
      </div>

      {/* About UGC */}
      <div className="mx-4 sm:mx-10 md:mx-20 my-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-600">
          <span className="text-red-700">About </span>University Grants
          Commission
        </h3>
        <p className="text-sm sm:text-base mt-2 text-gray-700">
          The University Grants Commission (UGC) came into existence on 28th
          December, 1953 and became a statutory Organization of the Government
          of India by an Act of Parliament in 1956, for the coordination,
          determination and maintenance of standards of teaching, examination
          and research in university education.
        </p>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-sky-50 hover:text-black transition">
          Read More
        </button>
      </div>

      {/* Cards */}
      <div className="bg-[#232c3b] p-2">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-5">
            {cardsData.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 text-center hover:shadow-lg transition"
                >
                  <Icon className="text-5xl text-orange-500 mx-auto mb-2" />
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    {card.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* e-Governance UGC */}
        <div className=" bg-cover bg-center p-4 my-10 rounded-xl mx-4 sm:mx-10 md:mx-20">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-400 mb-6">
            <span className="text-red-500">e-Governance</span> @UGC
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ugcData.map((ugc, idx) => (
              <div
                key={idx}
                className="bg-pink-100 rounded-2xl text-center p-4 cursor-pointer hover:text-red-500 transition"
              >
                <img
                  src={ugc.img}
                  alt={`ugc-${idx}`}
                  className="mx-auto h-20 sm:h-40 object-contain mb-2"
                />
                <p className="font-semibold text-gray-700 text-sm sm:text-base">
                  {ugc.title}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className=" bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-pink-200 hover:text-black transition">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Star Performer */}
      <div className="text-center text-2xl sm:text-3xl font-bold my-6 text-gray-700">
        <span className="text-red-500">Star Performer </span>of the Month
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {stars.map((star, idx) => (
          <img
            key={idx}
            src={star}
            alt={`star-${idx}`}
            className="w-32 sm:w-40 rounded-tl-3xl rounded-br-3xl cursor-pointer border-2 border-gray-300 hover:shadow-md transition"
          />
        ))}
      </div>

      {/* Digital Initiatives */}
      <div className="text-center text-2xl sm:text-3xl font-bold my-6 text-gray-700">
        <span className="text-red-500">Digital </span>Initiatives
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {digitalImgs.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`digital-${idx}`}
            className="w-32 sm:w-52 h-16 sm:h-20 cursor-pointer border-2 border-gray-300 rounded-tl-3xl rounded-br-3xl hover:shadow-md transition object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

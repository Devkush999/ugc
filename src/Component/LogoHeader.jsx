import logo from "/Logo-Img/ugc_logo.png";
import G20 from "/Logo-Img/G20_India_Logo.png";
import MHRD from "/Logo-Img/MHRD_logo.png";

function LogoHeader() {
  return (
    <div>
      <div className="w-100% flex flex-wrap items-center justify-evenly lg:gap-80 p-1">
        <img src={logo} alt="" className="cursor-pointer" />
        <div className="flex gap-10">
          <img src={G20} alt="" className="cursor-pointer" />
          <img src={MHRD} alt="" className="h-20 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default LogoHeader;

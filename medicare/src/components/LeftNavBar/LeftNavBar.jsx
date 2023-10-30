import React from "react";
import { useNavigate } from "react-router-dom";
import { RiMentalHealthLine } from "react-icons/ri";
import { BiBed } from "react-icons/bi";
import { FaHospitalAlt } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

function LeftNavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return window.location.pathname === path
      ? "bg-[#f7bbbb]"
      : "bg-[#FFDFDF] hover:bg-[#fdd3d3]";
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-between py-8 bg-slate-100 mx-16 my-4 h-[70vh] rounded-3xl drop-shadow-md font-bold text-lg text-slate-700">
      <div className="flex items-center justify-center gap-4 text-2xl px-8 py-4 rounded-full bg-slate-200">
        <GiLoveInjection className="h-8 w-8" />
        <span>Medicare</span>
      </div>
      <div className="flex flex-col gap-6 mb-[20vh]">
        <div
          onClick={() => navigate("/patients")}
          className={`${isActive(
            "/patients"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
        >
          <RiMentalHealthLine className="h-7 w-7" />
          <span>Patients</span>
        </div>
        <div
          onClick={() => navigate("/wards")}
          className={`${isActive(
            "/wards"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
        >
          <BiBed className="h-7 w-7" />
          <span>Wards</span>
        </div>
        <div
          onClick={() => navigate("/hospital")}
          className={`${isActive(
            "/hospital"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[18vh] py-4 rounded-xl cursor-pointer`}
        >
          <FaHospitalAlt className="h-7 w-7" />
          <span>Hospital</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 px-7">
        <a
          href="https://github.com/shahbazcse/Medicare"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-7 w-7 cursor-pointer text-[#f7bbbb] hover:text-black" />
        </a>
        <a
          href="https://twitter.com/shahbaz_cse"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter className="h-7 w-7 cursor-pointer text-[#f7bbbb] hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/shahbazcse/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-7 w-7 cursor-pointer text-[#f7bbbb] hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}

export default LeftNavBar;

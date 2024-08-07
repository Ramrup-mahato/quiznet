import React from "react";
import ContainerBox from "./ContainerBox";
import logo from "../../assets/image/logo2.png";
import youtube from "../../assets/image/youtube.png";
import facebook from "../../assets/image/Facebook.png";
import instagram from "../../assets/image/Instagram.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-[var(--colW2)] w-full h-full flex justify-center">
      <ContainerBox>
        <div className="w-full flex justify-center gap-16 sm:justify-around flex-col sm:flex-row p-10">
          <div className="">
            <img src={logo} alt="KizoStudy logo..." className="w-[200px]" />
            <div className="pl-10 text-[var(--colW2)]">
              <h3 className="pb-2">Our Service</h3>
              <p className="text-[12px] ">To educate People</p>
              <p className="text-[12px] ">for nepali student</p>
              <p className="text-[12px] ">for Education</p>
            </div>
          </div>
          <div className="pl-10 sm:pl-0 text-[var(--colW2)]">
            <h1 className="pb-5 pt-7">Course</h1>
            <p className="text-[12px] cursor-pointer text-[var(--colB1)] hover:text-blue-500 ">
              प्रवेश प्रियोजना (Entrance Preparation)
            </p>
            <p className="text-[12px] cursor-pointer text-[var(--colB1)] hover:text-blue-500 ">
              लोक सेवा (Lok Sewa - Public Service)
            </p>
            <p className="text-[12px] cursor-pointer text-[var(--colB1)] hover:text-blue-500 ">
              सामान्य ज्ञान (GK - General Knowledge)
            </p>
            <p className="text-[12px] cursor-pointer text-[var(--colB1)] hover:text-blue-500 ">
              इन्जिनियरिङ (Engineering):
            </p>
            <p className="text-[12px] cursor-pointer text-[var(--colB1)] hover:text-blue-500 ">
              सामान्य योग्यता (General Aptitude)
            </p>
            <p className="text-[12px] cursor-pointer text-[var(--colB1)] hover:text-blue-500 ">
              कम्प्युटर (Computer)
            </p>
            <p className="text-[12px] cursor-pointer text-[var(--colB1)] hover:text-blue-500 ">
              ड्राइभिङ लाइसेन्स (Driving Licenses)
            </p>
          </div>
          <div className="pl-10 sm:pl-0 text-[var(--colW2)]">
            <h3 className="pb-5 pt-7">Contact Us</h3>
            <div className="flex gap-2">
              <img
                src={youtube}
                alt="youtube"
                className="w-8 h-8 cursor-pointer"
              />
              <img
                src={instagram}
                alt="youtube"
                className="w-7 h-7 cursor-pointer"
              />
              <img
                src={facebook}
                alt="youtube"
                className="w-7 h-7 cursor-pointer"
              />
            </div>
            <p className="text-[12px] ">Term & condition</p>
            <p className="text-[12px] ">kizoStudy@gmail.com</p>
            <p className="text-[12px] ">connect with us</p>
            <p className="text-[12px] ">
              © 2024 KizoStudy, All rights reserved.
            </p>
          </div>
        </div>
      </ContainerBox>
    </footer>
  );
};

export default Footer;

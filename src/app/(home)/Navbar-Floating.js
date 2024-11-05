import Image from "next/image";
import React from "react";
import Images from "../../../public/assets/image";

const NavbarFloating = () => {
  return (
    <div className="hero-section container max-w-[1230px] w-full mx-auto flex flex-col ">
      <div className="bg-orange-500 text-white w-full flex justify-center items-center rounded-[20px] p-1">
        <div className="flex gap-[100px] items-center p-4">
          <div className="flex flex-col justify-center gap-[14px]">
            <div className="flex">
              <div className="flex items-center w-8 h-8 shrink-0">
                <Image
                  src={Images.HomeLogo}
                  alt="Home-Logo"
                  width={24}
                  height={24}
                />
              </div>
              <h1 className="font-semibold text-[22px]">Rumah</h1>
            </div>
          </div>
          <hr className="border border-[#EDE8F5] h-[60px]" />
          <div className="flex flex-col justify-center gap-[14px]">
            <div className="flex">
              <div className="flex items-center w-8 h-8 shrink-0">
                <Image
                  src={Images.OfficeLogo}
                  alt="Home-Logo"
                  width={24}
                  height={24}
                />
              </div>
              <h1 className="font-semibold text-[22px]">Kantor</h1>
            </div>
          </div>
          <hr className="border border-[#EDE8F5] h-[60px]" />
          <div className="flex flex-col justify-center gap-[14px]">
            <div className="flex">
              <div className="flex items-center w-8 h-8 shrink-0">
                <Image
                  src={Images.ShopOfficeLogo}
                  alt="Home-Logo"
                  width={24}
                  height={24}
                />
              </div>
              <h1 className="font-semibold text-[22px]">Ruko</h1>
            </div>
          </div>
          <hr className="border border-[#EDE8F5] h-[60px]" />
          <div className="flex flex-col justify-center gap-[14px]">
            <div className="flex">
              <div className="flex items-center w-8 h-8 shrink-0">
                <Image
                  src={Images.ApartementLogo}
                  alt="Home-Logo"
                  width={24}
                  height={24}
                />
              </div>
              <h1 className="font-semibold text-[22px]">Apartemen</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarFloating;

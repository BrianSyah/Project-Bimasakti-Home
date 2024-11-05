import Image from "next/image";
import React from "react";
import Images from "../../../public/assets/image";

const HeroSection = () => {
  return (
    <div className="container py-32 mx-auto flex flex-col justify-between lg:flex-row items-center">
      <div className="mb-8 lg:mb-0 text-center lg:text-left lg:w-1/2">
        <h1 className="text-orange-600 text-4xl font-bold ">
          Jasa layanan Rumah Terbaik
        </h1>
        <h1 className="text-blue-800 text-4xl font-bold ">
          Hadir Di Depan Pintu Anda
        </h1>
        <p className="text-gray-600 mt-4">
          Dari masalah pipa ledeng hingga penataan taman, dari <br /> masalah
          kelistrikan hingga laundry cuci setrika, dari <br />
          perawatan hewan peliharaan hingga layanan internet. <br /> Ada
          BIMASAKTI Home!
        </p>
        <div class="flex flex-wrap justify-center lg:justify-start space-x-2">
          <button class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition">
            Layanan Lengkap
          </button>
          <button class="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition">
            Promo Diskon Bulan Ini
          </button>
        </div>
        <div class="mt-4">
          <button class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Pesan Sekarang
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src={Images.backgroundHero}
          alt="Hero-Section"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};

export default HeroSection;

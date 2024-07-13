import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image src="/assets/images/logo-white.png" alt="Logo" width={400} height={400} />
      <p className="text-8xl text-white-100 font-semibold">SuiMate</p>
    </div>
  );
};

export default Hero;

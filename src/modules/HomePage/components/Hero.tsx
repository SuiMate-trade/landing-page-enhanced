"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IPropType {
  scrollPosition: number;
}

const Hero = (props: IPropType) => {
  const { scrollPosition } = props;

  const [imageSize, setImageSize] = useState(400);

  // Gradually decrease the size of the image to 40px minimum as the user scrolls down
  useEffect(() => {
    const newSize = 400 - scrollPosition * 1.8;
    setImageSize(newSize < 60 ? 60 : newSize);
  }, [scrollPosition]);

  console.log(scrollPosition);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src="/assets/images/logo-white.png"
        alt="Logo"
        width={imageSize}
        height={imageSize}
        className={`left-[50%] translate-x-[-50%] z-30 ${scrollPosition >= 130 ? "fixed top-[12px]" : "absolute top-[18%]"}`}
      />
      <div className="w-full h-screen relative">
        <p className="text-8xl text-white-100 font-semibold absolute top-[65%] left-[50%] translate-x-[-50%]">
          SuiMate
        </p>
      </div>
    </div>
  );
};

export default Hero;

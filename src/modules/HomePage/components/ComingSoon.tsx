import Image from "next/image";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="z-10 absolute w-[400px] h-[400px] bg-white-100 rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center">
        <p className="text-6xl text-black-100 font-semibold">Coming Soon!</p>
      </div>
      <Image src="/assets/images/big-bg.png" alt="Bg" layout="fill" objectFit="cover" className="absolute top-0 bottom-0 left-0 right-0 opacity-20 z-0" />
    </div>
  );
};

export default ComingSoon;

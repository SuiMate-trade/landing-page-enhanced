'use client'

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import About from "./components/About";
import ComingSoon from "./components/ComingSoon";
import Hero from "./components/Hero";

const HomePageModule = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Header />
      <Hero scrollPosition={scrollPosition} />
      <About />
      <ComingSoon />
    </div>
  );
};

export default HomePageModule;

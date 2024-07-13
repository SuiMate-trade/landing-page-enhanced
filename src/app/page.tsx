import HomePageModule from "@/modules/HomePage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SuiMate - The best f*cking platform for Social Trading",
  description:
    "A social media platform where we talk about DeFi, comment DeFi, like DeFi and tip DeFi. OnlyFans for the f*cking crypto nerds",
  applicationName: "SuiMate",
  authors: {
    name: "Harsh Kumar Jha",
    url: "https://x.com/defi_or_defuck",
  },
  icons: [
    {
      rel: "icon",
      url: "https://www.suimate.trade/assets/images/logo-box.png",
    },
    {
      rel: "apple-touch-icon",
      url: "https://www.suimate.trade/assets/images/logo-box.png",
    },
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@defi_or_defuck",
    images: "https://www.suimate.trade/assets/images/logo-box.png",
    title: "SuiMate",
    description:
      "A platform to analyze and get insights on all on-chain activity in the Sui DeFi space",
  },
};

const HomePage = () => {
  return <HomePageModule />;
};

export default HomePage;

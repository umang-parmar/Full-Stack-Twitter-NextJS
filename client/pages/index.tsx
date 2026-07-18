import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { BiHash, BiHomeCircle, BiLogoTwitter, BiMoney, BiUnderline, BiUser } from "react-icons/bi"
import React from "react";
import { BsBack, BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import FeedCard from "@/components/Feedcard";
import { SiOutline } from "react-icons/si";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
     title : "Explore",
     icon: <BiHash/>
  },
  {
     title : "Notifications",
     icon: <BsBell/>
  },
  {
     title : "Messages",
     icon: <BsEnvelope/>
  },
  {
     title : "Bookmarks",
     icon: <BsBookmark/>
  },
  {
     title : "Twitter Blue",
     icon: <BiMoney/>
  },
  {
     title : "Profile",
     icon: <BiUser/>
  },       
  {
     title : "More Options",
     icon: <SiOutline/>
  },
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8">
          <div className="text-4xl h-fit w-fit p-4 hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
            <BiLogoTwitter />
          </div>
          <div className="mt-4 text-2xl pr-4 font-semibold">
            <ul>
              {sidebarMenuItems.map(i =>
                <li 
                 className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                 key={i.title}
                >
                  <span>{i.icon}</span>
                  <span>{i.title}</span>
                </li>)}
            </ul>
            <div className=" mt-5 pr-20">
              <button className="bg-[#1d9bf0] text-lg p-4 rounded-full w-full">
               Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-l-2 border-r-2 h-screen overflow-scroll border-gray-500 ">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}

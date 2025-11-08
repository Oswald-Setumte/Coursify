import React, { ReactNode } from "react";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import {
  LayoutGrid,
  MailOpen,
  SquareCheck,
  CalendarDays,
  CirclePlay,
  SquareUserRound,
  GraduationCap,
  CircleDollarSign,
  LogOut,
  Search,
} from "lucide-react";
import { Link, Route } from "react-router";
import Searchbar from "./Searchbar";


type LayoutProps = {
  children: ReactNode;
  title: string;
  user: string;
};

export default function Layout({ children, title, user }: LayoutProps) {
  const Routes = [
    {
      id: 1,
      route: "Dashboard",
      icon: <LayoutGrid size={20} />,
      to: "/Dashboard",
    },
    {
      id: 2,
      route: "Messages",
      icon: <MailOpen size={20} />,
      to: "/Messages",
    },
    {
      id: 2,
      route: "Calendar",
      icon: <CalendarDays size={20} />,
      to: "/Calendar",
    },
    {
      id: 2,
      route: "Enrollments",
      icon: <SquareCheck size={20} />,
      to: "/Enrollements",
    },
    {
      id: 2,
      route: "Courses",
      icon: <CirclePlay size={20} />,
      to: "/Courser",
    },
    {
      id: 2,
      route: "Instructors",
      icon: <SquareUserRound size={20} />,
      to: "/Instructors",
    },
    {
      id: 2,
      route: "Students",
      icon: <GraduationCap size={20} />,
      to: "/Students",
    },
    {
      id: 2,
      route: "Financials",
      icon: <CircleDollarSign size={20} />,
      to: "/Messages",
    },
  ];

  return (
    <div className="h-screen">
      {/* Body of the LayOut*/}
      <div className="flex font-medium justify-center h-screen gap-4 bg-blue-200/30">
        {/* SideBard */}
        <div className="bg-white flex flex-col items-center lg:w-[250px]">
          {/* Logo */}
          <div className="flex items-center gap-2 p-4 w-full">
            <div>
              <img src={Logo} alt="Logo" className="w-10" />
            </div>
            <p className="font-bold text-2xl">Coursify</p>
          </div>
          {/* Routes */}
          <div className="w-full h-full flex flex-col  ">
            <div className=" flex  flex-2 flex-col  p-4 gap-1 text-gray-500 font-medium">
              {Routes.map((each) => {
                return (
                  <div key={each.id}>
                    <div className="flex items-center pl-4 rounded-[10px] hover:bg-pink-400/20 hover:text-black lg:h-10 lg:gap-2">
                      <div className="">{each.icon}</div>
                      <div>{each.route}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Ads */}
            <div className="w-full grid lg:gap-4 font-medium text-gray-500/90 lg:p-4 ">
              <div className="relative bg-amber-500/50 lg:h-[200px] text-center p-4 rounded-[10px] flex items-center  ">
                <div className="absolute w-30 h-30 bg-pink-300 rounded-full lg:-top-15 lg:left-12 "></div>
                <div className="w-full grid gap-1 mt-10">
                  <div>
                    <h1 className="text-xl text-black lg:mb-2">
                      Upgrade to Pro
                    </h1>
                    <p className="text-[11px]">
                      Unlock Premium features & <br />
                      enchance your LMS experience!
                    </p>
                  </div>

                  <Link to="">
                    <div className="mt-4 rounded-[10px] bg-white lg:h-12 flex items-center justify-center">
                      <p>Upgrade Now</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* SignOut */}
              <div className="flex items-center pl-4 rounded-[10px] bg-gray-400/20 hover:text-black lg:h-10 lg:gap-2">
                <div className="">
                  <LogOut size={20} />
                </div>
                <div>
                  <p>Sign Out</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 border h-screen">
          {/* Navigationa Bar */}
          <div className=" text-gray-400 flex items-center mt-2">
            {/* UserInform */}
            <div>
              <h1 className="text-2xl text-black/90">{title}</h1>
              <p className={`${title !== "Dashboard" ? "hidden" : ""}`}>
                Hello {user}, welcome back!
              </p>
              <p className={`${title == "Dashboard" ? "hidden" : ""}`}>
                <span>Dashboard</span> / {title}
              </p>
            </div>
            {/* Search bar */}
            <div>
              <Searchbar/>
            </div>
            {/* Profile bar */}
            <div></div>
          </div>
          {/* Body Content */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

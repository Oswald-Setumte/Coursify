import { type ReactNode } from "react";

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
  Menu,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router";
import Searchbar from "./Searchbar";
import Profile from "./Profile";
import Notification from "./Notification";
import Setting from "./Setting";

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
      to: "/",
    },
    {
      id: 2,
      route: "Messages",
      icon: <MailOpen size={20} />,
      to: "/Messages",
    },
    {
      id: 3,
      route: "Calendar",
      icon: <CalendarDays size={20} />,
      to: "/Calendar",
    },
    {
      id: 4,
      route: "Enrollments",
      icon: <SquareCheck size={20} />,
      to: "/Enrollments",
    },
    {
      id: 5,
      route: "Courses",
      icon: <CirclePlay size={20} />,
      to: "/Courses",
    },
    {
      id: 6,
      route: "Instructors",
      icon: <SquareUserRound size={20} />,
      to: "/Instructors",
    },
    {
      id: 7,
      route: "Students",
      icon: <GraduationCap size={20} />,
      to: "/Students",
    },
    // {
    //   id: 8,
    //   route: "Financials",
    //   icon: <CircleDollarSign size={20} />,
    //   to: "/Messages",
    // },
  ];
  const Conditions = [
    {
      id: 1,
      text: "Privacy Policy",
      to: "",
    },
    {
      id: 2,
      text: "Term and conditions",
      to: "",
    },
    {
      id: 3,
      text: "Contact",
      to: "",
    },
  ];
  const socials = [
    {
      id: 1,
      icon: <Facebook size={30} />,
      to: "",
    },
    {
      id: 2,
      icon: <Twitter size={30} />,
      to: "",
    },
    {
      id: 3,
      icon: <Instagram size={30} />,
      to: "",
    },
    {
      id: 4,
      icon: <Youtube size={30} />,
      to: "",
    },
    {
      id: 5,
      icon: <Linkedin size={30} />,
      to: "",
    },
  ];

  return (
    <div className="h-screen">
      {/* Body of the LayOut*/}
      <div className="flex font-medium justify-center gap-4 bg-blue-200/30 ">
        {/* SideBard */}
        <div className="bg-white flex flex-col items-center lg:w-[250px] w-18">
          <div className="fixed overflow-y-auto">
            {/* Logo */}
            <div className="flex items-center gap-2 p-4 w-full">
              <div>
                <img src={Logo} alt="Logo" className="w-10" />
              </div>
              <p className="font-bold text-2xl lg:block hidden">Coursify</p>
            </div>
            {/* Routes */}

            {/* Routes */}
            <div className="w-full h-screen flex flex-col  ">
              <div className=" flex  flex-2 flex-col  p-4 gap-1 text-gray-500 font-medium">
                {Routes.map((each) => {
                  return (
                    <Link to={each.to} key={each.id}>
                      <div className="flex items-center lg:pl-4 pl-2.5 rounded-[10px] hover:bg-pink-400/20 hover:text-black h-10 gap-2 cursor-pointer">
                        <div className=" ">{each.icon}</div>
                        <div className="lg:block hidden">{each.route}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              <div className="w-full grid gap-4 font-medium text-gray-500/90 p-4 ">
              {/* Ads */}
                {/* <div className="relative bg-amber-500/50 lg:h-[200px] text-center p-4 rounded-[10px] lg:flex items-center hidden  ">
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
                </div> */}

                {/* SignOut */}
                <div className="flex items-center  lg:pl-4 pl-2 rounded-[10px] bg-gray-400/20 hover:text-black h-10 gap-2">
                  <div className="">
                    <LogOut size={20} />
                  </div>
                  <div className="hidden lg:block">
                    <p>Sign Out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 border pr-4">
          {/* Navigationa Bar */}
          <div className=" text-gray-400 flex items-center md:justify-between justify-around z-9999 w-full">
            {/* UserInform */}
            <div className="space-y-1">
              <h1 className="md:text-2xl text-black/90">{title}</h1>
              <p
                className={`${
                  title == "Dashboard" ? "hidden md:block" : ""
                } md:text-[12px] lg:text-[16px]  ${title != "Dashboard" && "hidden"}`}
              >
                Hello {user}, welcome back!
              </p>
              <p
                className={`${
                  title != "Dashboard" ? "block" : "hidden"
                }  md:text-[12px] lg:text-[16px]`}
              >
                <span className="text-pink-300">Dashboard</span> / {title}
              </p>
            </div>
            <Menu className="md:hidden" size={20} />
            <div className="gap-3 items-center hidden md:flex">
              {/* Search bar */}
              <div>
                <Searchbar />
              </div>
              {/* Profile bar */}
              <div
                className={` flex gap-3 items-center  ${title == "Dashboard" && "bg-white w-107.5 flex items-center  justify-evenly"}`}
              >
                <div>
                  <Profile user={user} />
                </div>
                {/* Notificaition */}
                <div>
                  <Notification />
                </div>
                {/* Settings */}
                <div>
                  <Setting />
                </div>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto overflow-x-auto mx-auto w-full">
            {children}
          </div>

          {/* Footer */}
          <div className="text-xl md:flex justify-between items-center pr-4 block mt-5">
            {/* Copyright */}
            <div>
              <div className="md:flex gap-4 text-gray-400 text-center mb-2  md:mb-0 md:text-lg">
                <p className="mb-2 md:mb-0 text-black/70 ">
                  Copyright {"\u00A9"} 2025 Petedraw
                </p>
                <div className="flex justify-center gap-5 items-center text-[9px] md:text-lg">
                  {Conditions.map((each) => {
                    return (
                      <Link to={each.to} key={each.id}>
                        <p>{each.text}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* social Media handle */}
            <div className="flex space-x-5 justify-center text-gray-400">
              {socials.map((each) => {
                return (
                  <Link to={each.to} key={each.id}>
                    <p>{each.icon}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

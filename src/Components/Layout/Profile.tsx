import React from "react";
import User_Profile from "../../assets/user_profile.webp";
type Props = {
  user: string;
};

export default function Profile({ user }: Props) {
  return (
    <div>
      <div className="flex items-center gap-2" onClick={() => {}}>
        <img
          src={User_Profile}
          alt="User_profile"
          className="w-10.5 rounded-xl "
        /> 
        <div className="hidden lg:block">
          <h1 className="text-black/70 mb-1 md:text-[14px]">{user} Stanton</h1>
          <p className="text-[11px]">Admin</p>
        </div>
      </div>
    </div>
  );
}

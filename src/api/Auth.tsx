import React, { createContext, useState } from "react";
import api from "./api";
import type { Upform } from "../Pages/SignUp";
import type { Inform } from "../Pages/SignIn";

export const Authentication = createContext<any>(null);

export default function Auth({ children }: { children: React.ReactNode }) {
  const [accessTokenRes, setAccessTokenRes] = useState(null);
  const [Instatus, setInStatus] = useState(null);
  const [Upstatus, setUpStatus] = useState(null);
  const [Inmessage, setInmessage] = useState(null);
  const [Upmessage, setUpmessage] = useState(null);
  const [Outmessage, setOutmessage] = useState(null);
  const [user, setUser] = useState({});

  const Register = (data: Upform) => {
    try {
      api
        .post("/auth/register", data)
        .then((res) => {
          console.log(res.data);
          setUser(res.data.user);
          setAccessTokenRes(null);
          setUpStatus(res.data.success);
          setUpmessage(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {}
  };

  const Login = (data: Inform) => {
    try {
      api
        .post("/auth/login", data, {
          headers: {
            Authorization: `Bearer ${accessTokenRes}`,
          },
        })
        .then((res) => {
          if (res.data == "401") {
            try {
              api.post("auth/refresh").then((res) => {
                setAccessTokenRes(res.data.access);
              });
            } catch (err) {}
          }
          console.log(res.data);
          setInStatus(res.data.success);
          setInmessage(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {}
  };

  const Logout = () => {
    try {
      api
        .post("/auth/logout", {
          header: {
            Authentication: `Bearer ${accessTokenRes}`,
          },
        })
        .then((res) => {
          setOutmessage(res.data);
        });
    } catch (err) {}
  };
  return (
    <Authentication.Provider
      value={{
        Login,
        Register,
        Logout,
        user,
        Outmessage,
        Upstatus,
        Instatus,
        Upmessage,
        Inmessage,
      }}
    >
      {children}
    </Authentication.Provider>
  );
}

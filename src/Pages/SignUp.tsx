import google from "../assets/googleIcon.svg";
import signUpImg from "../assets/Frame 1000005142.svg";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import Auth, { Authentication } from "../api/Auth";
import { StatusMessage } from "../Components/StatusMessage";

export interface Upform {
  name: string;
  email: string;
  password: string;
  role: "Student" | "Instrutor";
}

export default function SignUp() {
  const [status, setStatus] = useState();
  const { Register } = useContext(Authentication);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Upform>();

  const onSubmit: SubmitHandler<Upform> = (data) => {
    console.log(data);
    Register(data);
  };

  return (
    <Auth>
      <StatusMessage
        status={{
          type: "info",
          message: "Your dummy account has been created successfully!",
        }}
        onClose={() => null}
        autoClose={300}
      />
      <div className="max-w-screen h-screen flex border items-center justify-center gap-10 px-5">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-[49px] font-bold text-[#424242]">Sign Up</h1>
            <p className="text-[18px] font-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
              cupiditate praesentium non animi,
              <br /> cupiditate praesentium non animi,cupiditate praesentium non
              animi,
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              {/* sign in with google */}
              <div className="h-[50px] shadow cursor-pointer rounded-[5px] shadow-gray-700 flex items-center justify-center space-x-7">
                <img src={google} />
                <p>Sign Up With Google</p>
              </div>

              {/* or */}
              <div className="flex items-center space-x-5 justify-center">
                <div className="w-[137px] h-1 bg-[#320E3BB2] rounded-2xl" />
                <p className="text-[18px]">OR</p>
                <div className="w-[137px] h-1 bg-[#320E3BB2] rounded-2xl" />
              </div>
            </div>

            {/* form */}
            <form className="space-y-5">
              <>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Full Name"
                  className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
                />
                {errors.name && (
                  <small className="bg-red-500">Invaid name</small>
                )}
              </>

              <div>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email Address"
                  className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
                />
                {errors.email && (
                  <small className="text-white bg-red-500 p-1 rounded block mt-1">
                    Invalid email address
                  </small>
                )}
              </div>

              <div>
                <input
                  type="password"
                  {...register("password", { required: true, minLength: 8 })}
                  placeholder="Password"
                  className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
                />
                {errors.password && (
                  <small className="text-white bg-red-500 p-1 rounded block mt-1">
                    Invalid password (min 8 characters)
                  </small>
                )}
              </div>

              <div>
                <select
                  {...register("role", { required: true })}
                  className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
                >
                  <option value="student">Student</option>
                  <option value="instrutor">Instrutor</option>
                </select>

                {errors.role && (
                  <small className="text-white bg-red-500 p-1 rounded block mt-1">
                    Invalid role selection
                  </small>
                )}
              </div>

              <p className="text-[#333333] flex items-center justify-center lg:justify-end">
                Already have an account ?{" "}
                <span className="font-bold text-[14px] cursor-pointer ">
                  Sign Up
                </span>
              </p>
            </form>
          </div>

          <div className="space-y-8">
            {/* Terms */}
            <div className="flex gap-2">
              <input type="checkbox" className="size-5" />
              <p>
                Get tips to help you make the most of your fundraiser and
                receive updates about <br /> important causes. Unsubscribe at
                any time.
              </p>
            </div>

            {/* button */}
            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-[#FFD366] cursor-pointer text-white rounded-[5px] h-[50px] w-full lg:w-[215px]"
            >
              <p>Sign Up</p>
            </button>
          </div>
        </div>

        <img src={signUpImg} className="hidden lg:block" />
      </div>
    </Auth>
  );
}

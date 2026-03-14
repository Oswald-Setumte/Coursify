import google from "../assets/googleIcon.svg";
import signInImg from "../assets/Frame 1000005145.svg";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { Authentication } from "../api/Auth";

export interface Inform {
  email: string;
  password: string;
}

export default function SignIn() {
  const { Login } = useContext(Authentication);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inform>();

  const onSubmit: SubmitHandler<Inform> = (data) => {
    console.log(data);
    Login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-screen h-screen flex border items-center justify-center gap-10 px-5"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-[49px] font-bold text-[#424242]">Sign In</h1>
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
            <div className="h-[50px] shadow rounded-[5px] cursor-pointer shadow-gray-700 flex items-center justify-center space-x-7">
              <img src={google} />
              <p>Sign In With Google</p>
            </div>

            {/* or */}
            <div className="flex items-center space-x-5 justify-center">
              <div className="w-[137px] h-1 bg-[#320E3BB2] rounded-2xl" />
              <p className="text-[18px]">OR</p>
              <div className="w-[137px] h-1 bg-[#320E3BB2] rounded-2xl" />
            </div>
          </div>

          {/* form */}
          <div className="space-y-5">
            <div>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
                className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
              />
              {errors.email && <small></small>}
            </div>

            <div>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
              />
              {errors.password && <small></small>}
            </div>

            <p className="text-[#333333] flex items-center justify-center lg:justify-end">
              Already have an account ?{" "}
              <span className="font-bold text-[14px] cursor-pointer ">
                Sign In
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* button */}
          <button className="bg-[#FFD366] cursor-pointer text-white rounded-[5px] h-[50px] w-full lg:w-[215px]">
            <p>Sign In</p>
          </button>
        </div>
      </div>

      <img src={signInImg} className="hidden lg:block" />
    </form>
  );
}

import google from "../assets/googleIcon.svg";
import ForgotPasswordImg from "../assets/Forgot password-bro 1.svg";
import { useForm } from "react-hook-form";


export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-screen h-screen flex border items-center justify-center gap-10 px-5"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-[49px] font-bold text-[#424242]">
            Forgot your password?
          </h1>
          <p className="text-[18px] font-light">
            Don’t worry, happens to all of us. Enter your email below to recover
            your <br /> password
          </p>
        </div>

        <div className="space-y-8">
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

            <div className="space-y-8">
              {/* button */}
              <button
                type="submit"
                className="bg-[#FFD366] cursor-pointer text-white rounded-[5px] h-[50px] w-full "
              >
                <p>Submit</p>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* or */}
            <div className="flex items-center space-x-5 justify-center">
              <div className="w-[137px] h-1 bg-[#320E3BB2] rounded-2xl" />
              <p className="text-[18px]">OR</p>
              <div className="w-[137px] h-1 bg-[#320E3BB2] rounded-2xl" />
            </div>

            {/* sign in with google */}
            <div className="h-[50px] shadow rounded-[5px] cursor-pointer shadow-gray-700 flex items-center justify-center space-x-7">
              <img src={google} />
              <p>Sign In With Google</p>
            </div>
          </div>
        </div>
      </div>
      <img src={ForgotPasswordImg} className="hidden lg:block" />
    </form>
  );
}

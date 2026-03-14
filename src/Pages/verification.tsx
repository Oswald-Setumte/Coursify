import { useForm } from "react-hook-form";
import VerificaitonImg from "../assets/Enter OTP-cuate 1.svg";

export default function Verification() {
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
          <h1 className="text-[49px] font-bold text-[#424242]">Verify code</h1>
          <p className="text-[18px] font-light">
            An authentication code has been sent to your email.
          </p>
        </div>

        <div className="space-y-8">
          {/* form */}
          <div className="space-y-5 ">
            <div>
              <input
                type="text"
                {...register("code", { required: true })}
                placeholder="Enter Code"
                className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
              />
              {errors.code && <small></small>}
            </div>
            <p className="flex justify-center lg:justify-end text-[#9E9E9E] text-[14px] font-thin">
              Didn’t receive a code?/{" "}
              <span className="font-bold cursor-pointer">Resend</span>
            </p>

            <div className="space-y-8">
              {/* button */}
              <button
                type="submit"
                className="bg-[#FFD366] cursor-pointer text-white rounded-[5px] h-[50px] w-full "
              >
                <p>Verify</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={VerificaitonImg} className="hidden lg:block" />
    </form>
  );
}

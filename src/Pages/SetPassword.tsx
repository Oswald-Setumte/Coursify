import { useForm } from "react-hook-form";
import setPassword from "../assets/Secure data-cuate 1 (3).svg";

export default function SetPassword() {
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
            Set a password
          </h1>
          <p className="text-[18px] font-light">
            Your previous password has been reseted. Please set a new password{" "}
            <br />
            for your account.
          </p>
        </div>

        <div className="space-y-8 ">
          {/* form */}
          <div className="space-y-5">
            <div>
              <input
                type="password"
                {...register("password", { required: true, minLength: 8 })}
                placeholder="Password"
                className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
              />
              {errors.password && <small></small>}
            </div>

            <div>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 8,
                })}
                placeholder="Confrim Password"
                className="h-12 w-full outline-none border border-[#9E9E9E] rounded-[10px] placeholder-[#9E9E9E] pl-5"
              />
              {errors.confirmPassword && <small></small>}
            </div>

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
      <img src={setPassword} className="hidden lg:block" />
    </form>
  );
}

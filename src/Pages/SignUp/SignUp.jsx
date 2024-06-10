import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import LogoSVG from "../../Components/LogoSVG/LogoSVG";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);

  return (
    <>
      <div className="bg-gray-50 p-6 flex justify-center items-center h-screen w-full bg-[url('https://i.postimg.cc/xjwdzZp8/psychedelic-paper-shapes-with-copy-space-1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className=" w-full lg:w-fit relative bg-white shadow-lg overflow-hidden rounded-md lg:grid grid-cols-2 gap-4">
          <div className="absolute left-0 top-0">
            <Link to="/">
              <img
                className="h-8 bg-sky-300 p-2"
                src="https://i.postimg.cc/KY3bWMPv/close.png"
                alt="close"
              />
            </Link>
          </div>
          <div className="bg-white shadow rounded w-full p-10 flex flex-col justify-center ">
            <div className="flex justify-center items-center">
              <LogoSVG height={"100"} width={"100"} />
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-2xl mt-4 font-extrabold leading-6 text-gray-800"
            >
              Register your account.
            </p>
            <p
              tabIndex={0}
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none underline text-sm font-medium leading-none  text-blue-800 cursor-pointer"
              >
                Log in here
              </Link>
            </p>
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400  " />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
              {/* ------------------------
                name Field
            ----------------------------*/}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  className="bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("fullName", {
                    required: true,
                    pattern: /^[a-zA-Z ]+$/i,
                  })}
                />
                {errors.fullName?.type === "required" && (
                  <p role="alert" className="text-error">
                    Full name is required
                  </p>
                )}
              </div>
              {/* ------------------------
                email Field
            ----------------------------*/}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Email
                </label>
                <input
                  className="bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  type="email"
                  id="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i,
                  })}
                />{" "}
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-error">
                    Email is required
                  </p>
                )}
              </div>
              {/* ------------------------
                role Field
            ----------------------------*/}
              <div>
                <label
                  htmlFor="role"
                  id="role"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Role
                </label>
                <select
                  {...register("role", { required: true })}
                  defaultValue="role"
                  className="bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                >
                  <option value="Seller">Seller</option>
                  <option value="Customer">Customer</option>
                </select>
                {errors.role?.type === "required" && (
                  <p role="alert" className="text-error">
                    Role is required
                  </p>
                )}
              </div>

              {/* ------------------------
                passowrd Field
            ----------------------------*/}
              <div>
                <label
                  htmlFor="pass"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Password
                </label>
                <input
                  className=" bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 "
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/i,
                  })}
                />{" "}
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-error">
                    Password is required
                  </p>
                )}
              </div>

              <div className="!mt-4">
                <input
                  type="submit"
                  value="Create your account"
                  className="focus:ring-2 bg-error focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none  border rounded hover:bg-rose-600 py-4 w-full transition-colors duration-300  cursor-pointer"
                />
              </div>
            </form>
          </div>
          <div className="lg:flex justify-center items-center   hidden">
            <img
              src="https://i.postimg.cc/Hnpbnyb0/sign-concept-illustration.png"
              alt="signin-thumbnail"
              className="max-h-[650px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;

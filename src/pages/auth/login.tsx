import PublicRoutes from "@context/PublicRoutes";
import AuthServices from "@services/Auth";
import { FC, ReactElement } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const AuthLogin: FC = (): ReactElement => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    AuthServices.saveUserName(data.name);
    navigate("/quiz", { replace: true });
  };

  return (
    <PublicRoutes>
      <section className="bg-gray-50 h-screen items-center justify-center flex w-full dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center md:px-6 md:py-8 w-full px-6 md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Astronomy Quiz App
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Misal Maulana"
                  />
                  <span className="text-red-500 font-medium">
                    {errors.name && "Harus di isi!"}
                  </span>
                </div>
                <div className="flex items-center justify-between"></div>
                <button
                  type="submit"
                  className="w-full text-blue-400 border-2 border-blue-400 bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Start Quiz
                </button>
              </form>
              <Link to="/">
                <span className="bg-white text-blue-500 mt-6 font-bold rounded-lg">
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PublicRoutes>
  );
};

export default AuthLogin;

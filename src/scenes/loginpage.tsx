import { AuthForm, authFormSchema } from "@/shared/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useAppDispatch } from "@/hooks/storeHook";
import { login } from "@/features/authSlice";

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const dispatch = useAppDispatch();
  const handleFormSubmit = async (data: AuthForm) => {
    setErrorMessage(null);
    const { email, password } = data;
    console.log(data);
    try {
      setErrorMessage(null);
      setLoading(true);
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);

      setLoading(false);
      if (user && user.email)
        dispatch(
          login({
            email: user.email,
            id: user.uid,
            firstname: null,
            lastname: null,

            photoUrl: user.photoURL || null,
          })
        );
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      const errorCode = error.code;
      setErrorMessage(errorCode);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: yupResolver(authFormSchema),
  });

  return (
    <section>
      {errorMessage && (
        <p className="rounded-md bg-red-400 px-3 py-2 text-center text-white"></p>
      )}
      <div className="py-3 text-center text-2xl font-bold leading-tight">
        Welcome back
      </div>
      <div className="mt-3 bg-white sm:rounded-lg">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email address
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  {...register("email")}
                />
                {errors.email ? (
                  <span className="text-red-700">{errors.email.message}</span>
                ) : (
                  <></>
                )}
              </div>
            </label>
          </div>
          <div className="mt-4">
            <label className="undefined block text-sm font-medium text-gray-700">
              Password
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  className="borderfocus:border-indigo-300 mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  {...register("password")}
                />
                {errors.password ? (
                  <span className="text-red-700">
                    {errors.password.message}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </label>
          </div>

          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forgot Password?
          </a>
          <div className="mt-4 flex items-center">
            <button
              disabled={loading}
              type="submit"
              onClick={handleSubmit(handleFormSubmit)}
              className="w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none"
            >
              Log in
            </button>
          </div>
          <div className="text-grey-600 mt-4">
            Don't have an account?{" "}
            <span>
              <a className="text-purple-600 hover:underline" href="register">
                Register
              </a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;

import { AuthForm, authFormSchema } from "@/shared/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth, db } from "@/config/firebase";

import { useAppDispatch } from "@/hooks/storeHook";
import { login } from "@/features/authSlice";

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleFormSubmit = async (data: AuthForm) => {
    const { email, password, firstname, lastname } = data;
    try {
      setErrorMessage(null);
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);

      await setDoc(doc(db, "users", user.uid), { email, firstname, lastname });
      setLoading(false);
      if (user && user.email)
        dispatch(
          login({
            email: user.email,
            id: user.uid,
            firstname,
            lastname: user.displayName,
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
  // const handleFormSubmit = (data: AuthForm) => {
  //  const auth: any = getAuth(app);
  //   createUserWithEmailAndPassword(auth, data.email, data.password)
  //     .then((userCredential: any) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       alert("User created successfully!");
  //       navigate("../auth/login-page");

  //       updateProfile(auth.currentUser, {
  //         displayName: `${data.firstname} ${data.lastname}`,
  //       }).then(() => {
  //         // Profile updated!
  //         // ...
  //       });
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };
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
      <div className=" py-3 text-center text-2xl font-bold leading-tight">
        Register as a Writer/Reader
      </div>

      <div className="mt-3 bg-white sm:rounded-lg">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex justify-between">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    {...register("firstname")}
                  />
                  {errors.firstname ? (
                    <span className="text-red-700">
                      {errors.firstname.message}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </label>
            </div>
            <div>
              <label className="undefined block text-sm font-medium text-gray-700">
                Last name
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    {...register("lastname")}
                  />
                  {errors.lastname ? (
                    <span className="text-red-700">
                      {errors.lastname.message}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </label>
            </div>
          </div>
          <div>
            <label className="undefined block text-sm font-medium text-gray-700">
              You are joining as?
              <div className="flex flex-col items-start">
                <select
                  name=""
                  id=""
                  className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="writer">writer</option>
                  <option value="reader">reader</option>
                </select>
              </div>
            </label>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
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
          <div className="mt-4">
            <label className="undefined block text-sm font-medium text-gray-700">
              Confirm Password
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword ? (
                  <span className="text-red-700">
                    {errors.confirmPassword.message}
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </label>
          </div>

          <div className="mt-4 flex items-center">
            <button
              disabled={loading}
              type="submit"
              onClick={handleSubmit(handleFormSubmit)}
              className="w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-grey-600 mt-4">
          Already have an account?{" "}
          <span>
            <a className="text-purple-600 hover:underline" href="login-page">
              Log in
            </a>
          </span>
        </div>
        <div className="my-2 flex w-full items-center">
          <hr className="w-full" />
          <p className="px-3 ">OR</p>
          <hr className="w-full" />
        </div>
        <div className="my-6 space-y-2">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex w-full items-center justify-center space-x-4 rounded-md border p-2 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1 dark:border-gray-400"
          >
            <p>Login with Google</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;

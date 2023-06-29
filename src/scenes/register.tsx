const Register = () => {
  return (
    <section>
      <div className=" py-3 text-center text-2xl font-bold leading-tight">
        Register as a Writer/Reader
      </div>

      <div className="mt-3 bg-white sm:rounded-lg">
        <form>
          <div className="flex justify-between">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="firstname"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="undefined block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="lastname"
                  className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="undefined block text-sm font-medium text-gray-700"
            >
              You are joining as?
            </label>
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
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="flex flex-col items-start">
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="undefined block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="password"
                className="borderfocus:border-indigo-300 mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password_confirmation"
              className="undefined block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="password_confirmation"
                className="mt-1 block w-full rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-4 flex items-center">
            <button className="w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <div className="text-grey-600 mt-4">
          Already have an account?{" "}
          <span>
            <a className="text-purple-600 hover:underline" href="#">
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
          <button
            aria-label="Login with GitHub"
            role="button"
            className="flex w-full items-center justify-center space-x-4 rounded-md border p-2 focus:ring-2 focus:ring-violet-400 focus:ring-offset-1 dark:border-gray-400"
          >
            <p>Login with GitHub</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;

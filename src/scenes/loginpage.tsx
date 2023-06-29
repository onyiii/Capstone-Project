const LoginPage = () => {
  return (
    <section>
      <div className="py-3 text-center text-2xl font-bold leading-tight">
        Welcome back
      </div>
      <div className="mt-3 bg-white sm:rounded-lg">
        <form>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
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

          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-4 flex items-center">
            <button className="w-full transform rounded-md bg-purple-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-purple-600 focus:bg-purple-600 focus:outline-none">
              Log in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;

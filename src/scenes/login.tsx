import { Link, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="flex gap-x-10">
        <div className="h-screen bg-login-signup bg-cover ">
          <div className="flex h-full w-full flex-col justify-center backdrop-brightness-50 ">
            <div className="mx-auto w-2/3 tracking-wide text-white	 ">
              <div className="pb-3 text-2xl font-bold leading-tight">
                Chatter
              </div>
              <div className=" pb-3 text-base">
                Unleash the Power of Words, Connect with Like-minded Readers and
                Writers
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 w-1/3">
          <div className=" sm:justify-center sm:pt-0">
            <div className="flex justify-between">
              <Link to="register">
                <div>
                  <button className="text-base font-bold ">REGISTER</button>
                </div>
              </Link>

              <Link to="login-page">
                <div>
                  <button className=" text-base font-bold ">Log in</button>
                </div>
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

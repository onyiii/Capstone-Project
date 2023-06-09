import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-evenly";
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} space-x-50 w-full`}>
            <div className=" text-4xl font-bold leading-8 text-blue-500">
              CHATTER
            </div>
            <div className={`${flexBetween} w-full`}>
              <div>
                <ul className={`${flexBetween} gap-8 text-sm`}>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Blogs</li>
                </ul>
              </div>
              <div className={`${flexBetween} gap-5 text-sm`}>
                <button>Log in</button>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

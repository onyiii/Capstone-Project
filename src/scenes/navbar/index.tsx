import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Links from "./Links";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useNavigate } from "react-router-dom";

interface Props {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const navigate = useNavigate();
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px) ");
  const navBarBackground = isTopOfPage ? "" : "bg-blue-100 drop-shadow";

  return (
    <nav>
      <div
        className={` ${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-3 2xl:mx-auto 2xl:max-w-[1440px]`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween}  w-full`}>
            <div className=" text-4xl font-bold leading-8 text-blue-500">
              CHATTER
            </div>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween}  w-full`}>
                <div className={`${flexBetween} mx-auto gap-8 text-sm`}>
                  <Links
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="About Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Blogs"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-5 text-sm`}>
                  <button
                    className="rounded-md border border-blue-500 px-10 py-2 "
                    onClick={() => navigate("auth/login-page")}
                  >
                    Log in
                  </button>

                  <button
                    className="rounded-md bg-blue-500 px-10 py-2 text-white"
                    onClick={() => navigate("auth/register")}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-blue-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu view */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-blue-400">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-8 text-2xl  text-white">
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Blogs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

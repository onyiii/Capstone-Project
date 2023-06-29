import AboutUs from "@/scenes/aboutus";
import Contact from "./contact";
import Blogs from "./blogs";
import Footer from "./footer";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <section id="home" className="gap-16 py-20 md:h-full md:pb-0">
        <div>
          <div className="h-screen bg-background-image bg-cover">
            <div className="flex h-full w-full flex-col justify-center backdrop-brightness-50">
              <div className="mx-auto w-1/3 justify-center tracking-wide text-white	 ">
                <div className="pb-3 text-2xl font-bold leading-tight">
                  Welcome to Chatter: A Haven for Text-Based Content
                </div>
                <div className=" pb-3 text-base">
                  Unleash the Power of Words, Connect with Like-minded Readers
                  and Writers
                </div>
                <div>
                  <button className="rounded-md bg-blue-500 px-10 py-2 text-white">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;

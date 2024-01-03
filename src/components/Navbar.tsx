import { useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <nav className="flex justify-center items-center w-screen fixed top-0 left-0 h-[100px] bg-black text-white">
        <div className="flex justify-between items-center w-full mx-[50px] md:mx-[100px] lg:mx-[150px] xl:mx-[200px] 2xl:[250px]">
          <div>
            <a href="#" className="text-3xl font-bold text-white">
              Raivo Ķinne
            </a>
          </div>

          <div className="md:hidden">
            <Button
              className="w-[35px] h-[35px] grid place-items-center gap-[1px] rounded-full bg-white hover:bg-white"
              onClick={toggleMobileMenu}
            >
              <span
                className={
                  showMobileMenu
                    ? "bg-black w-[20px] h-[3px] rotate-45"
                    : "bg-black w-[20px] h-[3px]"
                }
              ></span>
              <span
                className={
                  showMobileMenu ? "hidden" : "bg-black w-[20px] h-[3px]"
                }
              ></span>
              <span
                className={
                  showMobileMenu
                    ? "bg-black w-[20px] h-[3px] rotate-45"
                    : "bg-black w-[20px] h-[3px]"
                }
              ></span>
            </Button>
          </div>

          <ul
            className={
              showMobileMenu
                ? "grid place-items-center text-3xl absolute top-[100px] left-0 bg-black h-[500px] w-full"
                : "hidden md:flex md:gap-4"
            }
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

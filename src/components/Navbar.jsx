import { Icon } from "@iconify/react";
import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const MENU = [
    { name: "About" },
    { name: "Work" },
    { name: "Testimonials" },
    { name: "Contact" },
  ];
  return (
    <div>
      <div className="flex justify-between p-[6px] relative border-b-[1px] border-zinc-300">
        <span>Bishal Rajbahak</span>

        <div className="sm:hidden">
          <button onClick={() => setNavBar(!navBar)}>
            <Icon icon="ci:hamburger-lg" className="h-[24px] w-[24px]" />
          </button>
        </div>

        <ul className="justify-between gap-2 mb:hidden sm:flex lg:w-2/4 shadow-2xl ">
          {MENU.map((menu) => (
            <li key={menu.name}>{menu.name}</li>
          ))}
          <li>
            <Link
              href="https://www.linkedin.com/in/bishalrajbahak/"
              target="_blank"
            >
              Linked Profile
            </Link>
          </li>
        </ul>
      </div>
      {navBar && (
        <div className="flex flex-col w-screen gap-[16px] text-center p-4 absolute bg-white bg-opacity-90 right-0">
          <ul className="flex flex-col gap-[16px]">
            {MENU.map((menu) => (
              <li key={menu.name}>{menu.name}</li>
            ))}
            <li>
              <Link
                href="https://www.linkedin.com/in/bishalrajbahak/"
                target="_blank"
              >
                Linked Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

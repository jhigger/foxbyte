/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { NavLink, type NavLinkType } from "./NavLink";

const MobileMenu = ({
  navLinks,
  toggleMenu,
  open,
}: {
  navLinks: NavLinkType[];
  toggleMenu: () => void;
  open: boolean;
}) => {
  return (
    <motion.nav
      className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center overflow-y-scroll bg-black bg-cover bg-center bg-no-repeat p-8 lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="z-20 flex h-full w-full flex-col">
        <div className="flex items-center justify-between gap-4 border-b-[1px] border-white border-opacity-10 px-4">
          <Link
            href="/"
            className="flex items-center justify-center text-2xl font-bold text-white"
          >
            <img src="/logo.png" alt="logo" width={48} height={48} />
            Foxbyte
          </Link>
          <MenuButton toggleMenu={toggleMenu} open={open} />
        </div>
        <div className="flex h-full">
          <ul className="flex w-full flex-col items-center justify-center gap-4">
            {navLinks.map((item, i) => {
              return (
                <NavLink key={`link-${i}`} text={item.text} link={item.link} />
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-end text-white">
          <footer className="flex w-full items-center justify-end gap-4 border-t-[1px] border-white border-opacity-10 p-4 text-xs uppercase">
            <p>&copy; 2023 Foxbyte. All rights reserved</p>
          </footer>
        </div>
      </div>
    </motion.nav>
  );
};

export default MobileMenu;

/* eslint-disable @next/next/no-img-element */
import { AnimatePresence } from "framer-motion";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Loader from "~/components/Loader";
import MenuButton from "~/components/MenuButton";
import MobileMenu from "~/components/MobileMenu";
import { NavLink, type NavLinkType } from "~/components/NavLink";

const Home: NextPage = () => {
  const navLinks: NavLinkType[] = [
    { text: "Staking", link: "https://staking.foxbyte.app/" },
    { text: "Lootybyte", link: "https://lootbyte-client.vercel.app/boxes" },
    { text: <FaTwitter size={20} />, link: "https://twitter.com/foxbyteNFT" },
    {
      text: <FaDiscord size={20} />,
      link: "https://discord.com/invite/foxbyte",
    },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Foxbyte</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Loader />

      <AnimatePresence>
        {open && (
          <MobileMenu navLinks={navLinks} toggleMenu={toggleMenu} open={open} />
        )}
      </AnimatePresence>

      <video
        id="background-video"
        autoPlay
        loop
        muted
        className="fixed h-screen w-screen overflow-hidden object-cover"
        controls={false}
      >
        <source src="Foxbyte_cleaned_Version_02_1.webm" type="video/webm" />
        <source src="Foxbyte_cleaned_Version_02_1.mp4" type="video/mp4" />
      </video>

      <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat p-8">
        <div className="z-20 flex h-full w-full flex-col border-[1px] border-white border-opacity-10">
          <nav className="flex items-center justify-between gap-4 border-b-[1px] border-white border-opacity-10 px-4">
            <Link
              href="/"
              className="flex items-center justify-center text-2xl font-bold text-white"
            >
              <img src="/logo.png" alt="logo" width={48} height={48} />
              Foxbyte
            </Link>
            <ul className="hidden items-center justify-center gap-4 lg:flex">
              {navLinks.map((item, i) => {
                return (
                  <NavLink
                    key={`link-${i}`}
                    text={item.text}
                    link={item.link}
                  />
                );
              })}
            </ul>
            <MenuButton toggleMenu={toggleMenu} open={open} />
          </nav>

          <div className="h-full"></div>

          <div className="flex flex-col items-center justify-end text-white">
            <footer className="flex w-full items-center justify-end gap-4 border-t-[1px] border-white border-opacity-10 p-4 text-xs uppercase">
              <p>&copy; 2023 Foxbyte. All rights reserved</p>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

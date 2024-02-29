"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full flex md:flex-row flex-col md:items-center md:justify-between lg:px-[40px] py-[20px] px-[20px] bg-white fixed top-[-1px] z-10">
      <div className="flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="w-[40px] h-[40px]"
        />
        <div className="md:hidden">
          {isOpen ? (
            <IoClose className="text-[24px]" onClick={handlerOpen} />
          ) : (
            <IoMenu className="text-[24px]" onClick={handlerOpen} />
          )}
        </div>
      </div>
      <div
        className={`md:flex ${
          !isOpen ? "hidden" : "flex"
        } md:flex-row flex-col md:items-center md:gap-[24px] gap-[14px] md:mt-0 mt-[20px]`}
      >
        <Link
          href="/"
          className="font-bold md:text-[16px] text-[14px] text-mycolors-primary hover:cursor-pointer hover:text-mycolors-primary"
        >
          Home
        </Link>
        <Link
          href="/games"
          className="md:text-[16px] text-[14px] text-mycolors-secondary hover:cursor-pointer hover:text-mycolors-primary"
        >
          Games
        </Link>
        <Link
          href="/voucher"
          className="md:text-[16px] text-[14px] text-mycolors-secondary hover:cursor-pointer hover:text-mycolors-primary"
        >
          Voucher
        </Link>
        <Link
          href="/pulsa-data"
          className="md:text-[16px] text-[14px] text-mycolors-secondary hover:cursor-pointer hover:text-mycolors-primary"
        >
          Pulsa & Data
        </Link>
        <Link
          href="/cari-transaksi"
          className="md:text-[16px] text-[14px] text-mycolors-secondary hover:cursor-pointer hover:text-mycolors-primary"
        >
          Cari Transaksi
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

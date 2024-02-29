import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex md:flex-row flex-col md:justify-between md:items-center bg-mycolors-quaternary md:p-[40px] p-[20px] mt-[100px]">
      <div className="md:w-1/4 w-full flex flex-col md:gap-[16px] gap-[8px] mb-[40px] md:mb-0">
        <div className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]">
          <Image
            src="/images/logo.png"
            alt="mobile"
            width={50}
            height={50}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-mycolors-primary font-medium lg:text-[16px] text-[14px]">
          StoreFD membantu gamers untuk Topup dan membeli voucher game kesukaan
          gamers.
        </p>
        <p className="text-mycolors-primary font-medium lg:text-[16px] text-[14px]">
          Copyright 2024 Created by mimin StoreFD
        </p>
      </div>
      <div className="flex justify-between lg:w-1/3 md:w-1/2 w-full">
        <div className="flex flex-col gap-[12px]">
          <h1 className="text-mycolors-primary font-bold lg:text-[16px] md:text-[14px] text-[10px]">
            Peta Situs
          </h1>
          <Link
            href="/"
            className="text-mycolors-primary font-medium lg:text-[16px] md:text-[14px] text-[10px]"
          >
            Beranda
          </Link>
          <Link
            href="/"
            className="text-mycolors-primary font-medium lg:text-[16px] md:text-[14px] text-[10px]"
          >
            Games
          </Link>
          <Link
            href="/"
            className="text-mycolors-primary font-medium lg:text-[16px] md:text-[14px] text-[10px]"
          >
            Voucher
          </Link>
          <Link
            href="/"
            className="text-mycolors-primary font-medium lg:text-[16px] md:text-[14px] text-[10px]"
          >
            Cek Transaksi
          </Link>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h1 className="text-mycolors-primary font-bold lg:text-[16px] md:text-[14px] text-[10px]">
            Bantuan
          </h1>
          <Link
            href="/"
            className="text-mycolors-primary font-medium lg:text-[16px] md:text-[14px] text-[10px]"
          >
            Whatsapp
          </Link>
          <Link
            href="/"
            className="text-mycolors-primary font-medium lg:text-[16px] md:text-[14px] text-[10px]"
          >
            Email
          </Link>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h1 className="text-mycolors-primary font-bold lg:text-[16px] md:text-[14px] text-[10px]">
            Media Sosial Kami
          </h1>
          <Link
            href="/"
            className="text-mycolors-primary font-medium lg:text-[16px] md:text-[14px] text-[10px]"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

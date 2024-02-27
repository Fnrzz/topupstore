import Image from "next/image";
import React from "react";

const HowToTopup = () => {
  return (
    <section
      id="how-to-topup"
      className="flex flex-col md:gap-[60px] gap-[20px] items-center justify-center"
    >
      <h1 className="md:text-[24px] text-[20px] text-mycolors-primary font-bold text-center">
        Cara Topup Game Mudah
      </h1>
      <div className="w-full flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-[16px] ">
        <div className="flex flex-col gap-[12px] ">
          <Image
            src="/images/howtotopup1.png"
            alt="howtotopup"
            width={283}
            height={203}
            className="lg:w-[283px] md:w-[180px] w-full hidden md:block"
          />
          <h1 className="lg:text-[20px] md:text-[16px] text-[18px] font-semibold text-mycolors-primary">
            1. Mulai
          </h1>
          <p className="md:w-[184px] lg:text-[16px] md:text-[12px] text-[14px] font-regular text-mycolors-secondary">
            Pilih menu games untuk topup game
          </p>
        </div>
        <div className="flex flex-col gap-[12px] ">
          <Image
            src="/images/howtotopup2.png"
            alt="howtotopup"
            width={283}
            height={203}
            className="lg:w-[283px] md:w-[180px] w-full hidden md:block"
          />
          <h1 className="lg:text-[20px] md:text-[16px] text-[18px] font-semibold text-mycolors-primary">
            2. Pilih Layanan
          </h1>
          <p className="md:w-[187px] lg:text-[16px] md:text-[12px] text-[14px] font-regular text-mycolors-secondary">
            Pilih Layanan game yang akan ditopup
          </p>
        </div>
        <div className="flex flex-col gap-[12px] ">
          <Image
            src="/images/howtotopup3.png"
            alt="howtotopup"
            width={283}
            height={203}
            className="lg:w-[283px] md:w-[180px] w-full hidden md:block"
          />
          <h1 className="lg:text-[20px] md:text-[16px] text-[18px] font-semibold text-mycolors-primary">
            3. Isi Form Pembelian
          </h1>
          <p className="md:w-[187px] lg:text-[16px] md:text-[12px] text-[14px] font-regular text-mycolors-secondary">
            Isi form pembelian topup sesuai instruksi
          </p>
        </div>
        <div className="flex flex-col gap-[12px] ">
          <Image
            src="/images/howtotopup4.png"
            alt="howtotopup"
            width={283}
            height={203}
            className="lg:w-[283px] md:w-[180px] w-full hidden md:block"
          />
          <h1 className="lg:text-[20px] md:text-[16px] text-[18px] font-semibold text-mycolors-primary">
            4. Pembayaran
          </h1>
          <p className="md:w-[193px] lg:text-[16px] md:text-[12px] text-[14px] font-regular text-mycolors-secondary">
            Lakukan pembayaran sesuai menu pembayaran
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToTopup;

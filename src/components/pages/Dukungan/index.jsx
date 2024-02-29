import React from "react";

const Dukungan = () => {
  return (
    <section id="dukungan" className="flex flex-col gap-[60px]">
      <div className="flex w-full justify-center">
        <h1 className="w-[326px] lg:text-[24px] text-[20px] text-center font-bold text-mycolors-primary">
          Dukungan Layanan Game & Pembayaran Lengkap
        </h1>
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between">
        <div className="md:w-full w-1/2 flex flex-col items-center md:border-r-[1px] md:border-mycolors-secondary gap-[12px] px-[20px] mb-[40px] md:mb-0">
          <h1 className="lg:text-[32px] md:text-[24px] text-[20px] text-mycolors-primary font-bold">
            100+
          </h1>
          <h2 className="lg:text-[20px] text-[14px] text-mycolors-secondary text-center font-medium">
            Game Tersedia
          </h2>
        </div>
        <div className="md:w-full w-1/2 flex flex-col items-center md:border-r-[1px] md:border-mycolors-secondary gap-[12px] px-[20px] mb-[40px] md:mb-0">
          <h1 className="lg:text-[32px] md:text-[24px] text-[20px] text-mycolors-primary font-bold">
            2000+
          </h1>
          <h2 className="lg:text-[20px] text-[14px] text-mycolors-secondary text-center font-medium">
            Transaksi
          </h2>
        </div>
        <div className="md:w-full w-1/2 flex flex-col items-center md:border-r-[1px] md:border-mycolors-secondary gap-[12px] px-[20px]">
          <h1 className="lg:text-[32px] md:text-[24px] text-[20px] text-mycolors-primary font-bold">
            15+
          </h1>
          <h2 className="lg:text-[20px] text-[14px] text-mycolors-secondary text-center font-medium">
            Metode Pembayaran
          </h2>
        </div>
        <div className="md:w-full w-1/2 flex flex-col items-center gap-[12px] px-[20px]">
          <h1 className="lg:text-[32px] md:text-[24px] text-[20px] text-mycolors-primary font-bold">
            4.7
          </h1>
          <h2 className="lg:text-[20px] text-[14px] text-mycolors-secondary text-center font-medium">
            Rating Pembeli
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Dukungan;

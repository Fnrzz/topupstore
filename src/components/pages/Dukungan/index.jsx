"use client";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Dukungan = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Set triggerOnce true agar animasi hanya dijalankan sekali saat elemen masuk ke dalam viewport
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <section id="dukungan" className="flex flex-col gap-[60px]">
      <div
        className="flex w-full justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="w-[326px] lg:text-[24px] text-[20px] text-center font-bold text-mycolors-primary">
          Dukungan Layanan Game & Pembayaran Lengkap
        </h1>
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between">
        <div className="md:w-full w-1/2 flex flex-col items-center md:border-r-[1px] md:border-mycolors-secondary gap-[12px] px-[20px] mb-[40px] md:mb-0">
          <h1
            className="lg:text-[32px] md:text-[24px] text-[20px] text-mycolors-primary font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {isInView ? <CountUp start={0} end={100} duration={5} /> : 0}+
          </h1>
          <h2
            className="lg:text-[20px] text-[14px] text-mycolors-secondary text-center font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Game Tersedia
          </h2>
        </div>
        <div className="md:w-full w-1/2 flex flex-col items-center md:border-r-[1px] md:border-mycolors-secondary gap-[12px] px-[20px] mb-[40px] md:mb-0">
          <h1
            className="lg:text-[32px] md:text-[24px] text-[20px] text-mycolors-primary font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {isInView ? <CountUp start={0} end={2000} duration={3} /> : 0}+
          </h1>
          <h2
            className="lg:text-[20px] text-[14px] text-mycolors-secondary text-center font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Transaksi
          </h2>
        </div>
        <div
          className="md:w-full w-1/2 flex flex-col items-center md:border-r-[1px] md:border-mycolors-secondary gap-[12px] px-[20px]"
          ref={ref}
        >
          <h1
            className="lg:text-[32px] md:text-[24px] text-[20px] text-mycolors-primary font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {isInView ? <CountUp start={0} end={15} duration={5} /> : 0}+
          </h1>
          <h2
            className="lg:text-[20px] text-[14px] text-mycolors-secondary text-center font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Metode Pembayaran
          </h2>
        </div>
        <div className="md:w-full w-1/2 flex flex-col items-center gap-[12px] px-[20px]">
          <h1
            className="lg:text-[32px] md:text-[24px] text-[20px] text-mycolors-primary font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {isInView ? <CountUp start={0} end={4} duration={8} /> : 0}
            .7
          </h1>
          <h2
            className="lg:text-[20px] text-[14px] text-mycolors-secondary text-center font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Rating Pembeli
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Dukungan;

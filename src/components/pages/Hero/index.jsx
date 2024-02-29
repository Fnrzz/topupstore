import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-between md:mt-[150px] mt-[100px] lg:gap-[100px] md:gap-[50px]"
    >
      <div className="w-full flex flex-col lg:gap-[30px] gap-[20px]">
        <h6 className="md:text-[16px] text-[14px] text-mycolors-secondary font-light">
          Hallo Gamers
        </h6>
        <h1 className="lg:text-[32px] text-[24px] text-mycolors-primary font-bold">
          Top Up Games & Dapatkan <br /> Pengalaman Baru Dalam Game
        </h1>
        <p className="lg:text-[16px] text-[14px] text-mycolors-secondary font-regular">
          Kami menyediakan berbagai macam layanan untuk mempermudah gamers dalam
          topup dan beli voucher game legal. Dan tentunya lebih murah dari
          website topup lainnya.
        </p>
        <div>
          <Link
            href="/"
            className="bg-mycolors-tertiary text-white md:text-[16px] text-[14px] lg:py-[17px] lg:px-[20px] py-[10px] px-[14px] rounded-[100px]"
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>
      <div className="md:w-full">
        <Image
          src="/images/image1.png"
          alt="hero"
          width={600}
          height={450}
          className="hidden md:block"
        />
      </div>
    </section>
  );
};

export default Hero;

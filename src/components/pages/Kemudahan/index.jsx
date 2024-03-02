import Image from "next/image";
import Link from "next/link";

const Kemudahan = () => {
  return (
    <section
      id="kemudahan"
      className="flex md:flex-row flex-col items-center gap-[40px]"
    >
      <div className="md:w-1/2 w-full">
        <Image
          src="/images/mobile.png"
          alt="mobile"
          width={600}
          height={500}
          className="w-full h-[500px] object-contain"
        />
      </div>
      <div className="md:w-1/2 w-full flex flex-col md:gap-[30px] gap-[20px]">
        <h1 className="lg:text-[24px] text-[20px] font-bold text-mycolors-primary">
          Kemudahan Untuk <br /> Melakukan Topup Gamers
        </h1>
        <p className="md:w-3/4 lg:text-[16px] text-[14px] text-mycolors-secondary font-regular">
          Dengan adanya StoreFD teman teman gamers kini bisa merasakan mudah nya
          topup game dan tentunya dengan harga yang murah.
        </p>
        <div>
          <Link
            href="/"
            className="bg-mycolors-secondary text-white md:text-[16px] text-[14px] lg:py-[17px] lg:px-[20px] py-[10px] px-[14px] rounded-[100px]"
          >
            Topup Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Kemudahan;

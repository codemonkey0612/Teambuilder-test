import Link from "next/link";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../lib/client";
import { BannerDataTypes } from "../app/page";

const FooterBanner = ({ bannerData }: { bannerData: BannerDataTypes }) => {
  const imageProps = useNextSanityImage(client, bannerData.image);

  return (
    <main
      className=" ring-8 ring-primary shadow-2xl shadow-dim
     md:mx-20 md:rounded-3xl md:h-64 md:mb-8 relative bg-gradient-to-r from-green-700
     h-60 lg:h-[340px] pl-4 my-10 bg-primary md:px-10 "
    >
      <section className="flex flex-col">
        <div className="mt-10 lg:mt-20">
          <p className=" font-bold text-lg text-highLight">
            {bannerData.discount}
          </p>
          <h3
            className="drop-shadow-lg text-highLight
          md:text-4xl text-2xl font-sans font-extrabold"
          >
            {bannerData.midText}
          </h3>

          <h1
            className="drop-shadow-lg md:text-7xl text-5xl font-sans 
            animate-pulse pt-3 font-extrabold text-highLight"
          >
            {/* {banner.largeText1} */}
            NOW!
          </h1>
        </div>

        {/* === MAIN IMAGE  */}
        <div
          className="drop-shadow-2xl absolute top-10 
        sm:top-0 w-48 md:self-center lg:w-[400px]
        hover:scale-110 lg:top-[-58px] sm:w-60
        self-end z-10 lg:self-center transition"
        >
          <Img alt="img" {...imageProps} />
        </div>

        <p className=" text-highLight text-lg font- mt-4 hidden lg:block ml-2">
          {bannerData.saleTime}!
        </p>

        <Link href={`/product/${bannerData.product}`}>
          <button
            className=" lg:absolute lg:right-8 lg:bottom-10
            mt-4 sm:mt-6 md:mt-4 lg:mt-10 text-center
            font-extrabold hover:scale-110 transition
            w-32 bg-highLight text-primary px-4 rounded-lg py-1"
          >
            {bannerData.buttonText}
          </button>
        </Link>

        <p
          className=" hidden md:block md:text-2xl md:top-20 text-center drop-shadow-xl
         text-highLight font-extrabold lg:text-4xl font-sans absolute right-10 top-10"
        >
          STUNNING <span className=" text-dim drop-shadow-lg"> SOUND </span>
          <br></br> & <br></br> TOTAL COMFORT
        </p>
      </section>
    </main>
  );
};

export default FooterBanner;

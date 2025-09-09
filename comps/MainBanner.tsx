"use client";
import Link from "next/link";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../lib/client";
import { BannerDataTypes } from "../app/page";

const MainBanner = ({ banner }: { banner: BannerDataTypes }) => {
  console.log("mainBanner");
  const imageProps = useNextSanityImage(client, banner.image);

  return (
    <main
      className=" md:mx-20 md:rounded-xl md:h-64 md:mb-8
     ring-8 ring-lightDim1 shadow-lightDim
     relative shadow-lg h-60 lg:h-80 pl-4 my-4 sm:my-8 bg-lightDim md:px-10"
    >
      <section className="flex flex-col">
        <div className="mt-10">
          <p className=" font-bold text-lg">{banner.discount}</p>
          <h3 className="drop-shadow-lg md:text-4xl text-2xl font-sans font-extrabold">
            {banner.midText}
          </h3>

          <h1
            className="drop-shadow-lg md:text-7xl text-5xl font-sans 
            animate-pulse pt-3
            font-extrabold text-highLight"
          >
            {/* {banner.largeText1} */}
            NOW!
          </h1>
        </div>

        {/* === MAIN IMAGE  */}

        <div
          className="drop-shadow-2xl absolute w-48 sm:self-center
          lg:w-[340px] sm:w-60 self-end pt-10 sm:pt-0 lg:self-center"
        >
          <Img alt="img" className="  transition" {...imageProps} />
          <div
            className=" absolute bottom-10 blur-md left-0 right-0 mx-auto
             bg-fullBlack blur-1xl h-4 opacity-20 rounded-full w-32"
          ></div>
        </div>

        <Link href={`/product/${banner.product}`}>
          <button
            className=" mt-4 sm:mt-6 md:mt-4 lg:mt-10 text-center
           shadow-lg font-extrabold shadow-dim
           transition duration-1000
           w-32 bg-primary text-highLight px-4 rounded-lg py-1"
          >
            {banner.buttonText}
          </button>
        </Link>

        <div className=" absolute right-10 bottom-10">
          <h4 className="hidden lg:block text-secondary text-md font-extrabold">
            Description
          </h4>
          <h4 className="hidden lg:block text-lightGray">{banner.desc}</h4>
        </div>
      </section>
    </main>
  );
};

export default MainBanner;

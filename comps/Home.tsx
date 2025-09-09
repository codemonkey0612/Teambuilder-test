"use client";
import { useMemo, useState } from "react";
import { BannerDataTypes, ProductsTypes } from "../app/page";
import FooterBanner from "../comps/FooterBanner";
import MainBanner from "./MainBanner";
import Products from "../app/Products";

interface HomeProps {
  products: ProductsTypes[];
  bannerData: BannerDataTypes[];
}

const Home = ({ products, bannerData }: HomeProps) => {
  const [sortOrder, setSortOrder] = useState<string>("");

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    const cloned = [...products];
    if (sortOrder === "low") {
      return cloned.sort((a, b) => (a.price || 0) - (b.price || 0));
    }
    if (sortOrder === "high") {
      return cloned.sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    return cloned;
  }, [products, sortOrder]);

  return (
    <main>
      <MainBanner banner={bannerData[0]} />

      <section className="  mb-4 flex items-center flex-col">
        <h1
          className=" headTitle px-8 py-4 sm:py-2 sm:text-4xl text-2xl text-secondary
         font-sans font-extrabold sm:rounded-t-3xl"
        >
          Best Selling Headphones
        </h1>
        <div className=" w-full flex justify-center lg:mx-20 px-4 mb-2 mt-3">
          <select
            aria-label="Sort by price"
            className=" ring-1 ring-lightGray px-3 py-2 text-sm rounded-md"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by price</option>
            <option value="low">low to high</option>
            <option value="high">high to low</option>
          </select>
        </div>
      </section>


      <section
        className=" grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3
       lg:mx-20 overflow-hidden
      "
      >
        {sortedProducts?.map((products: ProductsTypes) => {
          return <Products key={products._id} products={products} />;
        })}
      </section>

      <FooterBanner bannerData={bannerData && bannerData[1]} />
    </main>
  );
};

export default Home;

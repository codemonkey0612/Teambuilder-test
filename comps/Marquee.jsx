import styles from "../styles/Marquee.module.css";
import Products from "../app/Products";
import { memo } from "react";

const Marquee = ({ products }) => {
  console.log("marquee");
  return (
    <div className=" mt-20">
      <h1 className=" text-center text-secondary text-xl font-extrabold">
        You may also like
      </h1>

      <section className=" mt-10 relative h-52 sm:h-96  w-full  overflow-hidden">
        <div className={`flex  justify-center`}>
          {products.map((product) => (
            <Products gap={"mr-5"} key={product._id} products={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Marquee);

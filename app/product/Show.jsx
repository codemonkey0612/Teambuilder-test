"use client";
import React, { useContext, useState } from "react";

import Marquee from "../../comps/Marquee";
import { urlFor } from "../../lib/client";
import { UC } from "../context";
import { Minus, Plus, Star } from "../../comps/Svg";

const Show = ({ product, products }) => {
  console.log("show");
  const { incQty, decQty, qty, onAdd } = useContext(UC);
  // USE STATES
  const [photoIndex, setphotoIndex] = useState(0);

  const [zoom, setZoom] = useState(false);

  const imgMouseOver = (e) => {
    const img = document.getElementById("img");
    const x = e.clientX;
    const y = e.clientY;

    img.style.transformOrigin = ` ${x}px ${y}px`;
    img.style.transform = "scale(2)";
    setZoom(true);
  };

  const mouseLeave = () => {
    const img = document.getElementById("img");
    img.style.transform = "scale(1)";
    img.style.transformOrigin = ` center`;

    setZoom(false);
  };

  return (
    <div className=" sm:px-10 py-10">
      <div>
        <div className=" sm:flex">
          {/* === IMAGE  */}
          <section className=" grid sm:block justify-center ">
            <img
              className=" object-cover
              hover:bg-primary transition duration-300 cursor-zoom-in
              h-64 w-64 lg:h-96 lg:w-96 bg-lightDim1 sm:rounded-2xl"
              src={urlFor(product.image && product.image[photoIndex])}
              onMouseMove={(e) => imgMouseOver(e)}
              onMouseLeave={mouseLeave}
            />

            {/* === MORE IMAGES */}
            <div className="flex ml-2 sm:ml-0">
              {product.image.map((e, i) => (
                <img
                  key={i}
                  alt="img"
                  src={urlFor(e)}
                  className="h-14 bg-lightDim1 mt-4 mr-4 
                  transition duration-200
                  hover:bg-primary rounded-xl w-auto"
                  onMouseOver={() => setphotoIndex(i)}
                />
              ))}
            </div>
          </section>

          <section
            name="details"
            className=" relative mt-10 sm:mt-0 text-primary sm:ml-10"
          >
            {/* === ZOOM IMAGE */}
            <div
              className={` ${zoom ? "md:block" : "hidden"}
             absolute left-0  rounded-xl hidden  overflow-hidden`}
            >
              <img
                id="img"
                alt="img"
                className=" object-cover
              hover:bg-primary transition duration-300
              h-64 w-64 lg:h-96 lg:w-96 bg-lightDim1 sm:rounded-2xl"
                src={urlFor(product.image && product.image[photoIndex])}
              />
            </div>

            <div className=" ml-2">
              {/* === PRODUCT DETAILS & REVIEWS */}
              <h1 className=" text-secondary text-xl font-semibold">
                {" "}
                {product.model}{" "}
              </h1>
              <div className=" flex my-2">
                <Star styles=" h-5 w-5 fill-primary" />
                <Star styles=" h-5 w-5 fill-primary" />
                <Star styles=" h-5 w-5 fill-primary" />
                <Star styles=" h-5 w-5 fill-primary" />
                <Star styles=" h-5 w-5" />

                <span className=" text-lightGray text-sm mx-1"> (9) </span>
              </div>

              <div className=" text-secondary font-medium ">DETAILS:</div>
              <p className="w-2/3 text-lightGray"> {product.details}</p>

              <div className=" my-4 text-2xl font-bold"> ${product.price} </div>

              {/* ==== QUANTITY SHOW  */}
              <div className="flex">
                <h3 className="text-secondary font-semibold"> Quantity:</h3>

                <div
                  className=" w-40 ring-lightGray
                  flex justify-center items-center ring-1 ml-4 px-4"
                >
                  <span
                    className="hover:scale-150 text-love transition mx-2"
                    onClick={() => decQty()}
                  >
                    <Minus styles=" h-5 w-5" />
                  </span>
                  <p
                    className=" font-medium text-secondary
                    mx-2 border-r-2 border-lightDim my-1 border-l-2 px-4"
                  >
                    {qty}
                  </p>
                  <span
                    className=" hover:scale-150 transition text-primary mx-2 "
                    onClick={() => incQty()}
                  >
                    <Plus styles=" h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>

            {/* ==== ADD AND BUY */}
            <div className=" sm:flex w-full gap-4 mt-8 px-1">
              <button
                className=" flex justify-center items-center mb-4 
                sm:mb-0 hover:scale-105 transition
                text-xl px-8 py-2 ring-1 ring-primary w-full sm:w-auto "
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>

              <div
                className=" text-center hover:scale-105 transition shadow-md cursor-pointer
                 bg-primary text-xl px-8 py-2  text-highLight ring-1 ring-primary"
              >
                Buy Now
              </div>
            </div>
          </section>
        </div>

        <Marquee products={products} />
      </div>
    </div>
  );
};

export default Show;

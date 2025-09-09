"use client";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
// import { AiOutlineFileDone } from "react-icons/ai";

import { runFireworks } from "../../lib/utils";
import { UC } from "../context";

const Success = () => {
  const { setcartItems, settotalPrice, settotalQuantities } = useContext(UC);

  useEffect(() => {
    localStorage.clear();
    setcartItems([]);
    settotalPrice(0);
    settotalQuantities(0);
    runFireworks();
  }, [setcartItems, settotalPrice, settotalQuantities]);

  return (
    <div className=" my-10 flex justify-center items-center">
      <div className=" sm:m-10 my-10 bg-gray-300 sm:rounded-xl py-10 sm:px-10">
        <p className=" text-green-600 text-4xl flex justify-center">
          {/* <AiOutlineFileDone /> */}
        </p>
        <h2 className=" text-sky-900 font-extrabold text-xl sm:text-5xl text-center my-4">
          Thank you for your order!
        </h2>
        <p className=" text-center font-bold text-sm my-4">
          Check your email inbox for the receipt.
        </p>
        <p className="  text-sm text-center">
          If you have any questions, please email
          <a className="text-red-600 mx-2" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>

        <div className=" text-center ">
          <Link href="/">
            <button
              type="button"
              width="300px"
              className=" mt-10 bg-red-700 px-10 py-1 rounded-xl text-white
           hover:scale-110 transition
          "
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;

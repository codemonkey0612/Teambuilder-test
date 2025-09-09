"use client";
import React, { useContext, useRef } from "react";

import toast from "react-hot-toast";
import getStripe from "../lib/getStripe";
import { urlFor } from "../lib/client";
import { UC } from "../app/context";
import { ArrowLeft, Delete, Minus, Plus, ShoppingBag } from "./Svg";

const Cart = () => {
  // USE REF
  const cartRef = useRef();

  // CONTEXT STATES
  const {
    setshowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    toggleCartItemQuantity,
    onRemove,
  } = useContext(UC);

  const checkOut = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === "500") return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div
      className=" bg-lightGray bg-opacity-50 w-full h-full 
      fixed z-50 right-0 top-0"
      ref={cartRef}
    >
      <div></div>
      <div
        className=" relative overflow-y-auto  float-right 
        h-full transition-all duration-500
      bg-highLight w-full md:w-2/4 lg:w-2/5"
      >
        <div
          className=" fixed bg-primary h-10 flex items-center
         pl-1 sm:pl-4 w-full shadow-sm shadow-lightDim"
        >
          <button className=" flex gap-4" onClick={() => setshowCart(false)}>
            <ArrowLeft styles=" h-6 text-xl" />
            <span className="text-highLight"> Your Cart </span>
            <span className="text-highLight">
              (<b> {totalQuantities}</b> items)
            </span>
          </button>
        </div>

        <section className=" pt-8 pl-1 sm:pl-4">
          {/* === IF CART IS EMPTY  */}
          {cartItems.length < 1 && (
            <section className="flex flex-col items-center my-8">
              {/* === SHOPING BAG ICON  */}
              <ShoppingBag styles=" h-5 w-5" />
              <h3 className="mt-4 font-bold text-lg">
                Your shopping bag is empty
              </h3>

              {/* === BUTTON  */}
              <button
                className=" rounded-lg py-2 px-14 text-lg bg-primary
                 text-highLight mt-8 hover:scale-110 transition"
                onClick={() => setshowCart(false)}
              >
                Continue Shopping
              </button>
            </section>
          )}

          {/* === SHOW PRODUCTS IN CART */}
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item._id} className="flex mt-10 px-2">
                <img
                  src={urlFor(item?.image[0])}
                  className=" mr-1 sm:mr-4 h-32 object-cover w-36
           bg-lightDim1 rounded-lg "
                />

                {/* ==== NAME & PRICE */}
                <div className=" grid w-full px-4">
                  <section className=" flex justify-between w-full">
                    <h4 className=" text-xl text-secondary font-bold">
                      {item?.name}
                    </h4>
                    <h5 className=" text-xl text-secondary font-bold">
                      ${item?.price}
                    </h5>
                  </section>

                  <div className="flex items-center justify-between self-center">
                    <div
                      className=" w-32 ring-lightDim 
                  flex justify-center items-center ring-1 px-4"
                    >
                      <span
                        className="hover:scale-150 transition mx-2"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <Minus styles=" h-5 w-5" />
                      </span>
                      <p
                        className=" font-medium text-secondary
                         mx-2 border-r-2 border-lightDim my-1 border-l-2 px-4"
                      >
                        {item?.quantity}
                      </p>

                      <span
                        className=" hover:scale-150 transition text-primary mx-2 "
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        <Plus styles=" h-5 w-5" />
                      </span>
                    </div>

                    <span
                      onClick={() => {
                        onRemove(item);
                      }}
                    >
                      <Delete
                        styles=" h-5 w-5 text-love text-3xl hover:scale-110
                      cursor-pointer"
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}

          {/* === SUBTOTAL & PAY  */}
          {cartItems.length >= 1 && (
            <div className="flex flex-col items-center my-10 w-full">
              <section className=" w-full px-10 flex items-center justify-between">
                <h2 className=" text-2xl font-semibold">Subtotal:</h2>
                <span className=" text-xl font-bold"> ${totalPrice}</span>
              </section>

              <button
                className=" text-xl hover:scale-110 transition
            my-10 text-highLight bg-primary rounded-xl px-20 py-1"
                onClick={checkOut}
              >
                PAY WITH STRIPE
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cart;

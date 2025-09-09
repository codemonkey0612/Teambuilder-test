"use client";
import Link from "next/link";
import { useContext } from "react";
import Cart from "../comps/Cart";
import { UC } from "../app/context";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { showCart, setshowCart, totalQuantities } = useContext(UC);

  const notify = () => toast.error("Not Ready Yet!");

  return (
    <div className="md:mx-20 mt-1 px-1 sm:my-1 flex justify-between">
      <h3 className=" self-end">
        <Link href="/">
          <div className=" logoText flex  items-center gap-2 justify-center font-sans font-extrabold ">
            TRX
            <svg
              fill="white"
              className="h-6 w-6"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 512 512"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M461.77,136.212c2.028-14.416-2.312-29.563-13.405-40.648c-106.082-106.063-278.674-106.063-384.756,0 c-11.093,11.086-15.412,26.232-13.384,40.648C18.796,178.724,0,231.087,0,287.892v112c0,17.672,14.265,32.092,31.942,32.092H64 v31.908c0,17.672,14.282,32.092,31.958,32.092h48.013c17.676,0,32.029-14.42,32.029-32.092v-128 c0-17.674-14.353-31.908-32.029-31.908H95.958C78.282,303.983,64,318.218,64,335.892v-48c0-41.168,13.123-79.258,35.273-110.551 c11.722-0.41,23.314-4.957,32.258-13.902c68.643-68.609,180.314-68.609,248.957,0c8.944,8.945,20.52,13.492,32.242,13.902 C434.88,208.634,448,246.724,448,287.892v48c0-17.674-14.282-31.908-31.958-31.908h-48.013c-17.676,0-32.029,14.234-32.029,31.908 v128c0,17.672,14.353,32.092,32.029,32.092h48.013c17.676,0,31.958-14.42,31.958-32.092v-31.908h32.058 c17.676,0,31.942-14.42,31.942-32.092v-112C512,231.087,493.2,178.724,461.77,136.212z"></path>{" "}
              </g>
            </svg>
          </div>
        </Link>
      </h3>

      <div className="flex gap-4 items-center">
        <svg
          onClick={notify}
          className="h-6 w-6 text-lightGray
           hover:text-primary cursor-pointer transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <title> Demo </title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5
          4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <Toaster />
        <svg
          onClick={notify}
          className="h-6 w-6 text-lightGray
           hover:text-primary cursor-pointer transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <title> Demo </title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {/* === CART LOGO  */}
        <button
          className=" relative  w-8 flex"
          onClick={() => setshowCart(true)}
        >
          <svg
            className="h-6 w-6 text-lightGray
            hover:text-primary transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <title> Show Cart Items</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span
            className=" bg-primary rounded-full absolute  text-highLight h-4 w-4 text-[10px]
        font-semibold font-mono grid items-center left-[-6px] "
          >
            {totalQuantities}
          </span>
        </button>
      </div>
      {/* === SHOW CART */}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;

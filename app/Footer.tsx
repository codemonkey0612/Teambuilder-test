const Footer = () => {
  return (
    <div className=" mt-20 mx-4 text-center flex flex-col items-center">
      <p className=" font-semibold text-zinc-900 text-sm">
        © {new Date().getFullYear()} TRX Headphones All rights reserverd
      </p>
      <nav className=" flex mt-2 mb-2">
        {/* === INSTAGRAM LOGO */}
        <svg
          className="  h-8 w-auto cursor-pointer"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
        >
          <title> Demo </title>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>

        {/* === FACEBOOK LOGO */}
        <svg
          className=" h-8 w-auto cursor-pointer"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
        >
          <title> Demo </title>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>

        {/* === TELEGRAM LOGO  */}

        <svg
          className=" h-8 w-auto cursor-pointer"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
        >
          <title> Demo </title>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>

        {/* === VIEMO LOGO  */}
        <svg
          className=" h-8 w-auto pl-1 cursor-pointer"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
        >
          <title> Demo </title>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M3 8.5l1 1s1.5 -1.102 2 -.5c.509 .609 1.863 7.65 2.5 9c.556 1.184 1.978 
          2.89 4 1.5c2 -1.5 7.5 -5.5 8.5 -11.5c.444 -2.661 -1 -4 -2.5 -4c-2 0 -4.047 1.202 
          -4.5 4c2.05 -1.254 2.551 1.003 1.5 3c-1.052 2.005 -2 3 -2.5 3c-.49 0 -.924 -1.165
           -1.5 -3.5c-.59 -2.42 -.5 -6.5 -3 -6.5s-5.5 4.5 -5.5 4.5z"
          />
        </svg>
      </nav>
    </div>
  );
};

export default Footer;

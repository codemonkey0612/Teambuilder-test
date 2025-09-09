function Star({ styles }: { styles: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 
         5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204
         3.602a.563.563 0 00-.182.557l1.285 
         5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 
         0 00-.586 0L6.982 20.54a.562.562 
         0 01-.84-.61l1.285-5.386a.562.562 0 
         00-.182-.557l-4.204-3.602a.563.563 0 
         01.321-.988l5.518-.442a.563.563 0 
         00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function Plus({ styles }: { styles: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

function Minus({ styles }: { styles: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
    </svg>
  );
}

function ArrowLeft({ styles }: { styles: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}

function Delete({ styles }: { styles: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

function ShoppingBag({ styles }: { styles: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={styles}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 
        0v4.5m11.356-1.993l1.263 12c.07.665-.45 
        1.243-1.119 1.243H4.25a1.125 1.125 0 
        01-1.12-1.243l1.264-12A1.125 1.125 0 
        015.513 7.5h12.974c.576 0 1.059.435
        1.119 1.007zM8.625 10.5a.375.375 0 
        11-.75 0 .375.375 0 01.75 
        0zm7.5 0a.375.375 0 11-.75 0 
        .375.375 0 01.75 0z"
      />
    </svg>
  );
}

export { Star, Minus, Plus, ArrowLeft, Delete, ShoppingBag };

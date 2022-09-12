import { motion } from "framer-motion";

const Armex = (props: any) => {
  return (
    // <div className="flex items-center justify-center">
    <motion.svg
      // hacer con framer motion que llegue de la parte de arriba y rebote un poco
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="w-24 h-24 mr-3"
      viewBox="0 0 226 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.719 46l-3.313-10.875H13.75L10.437 46H0L16.125.125h11.844L44.156 46H33.72zm-5.625-19L24.78 16.375c-.208-.708-.49-1.615-.843-2.719-.334-1.125-.678-2.26-1.032-3.406a81.88 81.88 0 01-.812-3.031 71.57 71.57 0 01-.875 3.187 390.474 390.474 0 01-1.75 5.969L16.187 27h11.907z"
        fill="#38B6FF"
      />
      <path
        d="M63.25.313c4.146 0 7.563.5 10.25 1.5 2.708 1 4.719 2.51 6.031 4.53C80.844 8.366 81.5 10.918 81.5 14c0 2.083-.396 3.906-1.188 5.469a12.469 12.469 0 01-3.124 3.968A18.474 18.474 0 0173 26.095L86.438 46h-10.75L64.78 28.469h-5.156V46h-9.688V.312H63.25zm-.688 7.937h-2.937v12.344h3.125c3.208 0 5.5-.532 6.875-1.594 1.396-1.083 2.094-2.667 2.094-4.75 0-2.167-.75-3.708-2.25-4.625-1.48-.917-3.781-1.375-6.906-1.375zM178.875 46h-26.313V.312h26.313V8.25H162.25v10.031h15.469v7.938H162.25V38h16.625v8z"
        fill="#fff"
      />
      <path
        d="M111.531 46l-11-35.844h-.281l.188 3.875c.104 1.709.197 3.531.281 5.469.083 1.938.125 3.688.125 5.25V46h-8.656V.312h13.187l10.813 34.938h.187L127.844.312h13.187V46H132V24.375c0-1.438.021-3.094.062-4.969.063-1.875.136-3.656.219-5.343l.188-3.844h-.281L120.406 46h-8.875z"
        fill="#008037"
      />
      <path
        d="M225.375 46h-11.063l-10.624-17.281L193.062 46h-10.374l15.156-23.563L183.656.313h10.688l9.844 16.438L213.844.312h10.437L209.938 22.97 225.375 46z"
        fill="#FF1616"
      />
    </motion.svg>
    // <motion.h2 
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 1, delay: 1 }}
    //   className="text-base font-bold text-white"

    // >| Escuela de programación</motion.h2>
    // </div>
  );
};

export default Armex;

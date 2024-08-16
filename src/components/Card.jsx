import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

function Card({ width, start, para, title, heading, paragraph }) {
  return (
    <motion.div whileHover={{padding : "25px"}} className={`w-1/2 bg-zinc-800 p-5 rounded-xl hover:bg-violet-600 ${width} min-h-[28rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="">{title}</h3>
          <BsArrowRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">{heading}</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm text-zinc-300 font-medium hover:text-yellow-50">
              {paragraph}
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card;

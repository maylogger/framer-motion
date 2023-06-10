"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  visible: {
    x: 500,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.7,
    },
  },
  hidden: {
    x: 0,
    transition: {
      duration: 0,
    },
  },
};

export default function MyComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <div className="h-[1200px]"></div>
      <motion.div
        ref={ref}
        variants={variants}
        animate={isInView ? "visible" : "hidden"}
        className="relative w-[100px] aspect-square rounded-lg bg-red-400"
      >
        <motion.div className="absolute bg-blue-200 w-5 h-40 -top-40" />
      </motion.div>
      <div className="h-[1200px]"></div>
    </>
  );
}

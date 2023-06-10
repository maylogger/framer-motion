"use client";
import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  easeOut,
} from "framer-motion";

const variants = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const squares = {
  init: {
    opacity: 0,
    y: 100,
    filter: "blur(10px)",
    transition: { duration: 0 },
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

function Section(prop) {
  return (
    <div
      className={`px-5 relative w-full h-[100svh] min-h-[600px] ${prop.className}`}
    >
      <h1 className="sticky mx-auto text-center top-0 p-5 text-slate-700 z-10">
        {prop.name}
      </h1>
      <div className="absolute inset-0 flex justify-center items-center">
        {prop.children}
      </div>
    </div>
  );
}

function Square(prop) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const squareBlur = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["blur(50px)", "blur(0px)"],
    { ease: easeOut }
  );
  const squareY = useTransform(scrollYProgress, [0, 0.5], [600, 0], {
    ease: easeOut,
  });
  const squareScale = useTransform(scrollYProgress, [0, 0.5], [3, 1], {
    ease: easeOut,
  });
  const squareOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1], {
    ease: easeOut,
  });
  return (
    <motion.div
      ref={ref}
      style={{
        filter: squareBlur,
        y: squareY,
        scale: squareScale,
        opacity: squareOpacity,
      }}
      className={`w-[100px] aspect-square rounded-lg ${prop.className}`}
    >
      {prop.children}
    </motion.div>
  );
}

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <Section name="Auto animations" className="bg-slate-100">
        <motion.h1
          className="text-[7.5vw] font-bold"
          initial={{ scale: 0, rotate: -360 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.25 }}
        >
          Hello World!!
        </motion.h1>
      </Section>
      <Section name="Scroll-triggered animations">
        <motion.div
          ref={ref}
          initial="init"
          animate={isInView ? "show" : "init"}
          variants={variants}
          className="flex gap-4"
        >
          <motion.div
            variants={squares}
            className="w-[20vw] max-w-[100px] aspect-square bg-red-400 rounded-lg"
          ></motion.div>
          <motion.div
            variants={squares}
            className="w-[20vw] max-w-[100px] aspect-square bg-green-400 rounded-lg"
          ></motion.div>
          <motion.div
            variants={squares}
            className="w-[20vw] max-w-[100px] aspect-square bg-blue-400 rounded-lg"
          ></motion.div>
        </motion.div>
      </Section>
      <Section className="bg-slate-100" name="Scroll animations">
        <div className="flex flex-col gap-4">
          <Square className="bg-slate-400" />
          <Square className="bg-slate-500" />
          <Square className="bg-slate-600" />
        </div>
      </Section>
      <Section>
        <motion.div
          initial="init"
          whileInView="show"
          variants={squares}
          className="text-2xl text-center font-medium"
        >
          勞哥安安設計直播{" "}
          <a
            href="https://youtube.com/@maylogger"
            className="text-indigo-600 underline decoration-2 underline-offset-2 decoration-indigo-300"
          >
            youtube.com/@maylogger
          </a>
        </motion.div>
      </Section>
    </>
  );
}

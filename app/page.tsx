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
  init: {
    transition: { staggerChildren: 0 },
  },
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const squares = {
  init: {
    opacity: 0,
    y: 10,
    filter: "blur(20px)",
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
      className={`px-5 relative w-full h-[100lvh] min-h-[600px] flex justify-center items-center ${prop.className}`}
    >
      <h1 className="absolute w-[70%] text-center top-5 left-1/2 -translate-x-1/2 text-slate-700">
        {prop.name}
      </h1>
      {prop.children}
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
    easeOut
  );
  const squareY = useTransform(scrollYProgress, [0, 0.5], [300, 0], easeOut);
  return (
    <motion.div
      ref={ref}
      style={{ filter: squareBlur, y: squareY }}
      className={`w-[100px] aspect-square rounded-lg ${prop.className}`}
    >
      {prop.children}
    </motion.div>
  );
}

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, {});
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Section name="網頁一旦讀取，就會自動跑的動畫" className="bg-slate-100">
        <motion.h1
          className="text-[7.5vw] font-bold"
          initial={{ scale: 0, rotate: -360 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.25 }}
        >
          Hello!! 大家好！蛤！666
        </motion.h1>
      </Section>
      <Section name="捲動到該元件觸發的動畫">
        <motion.div
          initial="init"
          whileInView="show"
          variants={variants}
          className="flex gap-4"
        >
          <motion.div
            variants={squares}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-[20vw] max-w-[100px] aspect-square bg-red-400 rounded-lg"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={squares}
            className="w-[20vw] max-w-[100px] aspect-square bg-green-400 rounded-lg"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={squares}
            className="w-[20vw] max-w-[100px] aspect-square bg-blue-400 rounded-lg"
          ></motion.div>
        </motion.div>
      </Section>
      <Section className="bg-slate-100" name="配合捲動的動畫">
        <div className="flex flex-col gap-4">
          <Square className="bg-slate-400" />
          <Square className="bg-slate-500" />
          <Square className="bg-slate-600" />
        </div>
      </Section>
      <Section>
        <div className="text-2xl text-center font-medium">
          勞哥安安設計直播{" "}
          <a
            href="https://youtube.com/@maylogger"
            className="text-indigo-600 underline decoration-2 underline-offset-2 decoration-indigo-300"
          >
            youtube.com/@maylogger
          </a>
        </div>
      </Section>
    </>
  );
}

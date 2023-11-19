"use client";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.3, duration: 0.9, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.5, duration: 0.9, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default TransitionEffect;

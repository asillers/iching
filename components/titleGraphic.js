"use client";
import Link from "next/link";
import Image from "next/legacy/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TitleGraph() {
  return (
    <div className="nameText relative w-1/2 mt-[-50px] sm:mt-[-70px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        <svg viewBox="0 0 400 400" xmlns="">
          <path
            id="circle"
            stroke="none"
            fill="none"
            d=" M 200, 200 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
          />

          <text>
            <textPath color="black" href="#circle">
              J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J.
              Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur
              J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J.
              Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur
              J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J.
              Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur
              J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J.
              Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur J. Arthur
              J. Arthur J. Arthur J. Arthur J. Arthur{" "}
            </textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
//    <TitleGraph />

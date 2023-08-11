"use client";

import Link from "next/link";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import CoinToss from "./toss.js";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <div className="">
        <CoinToss />
      </div>
    </>
  );
}

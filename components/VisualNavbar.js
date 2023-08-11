import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function VisNavbar() {
    return (
        <div className="">
            <ul className="navLinks text-xs sm:text-base">
                <Link href="/home">Home</Link>
                <Link href="/work/visual">{"Visual"}</Link>
                <Link href="/work/audio">{"Audio"}</Link>
                <Link href="/work/video">{"Video"}</Link>
            </ul>
        </div>
    );
}

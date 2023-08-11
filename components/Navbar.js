import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex flex-col top-0">
            <Link href="/home/">
                <div className="w-full h-full namePlate md:text-4xl top-[0px] bottom-0">
                    J Arthur
                </div>
            </Link>
            <div className="text-xs sm:text-base">
                <Link href="cv">CV</Link>
                <br></br>
                <Link href="../work">{"Work Examples"}</Link>
                <br></br>
                <Link href="http://diary.arthursillers.com">Diary</Link>
            </div>
        </div>
    );
}

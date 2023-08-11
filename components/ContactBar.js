import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="flex flex-row justify-left fixed bottom-0 greyOut">
        <Link href="mailto:arthursillers@gmail.com">
          <div className="w-[30px] sm:w-[60px] ">
            <div className="image m-1">
              <Image
                alt="gmail"
                src="/img/gmaillogo.svg"
                height="75"
                width="75"
                objectFit=""
                layout="responsive"
              />
            </div>
          </div>
        </Link>
        <Link href="https://twitter.com/nsfwphd">
          <div className="w-[30px] sm:w-[60px] ">
            <div className="image m-1">
              <Image
                alt="twitter"
                src="/img/twitlogo.webp"
                height="75"
                width="75"
                layout="responsive"
                objectFit=""
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

import Head from "next/head";
import { useEffect, useState } from "react";

export default function FaceFind() {
  const [faceLabel] = useState("...");

  const quickTest = async () => {
    const response = await fetch("/api/facedetect", {});
  };
  useEffect(() => {
    quickTest();
  });

  return (
    <div className="flex text-center justify-center mt-[100px]">
      <div className="w-3/5">
        <Head>
          <title>TEST</title>
        </Head>
        <main className="">
          <p>{faceLabel}</p>
          <br></br>
        </main>
      </div>
    </div>
  );
}

import Head from "next/head";
import { useEffect, useState } from "react";

export default function Qtester() {
  const [gptBio, setGptBio] = useState("...");

  const quickTest = async () => {
    const response = await fetch("/api/imagesearch", {});
  };
  useEffect(() => {
    quickTest();
  });

  return (
    <div className="flex text-center justify-center mt-[100px]">
      <div className="w-3/5">
        <Head>
          <title>OpenAI Example</title>
          <link rel="icon" href="/dog.png" />
        </Head>
        <main>
          <br></br>
          {/*    <div className='text-xs'>
          <p>(bio generated on pageload by machine learning language model to increase efficiency so it is most likely a lie.)</p>
        </div> */}
        </main>
      </div>
    </div>
  );
}

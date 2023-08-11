import Head from "next/head";
import { useEffect, useState } from "react";

const promptBio =
  "My name is J. Arthur Sillers. I am a uniquely talented and swiftly emerging media worker, creative, writer, musician, multimedia artist, thinker, tinkerer, explorer, and doer. My skills are extensive, and I am a wonderful fit to any corporate culture, project, team, crew, shoot, firm, agency, or any otherwise unmentioned source of employment.";

export default function CoverletterGen() {
  const [gptBio, setGptBio] = useState("...");

  const generateGpt = async () => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ promptBio }),
    });
    const data = await response.json();
    setGptBio(data.result), [promptBio];
  };
  useEffect(() => {
    generateGpt();
  });

  return (
    <div className="flex text-center justify-center mt-[115px]">
      <div className="w-3/5">
        <Head>
          <title>J. Arthur</title>
        </Head>
        <main>
          <p>{promptBio + gptBio}</p>
          <br></br>
          {/*    <div className='text-xs'>
          <p>(bio generated on pageload by machine learning language model to increase efficiency so it is most likely a lie.)</p>
        </div> */}
        </main>
      </div>
    </div>
  );
}

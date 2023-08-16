import Head from "next/head";
import { hexTable } from "./hextable.js";
import { useEffect, useState } from "react";

export default function IchingInterpreter({ hex1, hex2 }) {
  const [gptInterpret, setGptInterpret] = useState("...");

  const hexString1 = String(hex1);
  const hexString2 = String(hex2);
  let name1 = String(hexTable.find((item) => item.key === hexString1).name);
  let name2 = String(hexTable.find((item) => item.key === hexString2).name);
  let title1 = String(hexTable.find((item) => item.key === hexString1).title);
  let title2 = String(hexTable.find((item) => item.key === hexString2).title);
  let image1 = String(hexTable.find((item) => item.key === hexString1).image);
  let image2 = String(hexTable.find((item) => item.key === hexString2).image);
  let judgement1 = String(
    hexTable.find((item) => item.key === hexString1).judgement,
  );
  let judgement2 = String(
    hexTable.find((item) => item.key === hexString2).judgement,
  );

  const generateIchingGpt = async () => {
    setGptInterpret("...");
    const prompt = `give me a thorough interpretation of the following result from a consultation with the I Ching: 
      The Current Hexagram is ${title1} with a judgement of ${judgement1} and an image of ${image1} . This hexagram 
      is changing into the future hexagram ${title2} with a judgement of ${judgement2} and an image of ${image2}`;
    const response = await fetch("/api/ichinggenerator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setGptInterpret(data.result);
  };

  // Use effect will run after the component is first rendered, and will run again if hex1 or hex2 change
  useEffect(() => {
    generateIchingGpt();
  }, [hex1, hex2]);

  return <div>{gptInterpret}</div>;
}

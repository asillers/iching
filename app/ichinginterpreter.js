import Head from "next/head";
import { hexTable } from "./hextable.js";
import { useEffect, useState,  } from "react";

export default function IchingInterpreter({ hex1, hex2 }) {
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

  let [iChinger, setiChinger] = useState("");
  const populatePrompt = async () => {
    setiChinger(
      (iChinger = 
        "give me a brief interpretation of the following result from a consultation with the I Ching: The Current Hexagram is " +
          title1 +
          " with a judgement of " +
          judgement1 +
          " and an image of " +
          image1 +
          ". This hexagram is changing into the future hexagram " +
          title2 +
          " with a judgement of " +
          judgement2 +
          " and an image of " +
          image2,
      ),
    );
  };
  useEffect(() => populatePrompt);
  const [gptInterpret, setGptInterpret] = useState("...");
  const generateIchingGpt = async () => {
    const response = await fetch("/api/ichinggenerator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({iChinger}),
    });
    const data = await response.json();
    setGptInterpret(data.result), [iChinger];
  };
  useEffect(() => {
    generateIchingGpt();
  });
  return <div>{gptInterpret}</div>;
}

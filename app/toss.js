"use client";

import { hexTable } from "./hextable.js";
import { useState, useEffect } from "react";
export default function CoinToss() {
  let [tossValue, setTossValue] = useState([0, 0, 0]);
  /*lookupString1= hexegram now, lookupString 2= hexagram changing into*/
  let [lookupString1, setLookupString1] = useState("");
  let [lookupString2, setLookupString2] = useState("");
  let [index, setIndex] = useState(0);
  let hexStart = index > 0;
  let hexCooked = index > 5;
  const coinDisplay = ["\u21E9", "\u21E7"];

  const handleRetry = () => {
    setLookupString1((lookupString1 = "")),
      setLookupString2((lookupString2 = ""));
    setIndex((index = 0));
  };

  const handleClick = () => {
    setIndex((index = index + 1));
    setTossValue([
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 2),
    ]);
    let sum = 0;
    tossValue.forEach((coin) => {
      sum += coin;
    });

    if (sum === 0 /*three tails*/) {
      setLookupString1(lookupString1.concat("1"));
      setLookupString2(lookupString2.concat("0"));
      console.log("changing Yang", lookupString1 + " " + lookupString2);
    } else if (sum === 1) {
      /*two tails one heads*/
      setLookupString1(lookupString1.concat("1"));
      setLookupString2(lookupString2.concat("1"));
      console.log("Yin", lookupString1 + " " + lookupString2);
    } else if (sum === 2 /*two heads one tails*/) {
      setLookupString1(lookupString1.concat("0"));
      setLookupString2(lookupString2.concat("0"));
      console.log("Yang", lookupString1 + " " + lookupString2);
    } else if (sum === 3) {
      /*three heads*/
      setLookupString1(lookupString1.concat("0"));
      setLookupString2(lookupString2.concat("1"));
      console.log("changing Yin", lookupString1 + " " + lookupString2);
    }
  };
  return (
    <>
      <div className="text-center">
        {" "}
        <br />
        <div className="flex flex-row">
          Results:
          <br />
          <div className="text-6xl">
            {!hexStart
              ? ""
              : String(
                  hexTable.find((item) => item.key === lookupString1).hex,
                ) +
                " \u21E8" +
                String(hexTable.find((item) => item.key === lookupString2).hex)}
          </div>
        </div>
        {String(coinDisplay[tossValue[0]])}
        {String(coinDisplay[tossValue[1]])}
        {String(coinDisplay[tossValue[2]])}
        <br />
        {!hexCooked ? (
          <button className="border rounded shadow px-1" onClick={handleClick}>
            Toss
          </button>
        ) : (
          <button className="border rounded shadow px-1" onClick={handleRetry}>
            Retry
          </button>
        )}
      </div>
    </>
  );
}

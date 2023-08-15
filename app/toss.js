import { hexTable } from "./hextable.js";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IchingInterpreter from "./ichinginterpreter";
export default function CoinToss({ gpt_ }) {
  let [tossValue, setTossValue] = useState([0, 0, 0]);
  /*lookupString1= hexegram now, lookupString 2= hexagram changing into*/
  let [lookupString1, setLookupString1] = useState("");
  let [lookupString2, setLookupString2] = useState("");
  let hexStart = lookupString1.length > 0;
  let hexCooked = lookupString1.length > 5;
  /*
  const coinDisplay = ["\u2E1E", "\u2E1F"];
*/
  const coinDisplay = ["\u25A2", "\u25A3"];

  const handleRetry = () => {
    setLookupString1(""), setLookupString2("");
  };

  const handleClick = () => {
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
  function HexCooker(children) {
    {
      !hexCooked && { children };
    }
  }
  return (
    <>
      {!hexStart ? (
        <div className="text-center align-top sm:mr-[5px]">
          <div>iChing</div>
          <motion.div
            className="text-[200px]"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            }}
          >
            {"\u262F"}
          </motion.div>
          <div className="text-[10px] sm:text-[15px] sm:p-5">
            Meditate upon a question that is troubling you and hit start to
            begin generating a hexagram. The app will divine from your simulated
            coin tosses an answer to your conundrum by consulting the ancient
            Book of Changes.
          </div>
        </div>
      ) : (
        <div className="grid-rows-2">
          <div className="grid grid-cols-5 align-top justify-center text-center w-full sm:p-2 ichingmobile sm:ichingdesktop">
            <div className="col-1 col-span-2">
              <div>
                {String(
                  hexTable.find((item) => item.key === lookupString1).name,
                )}
              </div>
              <div>
                {String(
                  hexTable.find((item) => item.key === lookupString1).character,
                )}
              </div>
              <div>
                {String(
                  hexTable.find((item) => item.key === lookupString1).title,
                )}
              </div>

              <div className="text-[30px] sm:text-[50px]">
                {String(
                  hexTable.find((item) => item.key === lookupString1).hex,
                )}
              </div>

              <div>
                {String(
                  hexTable.find((item) => item.key === lookupString1).judgement,
                )}
                <br />
                <br />
              </div>
              <div>
                {hexCooked && "Image: "}
                {hexStart &&
                  String(
                    hexTable.find((item) => item.key === lookupString1).image,
                  )}
                <br />
              </div>
            </div>
            <div className="col-2 span-1">Changing to</div>
            <div className="col-3 col-span-2 ">
              <div>
                {String(
                  hexTable.find((item) => item.key === lookupString2).name,
                )}
              </div>
              <div>
                {String(
                  hexTable.find((item) => item.key === lookupString2).character,
                )}
              </div>
              <div>
                {String(
                  hexTable.find((item) => item.key === lookupString2).title,
                )}
              </div>
              <div className="text-[30px] sm:text-[50px]">
                {String(
                  hexTable.find((item) => item.key === lookupString2).hex,
                )}
              </div>
              <div>
                {String(
                  hexTable.find((item) => item.key === lookupString2).judgement,
                )}
                <br />
                <br />
              </div>
              <div>
                {hexCooked && "Image: "}
                {String(
                  hexTable.find((item) => item.key === lookupString2).image,
                )}
                <br />
              </div>
            </div>
          </div>
          <div className="text-center col-span-full">
            <div>Your interpretation is:</div>
            {hexCooked && (
              <IchingInterpreter hex1={lookupString1} hex2={lookupString2} />
            )}
            {/*component <IchingInterpreter /> goes here*/}
          </div>
        </div>
      )}

      {/* Start Permanent Button Section */}
      <div className="text-[10px] sm:text-[10px] fixed bottom-5 left-[200px]">
        <br></br>
        {String(coinDisplay[tossValue[0]])}
        {String(coinDisplay[tossValue[1]])}
        {String(coinDisplay[tossValue[2]])}
        <br />
        <br />

        {!hexCooked ? (
          <button
            className="text-[10px] sm:text-[10px] rounded shadow sm:px-1 "
            onClick={handleClick}
          >
            Toss
          </button>
        ) : (
          <button className="rounded shadow sm:px-1" onClick={handleRetry}>
            Retry
          </button>
        )}
      </div>
    </>
  );
}

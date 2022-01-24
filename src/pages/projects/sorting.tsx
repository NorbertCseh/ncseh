import NextPage from "next";
import { withRouter } from "next/router";
import React, { useEffect, useState, useCallback, ReactNode } from "react";
import { randomIntFromInterval, setTimeoutByNumber } from "../../lib/helper";

type barElement = {
  num: number;
  sty: string;
};

const Sorting = () => {
  const inProgressColor = "dark:bg-yellow-400";
  const wrongColor = "dark:bg-red-400";
  const goodColor = "dark:bg-green-400";
  const originalColor = "dark:bg-indigo-200";
  const timeOutInterval = 300;

  const [numbers, setNumbers] = useState<barElement[]>([]);
  const [size, setSize] = useState(20);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(parseInt(e.target.value));
  };

  const generateNumbers = useCallback(() => {
    let rndNumbers: barElement[] = [];
    for (let i = 0; i < size; i++) {
      rndNumbers.push({
        num: randomIntFromInterval(20, 300),
        sty: originalColor,
      });
    }
    setNumbers(rndNumbers);
  }, [size]);

  useEffect(() => {
    generateNumbers();
  }, [generateNumbers]);

  const bubbleShort = async () => {
    let sortedArray = [...numbers];
    let redo = false;
    do {
      redo = false;
      for (let i = 0; i < sortedArray.length - 1; i++) {
        sortedArray[i].sty = inProgressColor;
        sortedArray[i + 1].sty = inProgressColor;
        setNumbers([...sortedArray]);
        await setTimeoutByNumber(timeOutInterval);
        if (sortedArray[i].num !== sortedArray[i + 1].num) {
          if (sortedArray[i].num >= sortedArray[i + 1].num) {
            sortedArray[i].sty = wrongColor;
            sortedArray[i + 1].sty = wrongColor;
            setNumbers([...sortedArray]);
            await setTimeoutByNumber(timeOutInterval);
            let temp = sortedArray[i];
            sortedArray[i] = sortedArray[i + 1];
            sortedArray[i + 1] = temp;
            setNumbers([...sortedArray]);
            redo = true;
          }
        }
        sortedArray[i].sty = goodColor;
        sortedArray[i + 1].sty = goodColor;
        setNumbers([...sortedArray]);
        await setTimeoutByNumber(timeOutInterval);
        sortedArray[i].sty = originalColor;
        sortedArray[i + 1].sty = originalColor;
        setNumbers([...sortedArray]);
        await setTimeoutByNumber(timeOutInterval);
      }
    } while (redo === true);
  };

  return (
    <section className="w-full h-screen p-4">
      <div className="flex h-20 w-full justify-between">
        <div className="text-xl flex items-center">Sorting visualizer</div>
        <div className="p-5 text-lg flex items-center justify-evenly w-1/3">
          <select
            className="bg-indigo-200 dark:bg-indigo-900"
            name="sorting"
            id="sortin"
          >
            <option value="bubble">Bubble</option>
            <option value="selection">Selection</option>
            <option value="insertion">Insertion</option>
          </select>
          <select
            className="bg-indigo-200 dark:bg-indigo-900"
            name="size"
            id="size"
            value={size}
            onChange={handleSizeChange}
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
          <button onClick={generateNumbers}>Generate</button>
          <button onClick={bubbleShort}>Sort</button>
          <button>Change</button>
        </div>
      </div>
      <div>
        <div className="flex w-full border-2 h-80 justify-center">
          {numbers.map((value, index) => {
            return (
              <div
                key={index}
                id={"bar-" + index}
                className={
                  "bg-indigo-900 mx-2 mt-2 w-10 text-center text-indigo-200  dark:text-indigo-900 " +
                  value.sty
                }
                style={{ height: `${value.num}px` }}
              >
                {value.num}
              </div>
            );
          })}
        </div>
        <div className="border-2 w-full h-24">controll panel</div>
        <div className="w-full h-16 border-2">Color hints {size}</div>
        <div className="w-full h-64 border-2">sort description</div>
      </div>
    </section>
  );
};

export default Sorting;

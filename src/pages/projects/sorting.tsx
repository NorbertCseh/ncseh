import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import { randomIntFromInterval } from "../../lib/helper";
import {
  SIZES,
  SORTING_ALGORITHMS,
  timeOutIntervals,
} from "../../constants";
import {
  bubbleSorting,
  insertionSorting,
  selectionSort,
} from "../../lib/sortings";
import { barElement } from "../../types";
import { originalColor } from "../../colors";

import SelectField from "../../components/selectField";
import Description from "../../components/description";

const Sorting = () => {
  const [numbers, setNumbers] = useState<barElement[]>([]);
  const [size, setSize] = useState(20);
  const [sort, setSort] = useState("Bubble");
  const [isSorting, setIsSorting] = useState(false);
  const [timeout, setTimeout] = useState(100)

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(parseInt(e.target.value));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const handleTimeoutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeout(parseInt( e.target.value));
  };

  const doSorting = () => {
    switch (sort) {
      case "Bubble":
        bubbleSorting(numbers, setNumbers, setIsSorting, timeout);
        break;
      case "Selection":
        selectionSort(numbers, setNumbers, setIsSorting, timeout);
        break;
      case "Insertion":
        insertionSorting(numbers, setNumbers, setIsSorting, timeout);
        break;
      default:
        break;
    }
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

  return (
    <>
      <Head>
        <title>Sorting visualizer</title>
      </Head>
      <section className="w-full h-screen p-4">
        <div className="flex justify-between w-full h-20">
          <div className="flex items-center text-xl">Sorting visualizer</div>
          <div className="flex items-center w-1/3 p-5 text-lg justify-evenly">
            <SelectField
              label="Timeout:"
              name="Timeout"
              id="timeout"
              value={timeout.toString()}
              onChange={handleTimeoutChange}
              options={timeOutIntervals}
              isDisabled={isSorting}
            />
            <SelectField
              label="Sorting:"
              name="Sorting"
              id="sorting"
              value={sort}
              onChange={handleSortChange}
              options={SORTING_ALGORITHMS}
              isDisabled={isSorting}
            />

            <SelectField
              label="Size:"
              name="ArraySize"
              id="array_size"
              value={size.toString()}
              onChange={handleSizeChange}
              options={SIZES}
              isDisabled={isSorting}
            />

            <button
              onClick={generateNumbers}
              disabled={isSorting}
              className="px-2 disabled:text-slate-500 dark:disabled:text-slate-700"
            >
              Generate
            </button>

            <button
              onClick={doSorting}
              disabled={isSorting}
              className="px-2 disabled:text-slate-500 dark:disabled:text-slate-700"
            >
              Sort
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center w-full h-80">
            {numbers.map((value, index) => {
              return (
                <div
                  key={index}
                  id={"bar-" + index}
                  className={
                    "mx-2 mt-2 w-10 text-center text-slate-200  dark:text-slate-900 " +
                    value.sty
                  }
                  style={{ height: `${value.num}px` }}
                >
                  {value.num}
                </div>
              );
            })}
          </div>
        </div>
        <Description sorting={sort} />
      </section>
    </>
  );
};

export default Sorting;

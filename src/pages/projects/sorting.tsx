import NextPage from "next";
import { withRouter } from "next/router";
import React, { useEffect, useState, useCallback, ReactNode } from "react";
import { randomIntFromInterval, setTimeoutByNumber } from "../../lib/helper";
import { SIZES, SORTING_ALGORITHMS } from "../../constants";
import { bubbleSorting } from "../../lib/sortings";
import { barElement } from "../../types";
import {
  goodColor,
  inProgressColor,
  originalColor,
  wrongColor,
} from "../../colors";

import SelectField from "../../components/selectField";

const Sorting = () => {
  const [numbers, setNumbers] = useState<barElement[]>([]);
  const [size, setSize] = useState(20);
  const [sort, setSort] = useState("Bubble");

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(parseInt(e.target.value));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const doSorting = () => {
    switch (sort) {
      case "Bubble":
        bubbleSorting(numbers, setNumbers);
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
    <section className="w-full h-screen p-4">
      <div className="flex h-20 w-full justify-between">
        <div className="text-xl flex items-center">Sorting visualizer</div>
        <div className="p-5 text-lg flex items-center justify-evenly w-1/3">
          <SelectField
            classes="bg-indigo-200 dark:bg-indigo-900"
            name="Sorting"
            id="sorting"
            value={sort}
            onChange={handleSortChange}
            options={SORTING_ALGORITHMS}
          />

          <SelectField
            classes="bg-indigo-200 dark:bg-indigo-900"
            name="ArraySize"
            id="array_size"
            value={size.toString()}
            onChange={handleSizeChange}
            options={SIZES}
          />

          <button onClick={generateNumbers}>Generate</button>
          <button onClick={doSorting}>Sort</button>
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
        <div className="border-2 w-full h-24">
          controll panel Sorting: {sort} Size: {size}
        </div>
        <div className="w-full h-16 border-2 text-center flex justify-center items-center">
          <span className="pl-2">Currently checking:</span>
          <div className={inProgressColor + " border-2 h-6 w-6 mt-1 ml-2"} />

          <span className="pl-2">Wrong place:</span>
          <div className={wrongColor + " border-2 h-6 w-6 mt-1 ml-2"} />

          <span className="pl-2">Good place/Switched:</span>
          <div className={goodColor + " border-2 h-6 w-6 mt-1 ml-2"} />
        </div>
        <div className="w-full h-64 border-2">sort description</div>
      </div>
    </section>
  );
};

export default Sorting;

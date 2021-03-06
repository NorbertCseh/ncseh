import { barElement } from "../types";
import {
  goodColor,
  wrongColor,
  inProgressColor,
  originalColor,
} from "../colors";
import { setTimeoutByNumber } from "./helper";

export const bubbleSorting = async (
  numbers: Array<barElement>,
  setNumbers: Function,
  setIsSorting: Function,
  timeOutInterval: number
) => {
  setIsSorting(true);
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
  setIsSorting(false);
};

export const selectionSort = async (
  numbers: Array<barElement>,
  setNumbers: Function,
  setIsSorting: Function,
  timeOutInterval: number
) => {
  setIsSorting(true);
  let runs = 0;
  let tempArray = [...numbers];
  let temp = 0;

  for (let i = 0; i < numbers.length; i++) {
    let minNumber = 900;
    for (let k = runs; k < numbers.length; k++) {
      if (minNumber > tempArray[k].num) {
        if (temp !== runs - 1) {
          tempArray[temp].sty = originalColor;
          setNumbers([...tempArray]);
        }
        minNumber = tempArray[k].num;
        temp = k;
        tempArray[k].sty = inProgressColor;
        setNumbers([...tempArray]);
        await setTimeoutByNumber(timeOutInterval);
      }
    }
    if (temp === runs) {
      tempArray[runs].sty = goodColor;
      setNumbers([...tempArray]);
    } else {
      tempArray.splice(temp, 1);
      tempArray.splice(runs, 0, { num: minNumber, sty: goodColor });
      setNumbers([...tempArray]);
      await setTimeoutByNumber(timeOutInterval);
    }
    runs++;
  }
  setIsSorting(false);
};

export const insertionSorting = async (
  numbers: Array<barElement>,
  setNumbers: Function,
  setIsSorting: Function,
  timeOutInterval: number
) => {
  setIsSorting(true);
  let tempArray = [...numbers];
  tempArray[0].sty = goodColor;
  setNumbers([...tempArray]);
  await setTimeoutByNumber(timeOutInterval);
  for (let i = 1; i < tempArray.length; i++) {
    let key = tempArray[i].num;
    tempArray[i].sty = inProgressColor;
    setNumbers([...tempArray]);
    let j = i - 1;
    await setTimeoutByNumber(timeOutInterval);
    while (j >= 0 && tempArray[j].num > key) {
      tempArray[j + 1].num = tempArray[j].num;
      tempArray[i].sty = goodColor;
      setNumbers([...tempArray]);
      j = j - 1;
    }
    tempArray[j + 1] = { num: key, sty: goodColor };
    setNumbers([...tempArray]);
    await setTimeoutByNumber(timeOutInterval);
  }
  setIsSorting(false);
};

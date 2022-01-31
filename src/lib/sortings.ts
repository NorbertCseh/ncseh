import { barElement } from "../types";
import {
  goodColor,
  wrongColor,
  inProgressColor,
  originalColor,
} from "../colors";
import { timeOutInterval } from "../constants";
import { setTimeoutByNumber } from "./helper";

export const bubbleSorting = async (
  numbers: Array<barElement>,
  setNumbers: Function,
  setIsSorting: Function
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

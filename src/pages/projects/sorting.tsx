import NextPage from "next";
import { useEffect, useState, useCallback } from "react";

const Sorting = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [size, setSize] = useState(5);

  const generateNumbers = useCallback(() => {
    let rndNumbers: number[] = [];
    for (let i = 0; i < size; i++) {
      rndNumbers.push(Math.floor(Math.random() * 300));
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
          <select className="bg-indigo-900" name="sorting" id="sortin">
            <option value="bubble">Bubble</option>
            <option value="selection">Selection</option>
            <option value="insertion">Insertion</option>
          </select>
          <select className="bg-indigo-900" name="size" id="size">
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <button>Randomize</button>
          <button onClick={generateNumbers}>Generate</button>
        </div>
      </div>
      <div>
        <div className="flex w-full border-2 h-80 justify-center">
          {numbers.map((value, index) => {
            return (
              <div
                key={index}
                className="bg-slate-300 mx-2 mt-2 w-10 text-center text-slate-800"
                style={{ height: `${value}px` }}
              >
                {value}
              </div>
            );
          })}
        </div>
        <div className="border-2 w-full h-24">controll panel</div>
        <div className="w-full h-16 border-2">Color hints</div>
        <div className="w-full h-64 border-2">sort description</div>
      </div>
    </section>
  );
};

export default Sorting;

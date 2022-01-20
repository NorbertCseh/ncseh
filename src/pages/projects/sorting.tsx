import NextPage from "next";
import { useState } from "react";

const Sorting = () => {
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
          <select className="bg-indigo-900" name="size" id="sortin">
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <button>Randomize</button>
        </div>
      </div>
      <div>
        <div className="flex w-full border-2 h-80">
          Sorting will happen here
        </div>
        <div className="border-2 w-full h-24">controll panel</div>
        <div className="w-full h-16 border-2">Color hints</div>
        <div className="w-full h-64 border-2">sort description</div>
      </div>
    </section>
  );
};

export default Sorting;

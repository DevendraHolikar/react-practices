import { useMemo, useRef, useState } from "react";

const UseMemo = () => {
  console.log("---useMemo Components---");

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  // const renderCount = useRef(0)

  const expensiveTask = (num) => {
    //   Expensive calculation function
    console.log("Calculating Expensive Component sum...");
    for (let i = 0; i <= 1000000000; i++) {
      return num * 2;
    }
  };

  // let doubleValue = expensiveTask(input);

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div className="flex  gap-2  justify-center items-center flex-col w-[300px] border-2 border-blue-500 hover:border-purple-500 p-4">
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">
        UseMemo
      </h1>

      <button
        onClick={() => setCount(count + 1)}
        className="w-fit my-4 btn text-white px-2 py-3 bg-gray-700 cursor-pointer"
      >
        Increment
      </button>
      <p className="py-4 text-white">Count: {count}</p>
      <input
        className="p-2 h-10 w-fit text-white border-2 border-gray-400"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p className="py-4 text-white">Double Value {doubleValue}</p>

        {/* <div className="py-4 text-white">Expensive Component Render Count { renderCount.current++ }</div> */}

    </div>
  );
};

export default UseMemo;

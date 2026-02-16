import { useMemo, useState } from "react";

  console.log("---useMemo Components---");

const ExpensiveComponent = () => {
  //   Expensive calculation function
  const sum = () => {
    console.log("Calculating Expensive Component sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  //   const total = sum();
  const total = useMemo(() => sum(), []);

  return <p className="py-4"> sum: {total} </p>;
};

const UseMemo = () => {
    
  const [count, setCount] = useState(0);

  return (
    <div className="text-white ">

      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">UseMemo</h1>

      <ExpensiveComponent />
      <button
        onClick={() => setCount(count + 1)}
       className="w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer"
      >
        Re-render Parent
      </button>
      <p  className="py-4">Parent re-renders: {count}</p>
    </div>
  );
};

export default UseMemo;

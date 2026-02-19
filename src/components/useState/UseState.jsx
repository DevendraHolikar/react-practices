import { useState } from "react";

const UseState = () => {
  console.log("---Count Components---");

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log("onClick handleCount" ,count);
  };
  return (
    <div className="flex justify-center items-center flex-col w-[300px] border-2 border-blue-500 hover:border-purple-500 p-4">
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">useState Count</h1>

        <button className="w-fit my-4 btn text-white px-2 py-3 bg-gray-700 cursor-pointer"  
        onClick={handleCount}>UseState Count {count}</button>
    </div>
  );
};

export default UseState;

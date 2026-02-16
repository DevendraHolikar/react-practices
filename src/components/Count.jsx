import { useState } from "react";

const Count = () => {
  console.log("---Count Components---");

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log("onClick handleCount" ,count);
  };
  return (
    <div className="">
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">useState Count</h1>

        <button className="my-4 btn text-white px-2 py-3 bg-gray-700 cursor-pointer"  
        onClick={handleCount}>useState Count {count}</button>
    </div>
  );
};

export default Count;

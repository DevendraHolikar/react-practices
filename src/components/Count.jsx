import { useState } from "react";

const Count = () => {
  console.log("---Count Components---");

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log("onClick");
  };
  return (
    <div className="">
        <button className="btn text-white px-2 py-3 bg-gray-700 cursor-pointer"  
        onClick={handleCount}>button {count}</button>
    </div>
  );
};

export default Count;

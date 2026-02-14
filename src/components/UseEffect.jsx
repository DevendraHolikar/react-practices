import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  console.log("---useEffect Components---");

  useEffect(() => {
    console.log("Run UseEffect", count);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((pre) => pre + 1);
    }, 10000);
    
    console.log("Run UseEffect setInterval");

    return () => {
      clearInterval(interval);
    };


  }, []);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1 className="text-2xl py-4 text-white">UseEffect</h1>
      <div className="text-white">{seconds}</div>
      <button
        className="btn text-white px-2 py-3 bg-gray-700 cursor-pointer"
        onClick={handleCount}
      >
        button {count}
      </button>
    </div>
  );
};

export default UseEffect;

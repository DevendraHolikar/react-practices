import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [timecount, setTimeCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  console.log("---useEffect Components---");

  useEffect(() => {
    document.title = count;
    console.log("Run UseEffect", count);
  }, [count]);

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        setTimeCount((pre) => pre + 1);
      }, 1000);

      console.log("Run UseEffect setInterval");

      return () => {
        clearInterval(intervalId);
      };
    } else {
      console.log("Stop UseEffect setInterval ");
    }
  }, [isActive]);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex  gap-2  justify-center items-center flex-col w-[300px] border-2 border-blue-500 hover:border-purple-500 p-4">
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">UseEffect</h1>
      <div className="text-white">{timecount}</div>

      {!isActive && (
        <button
          className="btn w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer"
          onClick={() => {
            setIsActive(true);
          }}
        >
          Start count
        </button>
      )}

      {isActive && (
        <button
          className="btn w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer"
          onClick={() => {
            setIsActive(false);
          }}
        >
          Stop display
        </button>
      )}

      <button
        className="btn w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer"
        onClick={handleCount}
      >
        UseEffect count + document title count {count}
      </button>
    </div>
  );
};

export default UseEffect;

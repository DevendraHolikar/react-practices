import { useEffect, useState } from "react";
import Memo from "./Memo";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  // const [title, setTitle] = useState(0);

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
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl py-4 text-white">UseEffect</h1>
      <div className="text-white">{timecount}</div>

      {!isActive && (
        <button
          className="btn w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer"
          onClick={() => {
            setIsActive(true);
          }}
        >
          Start
        </button>
      )}

      {isActive && (
        <button
          className="btn w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer"
          onClick={() => {
            setIsActive(false);
          }}
        >
          Stop
        </button>
      )}

      <button
        className="btn w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer"
        onClick={handleCount}
      >
        UseEffect count {count}
      </button>
      <Memo></Memo>
    </div>
  );
};

export default UseEffect;

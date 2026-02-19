import { useCallback, useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  console.log("---UseCallBack Components---");

  const childRun =  useCallback(()=>{
    alert("UseCallBack Click Run")
  },[childCount])

  return (
    <div className="flex justify-center items-center flex-col w-[300px] border-2 border-blue-500 hover:border-purple-500 p-4">
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">
        UseCallBack
      </h1>
      <button
        className="my-4 btn text-white px-2 py-3 bg-gray-700 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        UseCallBack Count {count}
      </button>

      <button
        className="my-4 ml-4 btn text-white px-2 py-3 bg-gray-700 cursor-pointer"
        onClick={() => setChildCount(childCount + 1)}>
       child UseCallBack Count {childCount}
      </button>

      <UseCallBackChild handle={childRun} childCount={childCount}></UseCallBackChild>
    </div>
  );
};

export default UseCallBack;

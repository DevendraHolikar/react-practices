import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [childValues, SetChildValues] = useState("No data");
  const chidData = (getValue) => {
    SetChildValues(getValue);
    // console.log(getValue.name);
  };

  return (
    <div className="flex justify-center items-center flex-col w-[300px] border-2 border-blue-500 hover:border-purple-500 p-4">
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">
        Parent
      </h1>

      <span className="py-4 text-white">{childValues}</span>

      <Child chidData={chidData}></Child>
    </div>
  );
};

export default Parent;

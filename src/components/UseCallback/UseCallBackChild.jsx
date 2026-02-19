import { useRef } from "react";
import { memo } from "react";

const UseCallBackChild = ({handle}) => {
  console.log("---UseCallBackChild Components---");
  const renderCount = useRef(0);

  return (
    <div className="text-center">
      <p className="py-4 text-white">
        UseCallBack Child Component Render Count {renderCount.current++}
      </p>
      <button className="my-4 btn text-white px-2 py-3 bg-gray-700 cursor-pointer" 
      onClick={handle}>UseCallBack Child Click</button>
    </div>
  );
};

export default memo(UseCallBackChild);

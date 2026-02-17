import { useRef } from "react";
import { memo } from "react";

const UseCallBackChild = () => {

  console.log("---UseCallBackChild Components---");
  const renderCount = useRef(0)

  
  return (
    <p className="py-4 text-white">UseCallBack Child Component Render Count { renderCount.current++ }</p>
  )
}

export default memo(UseCallBackChild) 
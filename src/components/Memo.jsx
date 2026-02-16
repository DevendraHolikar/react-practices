import { useRef } from "react";
import { memo } from "react";

const Memo = () => {

  console.log("---Memo Components---");

  const renderCount = useRef(0)

  return (
    <div> 
        <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">Memo</h1>
        <div className="py-4 text-white">Components Render Count { renderCount.current++ }</div>
    </div>
  )
}

export default memo(Memo) 
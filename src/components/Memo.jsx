import { useRef } from "react";
import { memo } from "react";

const Memo = () => {

  console.log("---Memo Components---");

  const renderCount = useRef(0)

  return (
    <div> 
        <h1 className="text-2xl py-4 text-white">Memo</h1>
        <span className="py-4 text-white">Components Render Count { renderCount.current++ }</span>
    </div>
  )
}

export default memo(Memo) 
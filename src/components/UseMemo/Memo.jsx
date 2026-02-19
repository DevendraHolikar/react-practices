import { useRef } from "react";
import { memo } from "react";

const Memo = () => {
  
  const renderCount = useRef(0)

  return (
    <div className=""> 
        <div className="py-4 text-white">Child Components Render Count { renderCount.current++ }</div>
    </div>
  )
}

export default memo(Memo) 
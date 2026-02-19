import { useState } from "react";
import Memo from "./Memo"
const MemoParent = () => {
    const [count, setCount] = useState(0)

    console.log("---Memo Components---");
    
  return (
    <div className="flex justify-center items-center flex-col w-[300px] border-2 border-blue-500 hover:border-purple-500 p-4">
        <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">Memo</h1>
         <button className="my-4 btn text-white px-2 py-3 bg-gray-700 cursor-pointer"  
        onClick={()=> setCount(count + 1)}>Memo Count {count}</button>
        <Memo  ></Memo>
    </div>
  )
}

export default MemoParent
import UseState from "./UseState/UseState"
import UseEffect from "./UseEffect/UseEffect"
import UseRef from "./UseRef/UseRef"
import MemoParent from "./UseMemo/MemoParent"
import UseMemo from "./UseMemo/UseMemo"
import UseCallBack from "./UseCallback/UseCallBack"
const Body = () => {
  return (
    <div className="w-[90%] m-auto py-6 flex flex-wrap gap-2">
        <UseState></UseState>
        <UseEffect></UseEffect>
        <UseRef></UseRef>
        <MemoParent></MemoParent>
        <UseMemo></UseMemo>
        <UseCallBack></UseCallBack>
    </div>
  )
}

export default Body
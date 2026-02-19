import UseState from "./useState/UseState"
import UseEffect from "./useEffect/UseEffect"
import UseRef from "./useRef/UseRef"
import MemoParent from "./UseMemo/MemoParent"
// import UseMemo from "./UseMemo/UseMemo"
import UseCallBack from "./UseCallback/UseCallBack"
const Body = () => {
  return (
    <div className="w-[90%] m-auto py-6 flex flex-wrap gap-2">
        <UseState></UseState>
        <UseEffect></UseEffect>
        <UseRef></UseRef>
        <MemoParent></MemoParent>
        <UseCallBack></UseCallBack>
    </div>
  )
}

export default Body
import Count from "./Count"
import UseEffect from "./UseEffect"
import UseRef from "./UseRef"
import MemoParent from "./MemoParent"
import UseMemo from "./UseMemo"
import UseCallBack from "./UseCallBack"
const Body = () => {
  return (
    <div className="w-[80%] m-auto py-6">
        <Count></Count>
        <UseEffect></UseEffect>
        <UseRef></UseRef>
        <MemoParent></MemoParent>
        {/* <UseMemo></UseMemo> */}
        <UseCallBack></UseCallBack>
    </div>
  )
}

export default Body
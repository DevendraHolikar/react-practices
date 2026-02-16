import Count from "./Count"
import UseEffect from "./UseEffect"
import UseRef from "./UseRef"
import UseMemo from "./UseMemo"
const Body = () => {
  return (
    <div className="w-[80%] m-auto py-6">
        <Count></Count>
        <UseEffect></UseEffect>
        <UseRef></UseRef>
        <UseMemo></UseMemo>
    </div>
  )
}

export default Body
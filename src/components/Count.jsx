import { useState } from "react";

const Count = () => {
  console.log("count");

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log("onClick");
  };
  return (
    <div>
        <button className="btn" onClick={handleCount}>button {count}</button>
    </div>
  );
};

export default Count;

import { useRef, useState } from "react";

const UseRef = () => {
  console.log("---UseRef Components---");

  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");

  const [display, setDispay] = useState(false);


  const name = useRef(null);
  const last_name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
      setUserName(name.current.value);
      setLastName(last_name.current.value);
      setDispay(true)
    // console.log(name.current.value, last_name.current.value);
  };

  return (
    <div className="flex justify-center items-center flex-col w-[300px] border-2 border-blue-500 hover:border-purple-500 p-4">
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">
        UseRef
      </h1>

      <form
        className="my-4  w-[80] flex flex-col gap-2  justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          ref={name}
          type="text"
          className="p-2 h-10 w-fit text-white border-2 border-gray-400"
        />
        <input
          ref={last_name}
          type="text"
          className="p-2 h-10 w-fit text-white border-2 border-gray-400"
        />
        <button className="w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer">
          Submit 
        </button>
      </form>
      {display && (
        <span className="py-4 text-white">
          Name: {userName}, Last Name: {lastName}
        </span>
      )}
    </div>
  );
};

export default UseRef;

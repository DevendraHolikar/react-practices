import { useRef } from "react";

const UseRef = () => {

  console.log("---UseRef Components---");

  const name = useRef(null);
  const last_name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, last_name.current.value);
  };

  return (
    <div>
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">UseRef</h1>

      <form className="my-4  w-[80] flex flex-col gap-2" onSubmit={handleSubmit}>
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
          submit
        </button>
      </form>
    </div>
  );
};

export default UseRef;

import { useRef } from "react";

const UseRef = () => {
  const name = useRef(null);
  const last_name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value, last_name.current.value);
  };

  return (
    <div>
      <h1 className="text-2xl py-4 text-white">UseRef</h1>

      <form className="w-[80] flex flex-col gap-2" onSubmit={handleSubmit}>
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

import { useRef } from "react";

const Child = (props) => {
  const name = useRef(null);

  console.log(props)
  const handleSubmit = (e) => {
    e.preventDefault();
    props.chidData(name.current.value)
  };

  return (
    <div className="flex justify-center items-center flex-col  p-4">
      <h1 className="w-fit text-2xl py-2 text-white border-b-2 border-blue-500">
        Child
      </h1>
      <form onSubmit={handleSubmit } className="my-4  w-[80] flex flex-col gap-2 justify-center items-center">
        <h3 className="pb-0 text-white">Name</h3>
        <input
          className="p-2 mb-3 h-10 w-fit text-white border-2 border-gray-400"
          type="text"
          ref={name}
        />
        <button className="w-fit text-white px-2 py-3 bg-gray-700 cursor-pointer">Send to Parent</button>
      </form>

    </div>
  );
};

export default Child;

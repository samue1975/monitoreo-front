import { useState } from "react";
import { BsPostcard } from "react-icons/bs";
import { IoIosList } from "react-icons/io";

const Switching = ({ cambio }) => {
  const [mover, setMover] = useState(false);
  const Moviendo = () => {
    setMover(!mover);
  };

  return (
    <div className="shadow w-24 rounded h-10 flex justify-between p-1 relative items-center bg-[#292929]">
      <div className="w-full flex justify-center">
        <button
          onClickCapture={cambio}
          onClick={Moviendo}
          className="text-2xl text-white"
        >
          <IoIosList />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClickCapture={cambio}
          onClick={Moviendo}
          className="text-2xl text-white"
        >
          <BsPostcard />
        </button>
      </div>
      <span
        onClickCapture={cambio}
        onClick={Moviendo}
        className={`bg-white shadow cursor-pointer text-gray-800 flex items-center justify-center w-1/2 rounded h-8 transition-all top-[4px] absolute ${
          mover ? "left-1" : "left-11 max-sm:left-8"
        }`}
      ></span>
    </div>
  );
};

export default Switching;

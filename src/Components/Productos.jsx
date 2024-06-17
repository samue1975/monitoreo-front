import { TbListDetails } from "react-icons/tb";

const Productos = () => {
  return (
    <div className="border rounded-2xl flex flex-col w-52 h-60 shadow cursor-pointer bg-[#f6f6f6] hover:bg-[#393939] hover:text-white flex justify-around">
      <div className="h-40 flex justify-center">
        <img
          className="h-full"
          src="https://cdn.pixabay.com/photo/2013/07/13/13/46/computer-161501_1280.png"
        />
      </div>
      <div className="flex justify-between items-end p-4">
        <div className="flex flex-col flex-wrap w-full">
          <h1 className="text-base">Servidor Rack</h1>
          <p className="text-sm">Equipo</p>
        </div>
        <div className="hover:text-[#d2d2d2]">
          <TbListDetails />
        </div>
      </div>
    </div>
  );
};

export default Productos;

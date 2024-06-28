import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";


// eslint-disable-next-line react/prop-types
const Productos = ({ foto, titulo, descripcion, idCodProd, deleteData }) => {
  return (
    <div className="border rounded-2xl flex flex-col w-52 h-60 shadow cursor-pointer bg-[#f6f6f6] hover:bg-[#393939] hover:text-white justify-around">
      <div className="h-40 flex justify-center">
        <img className="h-full saturate-0" src={foto} />
      </div>
      <div className="flex justify-between items-end p-4">
        <div className="flex flex-col flex-wrap w-full">
          <h1 className="text-base">{titulo}</h1>
          <p className="text-sm">{descripcion}</p>
        </div>
        <button className="hover:text-[#d2d2d2]">
          <Link to={`/Catalogo/${idCodProd}`}>
            <TbListDetails />
          </Link>
        </button>
        <button className="hover:text-[#d2d2d2]" onClick={deleteData(idCodProd)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Productos;

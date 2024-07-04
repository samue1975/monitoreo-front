import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Productos = ({ foto, titulo, descripcion, idCodProd, deleteData }) => {
  return (
    <div
      className={`border rounded-2xl flex flex-col w-52 max-sm:w-[46%] max-[365px]:w-[70%] max-sm:h-[170px] h-60 shadow cursor-pointer bg-[#f6f6f6] hover:bg-[#393939] hover:text-white justify-around`}
    >
      <div className="h-40 max-sm:h-[70px] flex justify-center">
        <img className="h-full saturate-0" src={foto} />
      </div>
      <div className="flex justify-between items-end p-4 max-sm:p-0 max-sm:px-2">
        <div className="flex flex-col w-full justify-center">
          <h1 className="text-base max-sm:text-[11px]">{titulo}</h1>
          <p className="text-sm max-sm:text-[9px]">{descripcion}</p>
        </div>
        <button className="hover:text-[#d2d2d2] max-sm:text-[15px]">
          <Link to={`/Catalogo/${idCodProd}`}>
            <TbListDetails />
          </Link>
        </button>
        {idCodProd && (
          <button
            className="hover:text-[#d2d2d2] max-sm:text-[15px]"
            onClick={async () => {
              const accepted = window.confirm(
                "Estas seguro que quieres eliminar esta tarea"
              );
              if (accepted) {
                await deleteData(idCodProd);
              }
            }}
          >
            <MdDelete />
          </button>
        )}
      </div>
    </div>
  );
};

export default Productos;

import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const ProductoLista = ({
  bgcolor,
  foto,
  titulo,
  codigo,
  idCodProd,
  deleteData,
}) => {
  return (
    <div className={`w-full flex justify-between py-2 items-center ${bgcolor} max-sm:min-w-full`}>
      {/* CUADRO DE IMAGEN */}
      <div className="w-[5%] h-full flex justify-center max-sm:min-w-max">
        <img
          className="max-w-10 min-h-full bg-center bg-cover saturate-0"
          src={foto}
        />
      </div>
      {/* TITULO */}
      <div className="w-[22%] h-full flex items-center overflow-hidden max-sm:min-w-max">
        <h1 className="font-medium whitespace-nowrap overflow-hidden text-ellipsis px-1">
          {codigo}
        </h1>
      </div>
      {/* DESCRIPCION */}
      <div className="w-[55%] h-full flex items-center overflow-hidden max-sm:min-w-max">
        <p className="whitespace-nowrap overflow-hidden text-ellipsis px-1 font-light uppercase">
          {titulo}
        </p>
      </div>
      {/* OPCIONES */}
      <div className="w-[18%] h-full flex items-center gap-1 max-sm:min-w-max">
        <Link to={`/Catalogo/${idCodProd}`} className="max-sm:min-w-max text-center h-full w-1/2 bg-[#292929] text-white p-2">
          Detalles
        </Link>
        {idCodProd && (
          <button
            className="h-full w-1/2 bg-[#292929] text-white"
            onClick={async () => {
              const accepted = window.confirm(
                "Estas seguro que quieres eliminar esta tarea"
              );
              if (accepted) {
                await deleteData(idCodProd);
              }
            }}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductoLista;

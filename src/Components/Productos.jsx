import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Productos = ({elSwitch, foto, titulo, descripcion, idCodProd, deleteData }) => {
  return (
    <div className="w-64 max-[600px]:w-full h-28 bg-[#f6f6f6] flex">
      {/* CUADRO DE IMAGEN */}
      <img
        className="min-w-28 min-h-full bg-center bg-cover border border-black saturate-0"
        src={foto}
      />
      {/* PARTE DERECHA */}
      <div className="flex flex-col justify-between border border-black border-l-0 pt-1 hover:bg-[#292929] hover:text-white w-full">
        {/* TITULO Y DESCRIPCION */}
        <div className="flex flex-col pl-1">
          <h1 className="text-sm font-medium overflow-hidden text-overflow:ellipsis line-clamp-1 uppercase">
            {titulo}
          </h1>
          <p className="text-xs font-light pl-2 overflow-hidden text-overflow:ellipsis line-clamp-3">
            {descripcion}
          </p>
        </div>
        {/* OPCIONES */}
        <div className="flex border-t w-full">
          <button className="w-1/2 bg-[#292929] text-white text-sm py-[2px] border-r">
            <Link to={`/Catalogo/${idCodProd}`}>Detalles</Link>
          </button>

          {idCodProd && (
            <button
              className="w-1/2 bg-[#292929] text-white text-sm py-[2px]"
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
    </div>
  );
};

export default Productos;

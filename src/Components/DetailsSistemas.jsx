import { Link } from "react-router-dom";
import Identificador from "./Identificador";

const DetailsSistemas = () => {
  return (
    <div className="col-span-5 flex flex-col justify-center pt-12 pb-4">
      {/* IDENTIIFICADOR DE LA PAGINA EN LA QUE ESTA */}
      <Identificador titulo={`DETALLES DE ANSU-700`} />
      {/* TODO LO DE ABAJO */}
      <div className="flex flex-col gap-16">
        {/* LOS TRES BOTONES DE ARRIBA */}
        <div className="w-full flex flex-wrap justify-around gap-3">
          <Link
            className="bg-black shadow px-2 py-1 border rounded-xl font-medium text-white"
            to={"/OrdenTrabajoEA"}
          >
            ORDEN DE TRABAJO
          </Link>
          <Link
            className="bg-gray-400 shadow px-2 py-1 border rounded-xl font-medium text-white"
            to={"/SolicitudDespachoEA"}
          >
            SOLICITUD DE DESPACHO
          </Link>
          <Link
            className="bg-white shadow px-2 py-1 border rounded-xl font-medium"
            to={"/OrdenDespachoEA"}
            a
          >
            ORDEN DE DESPACHO
          </Link>
        </div>
        {/* LA FOTO Y EL TITULO DEL SISTEMA */}
        <div className="w-full flex flex-col items-center gap-2">
          <div className="w-72 h-72 border-2 relative">
            {/* SOLAMENTE EL BOTON DE REGRESAR HACIA ATRAS */}
            <Link
              to={"/SistemasEA"}
              className="absolute bg-white px-1 top-[-2px] left-[-2px] border-2 hover:bg-slate-50"
            >
              Regresar
            </Link>
            {/* LA FOTO QUE SE MUESTRA */}
            <img
              className="object-cover object-center min-w-full min-h-full"
              src="airplane-icon.svg"
            />
          </div>
          {/* EL TITULO DEL SISTEMA */}
          <h1 className="text-2xl font-medium">ANSU-700</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailsSistemas;

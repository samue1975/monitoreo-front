/* eslint-disable react/prop-types */
import useMethodGet from "../api/useMethodGet";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router";
import { LuPencilLine } from "react-icons/lu";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { catalogoDetalles } from "../Logic/ConsUrls";
import Identificador from "./Identificador";
/* import ContinuousModel from "echarts/types/src/component/visualMap/ContinuousModel.js";
 */

const Details = () => {
  const { id } = useParams();
  const { data } = useMethodGet(`${catalogoDetalles}${id}`);

  return (
    <>
      <div className="col-span-5 flex justify-center pt-12 pb-4">
                  
        {data ? (
          <div className="border rounded-2xl flex flex-col w-2/4 max-sm:w-full shadow bg-white justify-around max-sm:overflow-auto">
            <Identificador titulo={`DETALLES DE ${data.nombre}`} />
            {/* FLECHA PARA IR HACIA ATRAS */}
            <div className="flex justify-between items-start">
              <Link className="px-10 p-2 flex items-center rounded-tl-2xl rounded-br-2xl text-[#292929] justify-center gap-1 border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:border-transparent h-full" to={"/Catalogo"}>
                <BiArrowBack className="cursor-pointer text-xl" />
              </Link>
              <Link
                className="px-10 p-2 flex items-center rounded-tr-2xl rounded-bl-2xl text-[#292929] justify-center gap-1 border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:border-transparent"
                to={`/Catalogo/${id}/Modificar`}
              >
                <span>Modificar</span>
                <LuPencilLine className="cursor-pointer text-xl size-4" />
              </Link>
            </div>
            <div className="h-40 flex justify-center">
              <img
                className="h-full saturate-0"
                src={`../../public/${data.codE.replace(/ /g, "")}.png`}
              />
            </div>
            <div className="flex justify-between items-end p-4 max-sm:px-0">
              <div className="flex flex-col flex-wrap w-full px-10">
                <h1 className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Nombre:</span>
                  {data.nombre}
                </h1>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Cantidad:</span>
                  {data.cantidad}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Código OACI:</span>
                  {data.codOaci}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Identificación:</span>
                  {data.codE}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Departamento:</span>
                  {data.codFg}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">
                    Sector De Investigación:
                  </span>
                  {data.codHi}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Línea de Investigación:</span>
                  {data.codJk}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Proveedores:</span>
                  {data.codSu}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">ID Cronológica:</span>
                  {data.codLmnop}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Descripción:</span>
                  {data.descrip}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Código de Barra:</span>
                  {data.codBarra}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Código del Sistema:</span>
                  {data.codSistema}
                </p>
                <p className="text-base flex flex-wrap gap-4">
                  <span className="font-semibold">Código:</span>
                  {data.codigo}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center items-center col-span-3">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default Details;

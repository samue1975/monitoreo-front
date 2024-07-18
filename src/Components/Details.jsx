/* eslint-disable react/prop-types */
import useMethodGet from "../api/useMethodGet";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router";
import { LuPencilLine } from "react-icons/lu";
import { Link } from "react-router-dom";
/* import ContinuousModel from "echarts/types/src/component/visualMap/ContinuousModel.js";
 */

const Details = () => {
  const { id } = useParams();
  const { data } = useMethodGet(
    `http://192.168.0.195:80/api/Catalogo/Detalles/${id}`
  );

  console.log(data);

  return (
    <>
      {data && (
        <div
          className={`border rounded-2xl flex flex-col w-2/4 max-sm:w-full top-0 bottom-0 left-0 right-0 m-auto shadow bg-white justify-around fixed max-sm:overflow-auto `}
        >
          {/* FLECHA PARA IR HACIA ATRAS */}
          <div className="flex justify-between items-center max-sm:px-4">
            <Link className="px-10 max-sm:px-4 p-2" to={"/Catalogo"}>
              <BiArrowBack className="cursor-pointer max-sm:absolute top-16 text-xl text-[#292929] size-4" />
            </Link>
            <Link
              className="px-10 p-2 flex items-center rounded-tr-2xl rounded-bl-2xl text-[#292929] justify-center gap-1 border-[1px] border-gray-400 hover:bg-gray-800 hover:text-white hover:border-transparent"
              to={`/Catalogo/${id}/Modificar`}
            >
              <span>Modificar</span>
              <LuPencilLine className="cursor-pointer text-xl  size-4" />
            </Link>
          </div>
          <div className="h-40 flex justify-center">
            <img
              className="h-full saturate-0"
              src={`../../public/${data[0].codE.replace(/ /g, "")}.png`}
            />
          </div>
          <div className="flex justify-between items-end p-4 max-sm:px-0">
            <div className="flex flex-col flex-wrap w-full px-10">
              <h1 className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Nombre:</span>
                {data[0].nombre}
              </h1>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Cantidad:</span>
                {data[0].cantidad}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Código OACI:</span>
                {data[0].codOaci}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Identificación:</span>
                {data[0].codE}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Departamento:</span>
                {data[0].codFg}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Sector De Investigación:</span>
                {data[0].codHi}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Línea de Investigación:</span>
                {data[0].codJk}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Proveedores:</span>
                {data[0].codSu}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">ID Cronológica:</span>
                {data[0].codLmnop}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Descripción:</span>
                {data[0].descrip}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Código de Barra:</span>
                {data[0].codBarra}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Código del Sistema:</span>
                {data[0].codSistema}
              </p>
              <p className="text-base flex flex-wrap gap-4">
                <span className="font-semibold">Código:</span>
                {data[0].codigo}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;

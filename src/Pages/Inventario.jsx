import { IoIosAdd } from "react-icons/io";
import BodyTable from "../Components/BodyTable";
import { Link } from "react-router-dom";
import Busqueda from "../Components/Busqueda";

const Inventario = () => {
  return (
    <div className="col-span-5 pt-4">
      {/* Apartado de busqueda y botones */}
      <div className="px-8 pt-8 flex flex-wrap justify-between">
        <Busqueda />
        {/* Botones */}
        <div className="flex flex-wrap items-center gap-4">
          <select className="border-[1px] border-[#292929] rounded-xl p-2 outline-none border-none bg-[#292929] text-white">
            <option value="">Identificación</option>
            <option value="E">Equipo</option>
            <option value="C">Componente</option>
            <option value="P">Parte</option>
            <option value="M">Materia Prima</option>
            <option value="S">Consumible</option>
            <option value="H">Herramienta</option>
          </select>

          <Link
            className="flex flex-wrap items-end bg-[#292929] text-white hover:bg-white hover:text-black border-[1px] border-[#292929] p-2 rounded-xl cursor-pointer"
            to={"/AddInventario"}
          >
            Agregar <IoIosAdd className="text-2xl" />
          </Link>
        </div>
      </div>
      {/* component */}
      <div className="p-8 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            {/* HEAD TABLE */}
            <thead className=" bg-[#292929] text-white min-w-full">
              <tr>
                <th className="text-center py-3 uppercase font-semibold text-sm">
                  NOMBRE
                </th>
                <th className="text-center py-3 uppercase font-semibold text-sm">
                  DESCRIPCIÓN
                </th>
                <th className="text-center py-3 uppercase font-semibold text-sm">
                  CÓDIGO DEL SISTEMA
                </th>
                <th className="text-center py-3 uppercase font-semibold text-sm">
                  LOTE
                </th>
                <th className="text-center py-3 uppercase font-semibold text-sm">
                  CANTIDAD
                </th>
                <th className="text-center py-3 uppercase font-semibold text-sm">
                  EDITAR
                </th>
              </tr>
            </thead>
            {/* BODY TABLE */}
            <tbody className="text-gray-700 min-w-full">
              <BodyTable
                cod_nombre={"Barra de Acero"}
                cod_descripcion={
                  "Materia prima para la fabricación de un motor"
                }
                cod_sistema={"OACI-M-PF-17-07-025-245487487-AG254"}
                cod_lote={"52245"}
                cod_cantidad={"144"}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventario;

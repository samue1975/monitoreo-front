import { Link } from "react-router-dom";
import Busqueda from "../Components/Busqueda";
import ProveedorTablaBody from "../Components/ProveedorTablaBody";
import { IoIosAdd } from "react-icons/io";

const Proveedores = () => {
  return (
    <div className="col-span-5 pt-4 overflow-x-auto md:overflow-x-hidden">
      {/* Apartado de busqueda y botones */}
      <div className="px-8 pt-8 flex max-sm:gap-4 flex-wrap justify-between">
        <Busqueda />

        {/* Boton agregar */}
        <Link
          className="flex flex-wrap items-end bg-[#292929] text-white hover:bg-white hover:text-black border-[1px] border-[#292929] p-2 rounded-xl cursor-pointer"
          to={"/AddProveedores"}
        >
          Agregar <IoIosAdd className="text-2xl" />
        </Link>
      </div>

      {/* COMPONENTE */}
      <div className="py-8 w-full flex justify-center items-center">
        <div className="shadow overflow-hidden rounded border-b border-gray-200 flex flex-col gap-4 justify-center items-center w-full px-8">
          <div className="max-w-[100%] max-sm:min-w-[90%] max-sm:overflow-x-scroll scrollbar-thin w-full">
            <table className="min-w-full bg-white">
              {/* HEAD TABLE */}
              <thead className="bg-[#292929] text-white">
                <tr>
                  <th className="text-center uppercase py-3 font-semibold text-sm px-2">
                    Nombre
                  </th>
                  <th className="text-center uppercase py-3 font-semibold text-sm px-2">
                    Rif
                  </th>
                  <th className="text-center uppercase py-3 font-semibold text-sm px-2">
                    Ubicacion
                  </th>
                  <th className="text-center uppercase py-3 font-semibold text-sm px-2">
                    Telefono
                  </th>
                  <th className="text-center uppercase py-3 font-semibold text-sm px-2">
                    Email
                  </th>
                  <th className="text-center uppercase py-3 font-semibold text-sm px-2">
                    Codigo
                  </th>
                </tr>
              </thead>
              {/* BODY TABLE */}
              <ProveedorTablaBody
                nombre={"Empresas Polar"}
                rif={"J-58583840-7"}
                ubicacion={"Av. Aragua, sector centro, calle carmen campos"}
                telefono={"0243-2724571"}
                email={"empresaspolarvzla@gmail.com"}
                codigo={"001"}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;

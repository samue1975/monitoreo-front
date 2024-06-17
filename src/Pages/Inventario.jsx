import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import HeadTable from "../Components/HeadTable";
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
          <div className="flex flex-wrap items-end bg-[#292929] text-white p-2 rounded-xl cursor-pointer">
            <p>Lo mas vendido</p>
            <IoIosArrowDown />
          </div>
          <div className="flex flex-wrap items-end bg-[#292929] text-white p-2 rounded-xl gap-2">
            <p>Filter:</p>
            <input
              className=" outline-none border-none bg-transparent w-14"
              type="text"
              placeholder="NO ID"
            />
            <IoIosArrowDown className=" cursor-pointer" />
          </div>

          <Link
            className="flex flex-wrap items-end bg-[#292929] text-white p-2 rounded-xl cursor-pointer"
            to={"/AddMaterial"}
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
              <HeadTable />
            </thead>
            {/* BODY TABLE */}
            <tbody className="text-gray-700 min-w-full">
              <BodyTable
                cod_oaci={"OACI"}
                cod_e={"Equipo"}
                cod_fg={"Departamento"}
                cod_hi={"05"}
                cod_jk={"50"}
                cod_su={"004"}
                cod_lmnop={"AE482"}
                descripcion={"Tornillo"}
                cod_barra={"A882AD2"}
                cod_sistema={"9923832"}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventario;

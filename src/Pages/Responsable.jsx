import { Link } from "react-router-dom";
import Busqueda from "../Components/Busqueda";
import { IoIosAdd } from "react-icons/io";
import TablaResponsable from "../Components/TablaResponsable";
import { useState } from "react";
import useMethodFilter from "../api/useMethodFilter";
import { ResponsableList } from "../Logic/ConsUrls";
import "../assets/css/shadow.css";
import Identificador from "../Components/Identificador";

const Responsable = () => {
  const [cambio, setCambio] = useState(false);

  const { resultsId } = useMethodFilter(`${ResponsableList}`, cambio);
  console.log(resultsId);

  return (
    <div className="col-span-5 pt-4 px-8 pb-8 overflow-x-auto md:overflow-x-hidden">
      <Identificador titulo={"RESPONSABLE"} />
      {/* APARTADO DE BUSQUEDA Y DE BOTONES */}
      <div className="flex flex-wrap max-sm:gap-4 justify-between pt-8">
        <Busqueda />
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#292929] text-white hover:bg-[#f6f6f6] hover:text-[#292929] shadow px-2 py-1 border rounded-xl">
            <Link className="flex flex-wrap items-end" to={"/AddResponsable"}>
              Agregar <IoIosAdd className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
      {/* PRODUCTOS */}
      <div className="pt-8 flex flex-col gap-6">
        <TablaResponsable />
      </div>
    </div>
  );
};

export default Responsable;

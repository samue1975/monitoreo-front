import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Identificador from "../Identificador";

const AddSistemasEA = () => {
  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center max-sm:px-4 pt-12 pb-4">
      <Identificador titulo={"AGREGAR SISTEMA"} />
      {/* TODO EL FORMULARIO */}
      <form className="py-4 px-20 max-sm:px-8 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm max-sm:min-w-full border-[1px]">
        {/* FLECHA PARA IR HACIA ATRAS */}
        <Link className="text-xl text-[#292929] size-4" to={"/Sistemas"}>
          <BiArrowBack />
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Nombre:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="text"
            />
          </div>
          <div className="flex flex-wrap justify-around py-6">
            <button className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer">
              Cancelar
            </button>
            <button className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer">
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSistemasEA;

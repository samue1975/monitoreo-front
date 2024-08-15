import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const AddSistemas = () => {
  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center h-screen max-sm:px-4">
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
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Cantidad:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="number"
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Taller:</p>
            <select className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]">
              <option value=""></option>
              <option value="MC">Material Compuesto</option>
              <option value="E">Ensamblaje</option>
              <option value="EA">Ensamblaje Avionica</option>
              <option value="IP">Integracion y Prueba</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Responsable:</p>
            <select className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]">
              <option value=""></option>
              <option value="JP">Jose Perez</option>
              <option value="AJ">Andres Jose</option>
              <option value="MF">Maria Fernanda</option>
              <option value="PL">Paola Lopez</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSistemas;

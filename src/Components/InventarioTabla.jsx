import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const InventarioTabla = () => {
  return (
    <div className="col-span-5 flex flex-wrap col-span-5 justify-center h-screen">
      <form
        className="py-4 px-20 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm border-[1px]"
        action=""
      >
        {/* FLECHA PARA IR HACIA ATRAS */}
        <Link className="text-xl text-[#292929] size-4" to={"/Inventario"}>
          <BiArrowBack />
        </Link>
        {/* TODO EL FORULARIO */}
        <div className="flex  flex-col">
          <div className="flex flex-wrap gap-4 justify-end">
            <p className="font-semibold">Código OACI:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-52"
              type="text"
              value="VZLA"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default InventarioTabla;

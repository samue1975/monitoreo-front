import { BiSearch } from "react-icons/bi";

const Busqueda = () => {
  return (
    <div className="flex items-center gap-2 border-[1px] border-[#292929] justify-start rounded-xl flex-wrap px-4">
      <button>
        <BiSearch className="text-2xl text-[#292929]" />
      </button>
      <input
        className="py-2 outline-none border-none "
        placeholder="Buscar..."
        type="search"
      />
    </div>
  );
};

export default Busqueda;

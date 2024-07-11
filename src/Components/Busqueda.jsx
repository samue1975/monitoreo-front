import { BiSearch } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const Busqueda = ({ searcher }) => {
  return (
    <div className="flex items-center gap-2 border-[1px] border-[#292929] justify-start rounded-xl px-4 max-sm:px-2 max-sm:w-full">
      <button>
        <BiSearch className="text-2xl text-[#292929]" />
      </button>
      <input
        className="py-2 outline-none border-none max-sm:w-full"
        placeholder="Buscar..."
        type="search"
        onChange={e => searcher(e.target.value)}
      />
    </div>
  );
};

export default Busqueda;

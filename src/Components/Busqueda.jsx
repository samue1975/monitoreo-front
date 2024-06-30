import { BiSearch } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const Busqueda = ({ searcher }) => {
  return (
    <div className="flex items-center gap-2 border-[1px] border-[#292929] justify-start rounded-xl px-4">
      <button>
        <BiSearch className="text-2xl text-[#292929]" />
      </button>
      <input
        className="py-2 outline-none border-none "
        placeholder="Buscar..."
        type="search"
        onChange={e => searcher(e.target.value)}
      />
    </div>
  );
};

export default Busqueda;

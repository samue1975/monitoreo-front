import Busqueda from "../Components/Busqueda";
import Productos from "../Components/Productos";

const Almacen = () => {
  return (
    <div className="col-span-5 pt-4 px-8">
      {/* APARTADO DE BUSQUEDA Y DE BOTONES */}
      <div className="flex flex-wrap justify-between pt-8">
        <Busqueda />
        <div className="flex flex-wrap gap-4">
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Equipo
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Componente
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Parte
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Materia Prima
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Consumible
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Herramienta
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Todo
          </button>
        </div>
      </div>
      <div className="pt-8 flex flex-wrap gap-6 grid grid-cols-6">
        <Productos />
        <Productos />
        <Productos />
        <Productos />
        <Productos />
        <Productos />
        <Productos />
        <Productos />
        <Productos />
        <Productos />
        <Productos />
        <Productos />
      </div>
    </div>
  );
};

export default Almacen;

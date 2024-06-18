import Busqueda from "../Components/Busqueda";
import Productos from "../Components/Productos";

const Catalogo = () => {
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
      <div className="pt-8 flex-wrap gap-6 grid grid-cols-5">
        <Productos
          foto={
            "https://pngimg.com/uploads/server/server_PNG23.png"
          }
          titulo={"Servidor Rack"}
          descripcion={"Equipo"}
        />
        <Productos
          foto={
            "https://www.pngall.com/wp-content/uploads/10/Motor-PNG-File.png"
          }
          titulo={"Motor"}
          descripcion={"Componente"}
        />
        <Productos
          foto={
            "https://gmb.net/wp-content/uploads/2021/09/DSC05370-1-e1631634148806-450x346.png"
          }
          titulo={"Correa de Dist"}
          descripcion={"Parte"}
        />
        <Productos
          foto={
            "https://laminas.com.mx/wp-content/uploads/2019/11/varilla-corrugada-300x223.png"
          }
          titulo={"Barra de Acero"}
          descripcion={"Materia Prima"}
        />
        <Productos
          foto={
            "https://www.pngall.com/wp-content/uploads/5/Motor-Oil-PNG-High-Quality-Image.png"
          }
          titulo={"Aceite de Motor"}
          descripcion={"Consumible"}
        />
        <Productos
          foto={
            "https://www.unionferretera.com/37127-large_default/llave-ajustable-irimo.jpg"
          }
          titulo={"Llave Inglesa"}
          descripcion={"Herramienta"}
        />
      </div>
    </div>
  );
};

export default Catalogo;

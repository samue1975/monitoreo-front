import { IoIosAdd } from "react-icons/io";
import Busqueda from "../Components/Busqueda";
import { Link } from "react-router-dom";
import ProductosSistema from "../Components/ProductosSistema";
import "../assets/css/home.css";

const Sistemas = () => {
  return (
    <div className="col-span-5 pt-4 px-8 pb-8">
      {/* APARTADO DE BUSQUEDA Y DE BOTONES */}
      <div className="flex flex-wrap max-sm:gap-4 justify-between pt-8">
        <Busqueda />
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[rgb(41,41,41)] text-white hover:bg-[#f6f6f6] hover:text-[#292929] shadow px-2 py-1 border rounded-xl">
            <Link className="flex flex-wrap items-end" to={"/AddSistema"}>
              Agregar <IoIosAdd className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
      {/* PRODUCTOS */}
      <div className="pt-8 gridresponsive">
        <ProductosSistema />
        <ProductosSistema />
        <ProductosSistema />
        <ProductosSistema />
        <ProductosSistema />
        <ProductosSistema />
        <ProductosSistema />
        <ProductosSistema />
        <ProductosSistema />
      </div>
    </div>
  );
};

export default Sistemas;

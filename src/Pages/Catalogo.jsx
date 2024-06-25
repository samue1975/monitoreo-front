import { IoIosAdd } from "react-icons/io";
import Busqueda from "../Components/Busqueda";
import Productos from "../Components/Productos";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const Catalogo = ({
  Nombre,
  Cantidad,
  CodOaci,
  CodE,
  CodFg,
  CodHi,
  CodJk,
  CodSu,
  CodLmnop,
  Descrip,
  CodBarra,
  CodSistema,
  Codigo,
}) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

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
          <button className="bg-[#292929] text-white hover:bg-[#f6f6f6] hover:text-[#292929] shadow px-2 py-1 border rounded-xl">
            <Link className="flex flex-wrap items-end" to={"/AddMaterial"}>
              Agregar <IoIosAdd className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
      <div className="pt-8 flex-wrap gap-6 grid grid-cols-5">
        <Productos
          foto={"https://pngimg.com/uploads/server/server_PNG23.png"}
          titulo={"Servidor Rack"}
          descripcion={"Equipo"}
          open={toggleMenu}
        />
        <Productos
          foto={
            "https://www.pngall.com/wp-content/uploads/10/Motor-PNG-File.png"
          }
          titulo={"Motor"}
          descripcion={"Componente"}
          open={toggleMenu}
        />
        <Productos
          foto={
            "https://gmb.net/wp-content/uploads/2021/09/DSC05370-1-e1631634148806-450x346.png"
          }
          titulo={"Correa de Dist"}
          descripcion={"Parte"}
          open={toggleMenu}
        />
        <Productos
          foto={
            "https://laminas.com.mx/wp-content/uploads/2019/11/varilla-corrugada-300x223.png"
          }
          titulo={"Barra de Acero"}
          descripcion={"Materia Prima"}
          open={toggleMenu}
        />
        <Productos
          foto={
            "https://www.pngall.com/wp-content/uploads/5/Motor-Oil-PNG-High-Quality-Image.png"
          }
          titulo={"Aceite de Motor"}
          descripcion={"Consumible"}
          open={toggleMenu}
        />
        <Productos
          foto={
            "https://www.unionferretera.com/37127-large_default/llave-ajustable-irimo.jpg"
          }
          titulo={"Llave Inglesa"}
          descripcion={"Herramienta"}
          open={toggleMenu}
        />
      </div>
      <div
        className={` ${
          open ? "block" : "hidden"
        } border rounded-2xl flex flex-col w-2/4  top-0 bottom-0 left-0 right-0 m-auto shadow bg-white justify-around fixed`}
      >
        {/* FLECHA PARA IR HACIA ATRAS */}
        <span className="px-10">
          <BiArrowBack
            onClick={toggleMenu}
            className="cursor-pointer text-xl text-[#292929] size-4"
          />
        </span>
        <div className="h-40 flex justify-center">
          <img
            className="h-full"
            src={
              "https://laminas.com.mx/wp-content/uploads/2019/11/varilla-corrugada-300x223.png"
            }
          />
        </div>
        <div className="flex justify-between items-end p-4">
          <div className="flex flex-col flex-wrap w-full px-10">
            <h1 className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Nombre:</p>
              {Nombre}
            </h1>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Cantidad:</p>
              {Cantidad}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Código OACI:</p>
              {CodOaci}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Identificación:</p>
              {CodE}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Departamento:</p>
              {CodFg}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Sector De Investigación:</p>
              {CodHi}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Línea de Investigación:</p>
              {CodJk}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Proveedores:</p>
              {CodSu}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">ID Cronológica:</p>
              {CodLmnop}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Descripción:</p>
              {Descrip}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Código de Barra:</p>
              {CodBarra}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Código del Sistema:</p>
              {CodSistema}
            </p>
            <p className="text-base flex flex-wrap gap-4">
              <p className="font-semibold">Código:</p>
              {Codigo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;

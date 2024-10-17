import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
import Identificador from "../Identificador";

const AddResponsable = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [taller, setTaller] = useState("");
  const [gradoInstruccion, setGradoInstruccion] = useState("");
  const [codigo, setCodigo] = useState("");

  const manejarCambioCedula = (event) => {
    const nuevoValor = event.target.value;
    const valorNumerico = nuevoValor.replace(/[^0-9]/g, "");
    setCedula(valorNumerico);
  };

  const manejarTeclaPresionada = (event) => {
    if (event.key === "-" || event.key === "+" || event.key === "e" || event.key === ".") {
      event.preventDefault();
    }
  };

  // Generar código automáticamente cada vez que cambian el nombre, apellido o cédula
  useEffect(() => {
    const generarCodigo = () => {
      const primeraLetraNombre = nombre.charAt(0).toUpperCase() || "";
      const primeraLetraApellido = apellido.charAt(0).toUpperCase() || "";
      const ultimosTresDigitosCedula = cedula.slice(-3) || "";
      return `${primeraLetraNombre}${primeraLetraApellido}${ultimosTresDigitosCedula}`;
    };
    setCodigo(generarCodigo());
  }, [nombre, apellido, cedula]);

  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center max-sm:px-4 pt-12 pb-4">
      <Identificador titulo={"AGREGAR RESPONSABLE"} />
      <form className="py-4 px-20 max-sm:px-8 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm max-sm:min-w-full border-[1px]">
        <Link className="text-xl text-[#292929] size-4" to={"/Responsable"}>
          <BiArrowBack />
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Nombre:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Apellido:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Cedula:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="number"
              value={cedula}
              onChange={manejarCambioCedula}
              onKeyDown={manejarTeclaPresionada}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Telefono:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Taller:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="text"
              value={taller}
              onChange={(e) => setTaller(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Grado de Instrucción:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="text"
              value={gradoInstruccion}
              onChange={(e) => setGradoInstruccion(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Código:</p>
            <input
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              type="text"
              value={codigo}
              readOnly
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

export default AddResponsable;

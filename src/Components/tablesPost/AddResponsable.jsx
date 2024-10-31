import { Link, Navigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
import Identificador from "../Identificador";
import { ResponsableAgregar } from "../../Logic/ConsUrls";
import { useForm } from "react-hook-form";
import useMethodPost from "../../api/useMethodPost";
import Loader from "../Loader";
import ErrorMsg from "../ErrorMsg";

// eslint-disable-next-line react/prop-types
const AddResponsable = ({ setSuccess }) => {
  //useState
  const [data, setData] = useState();
  const [send, setSend] = useState(true);

  //Hook useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Para observar los cambios en los valores de los campos
    setValue, // Para establecer valores manualmente
  } = useForm();

  //method Post
  const { success } = useMethodPost(data, `${ResponsableAgregar}`);

  // Observar los valores de los campos necesarios para el código
  const nombre = watch("Nombre", "");
  const apellido = watch("Apellido", "");
  const cedula = watch("Cedula", "");

  // Función para generar el código
  const generarCodigoResponsable = (nombre, apellido, cedula) => {
    if (nombre && apellido && cedula.length >= 3) {
      const primeraLetraNombre = nombre.charAt(0).toUpperCase();
      const primeraLetraApellido = apellido.charAt(0).toUpperCase();
      const ultimosTresCedula = cedula.slice(-3);
      return `${primeraLetraNombre}${primeraLetraApellido}${ultimosTresCedula}`;
    }
    return "";
  };

  // Generar y establecer el código responsable automáticamente
  useEffect(() => {
    const codigo = generarCodigoResponsable(nombre, apellido, cedula);
    setValue("codigoResponsable", codigo);
  }, [nombre, apellido, cedula, setValue]);

  const onSubmit = handleSubmit((data) => {
    setSend(false);
    setData(data); // Enviar datos al backend con el código generado
  });

  // Constant
  const border = "border border-[#ff0000ad]";

  useEffect(() => {
    success && setSuccess(true);
  }, [success]);

  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center max-sm:px-4 pt-12 pb-4">
      <Identificador titulo={"AGREGAR RESPONSABLE"} />
      {success ? <Navigate to={"/Responsable"} /> : ""}
      {send ? (
        <form
          className="py-4 px-20 max-sm:px-8 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm max-sm:min-w-full border-[1px]"
          onSubmit={onSubmit}
        >
          <Link className="text-xl text-[#292929] size-4" to={"/Responsable"}>
            <BiArrowBack />
          </Link>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Nombre:</p>
              <input
                className={`bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins] ${
                  errors.Nombre && border
                }`}
                type="text"
                {...register("Nombre", { required: true })}
              />
            </div>
            {errors.Nombre && (
              <ErrorMsg text={`Completa correctamente el campo del Nombre`} />
            )}
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Apellido:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="text"
                {...register("Apellido", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Cédula:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="number"
                {...register("Cedula", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Teléfono:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="number"
                {...register("Telefono", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Taller:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="text"
                {...register("Taller", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Grado de Instrucción:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="text"
                {...register("gradoInstruccion", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Código:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="text"
                readOnly
                {...register("codigoResponsable", { required: true })}
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AddResponsable;

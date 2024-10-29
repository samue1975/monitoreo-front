import { useParams } from "react-router";
import Loader from "../Loader";
import Identificador from "../Identificador";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ResponsableEditar, ResponsableGetid } from "../../Logic/ConsUrls";
import useMethodGet from "../../api/useMethodGet";
import useMethodPut from "../../api/useMethodPut";

// eslint-disable-next-line react/prop-types
const EditResponsable = ({ setUpdate, setPut, put }) => {
  // state
  const [data2, setData] = useState();
  const [success, setSuccess] = useState(null);
  const [send, setSend] = useState(true);

  // Parámetro de la ruta
  const { id } = useParams();

  // useForm
  const { register, handleSubmit, setValue } = useForm();

  // methods CRUD
  const { data } = useMethodGet(`${ResponsableGetid}${id}`);
  const { errorsPost } = useMethodPut(
    setSuccess,
    id,
    data2,
    `${ResponsableEditar}`
  );

  {console.log(data)}

  // useNavigate
  const navigate = useNavigate();

  errorsPost && console.log(errorsPost);

  if (data) {
    setValue("Nombre", data[0].nombre);
    setValue("Apellido", data[0].apellido);
    setValue("Cedula", data[0].cedula);
    setValue("Telefono", data[0].telefono);
    setValue("Taller", data[0].taller);
    setValue("GradoInstruccion", data[0].gradoInstruccion);
    setValue("CodigoResponsable", data[0].codigoResponsable);
  }

  const onSubmit = handleSubmit(async (object) => {
    // Extraer la primera letra del nombre y apellido
    const nombreInicial = object.Nombre.charAt(0).toUpperCase();
    const apellidoInicial = object.Apellido.charAt(0).toUpperCase();

    // Extraer los últimos tres dígitos de la cédula
    const cedulaFinal = object.Cedula.toString().slice(-3);

    // Generar el Código de Responsable
    const codigoGenerado = `${nombreInicial}${apellidoInicial}${cedulaFinal}`;

    // Asignar el código al objeto antes de guardarlo
    object.CodigoResponsable = codigoGenerado;

    setSend(false);
    await setData(object);
    setPut(!put);
  });

  useEffect(() => {
    if (success) {
      setUpdate(true);
      navigate(`/Responsable`);
      setSuccess(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center max-sm:px-4 pt-12 pb-4">
      <Identificador titulo={"AGREGAR RESPONSABLE"} />
      {send ? (
        <form
          className="py-4 px-20 max-sm:px-8 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm max-sm:min-w-full border-[1px]"
          action=""
          onSubmit={onSubmit}
        >
          <Link className="text-xl text-[#292929] size-4" to={"/Responsable"}>
            <BiArrowBack />
          </Link>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Nombre:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="text"
                {...register("Nombre", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Apellido:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="text"
                {...register("Apellido", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Cedula:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="number"
                {...register("Cedula", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Telefono:</p>
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
                {...register("GradoInstruccion", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Código:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="text"
                readOnly
                {...register("CodigoResponsable", { required: true })}
              />
            </div>
            <div className="flex flex-wrap justify-around py-6">
              <Link
                className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer"
                to={"/Responsable"}
              >
                Cancelar
              </Link>
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

export default EditResponsable;

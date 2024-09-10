import { BiArrowBack } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useMethodPost from "../../api/useMethodPost";
import { useForm } from "react-hook-form";
import ErrorMsg from "../ErrorMsg";
import Loader from "../Loader";
import { proveedorAgregar } from "../../Logic/ConsUrls";

// eslint-disable-next-line react/prop-types
const AddProveedores = ({ setSuccess }) => {
  //useState
  const [data, setData] = useState();
  const [send, setSend] = useState(true)
  //Hook useForm
  const { register, handleSubmit, formState: { errors } } = useForm();
  //method Post
  const { /* errorsPost,  */ success } = useMethodPost(
    data,
    `${proveedorAgregar}`
  );
  const onSubmit = handleSubmit((data) => {
    setSend(false)
    setData(data)
  });
  //Constant 
  const border = 'border border-[#ff0000ad]'

  useEffect(() => {
    success && setSuccess(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center h-screen max-sm:px-4">
      {/* TODO EL FORMULARIO */}
      {success ? <Navigate to={"/Proveedores"} /> : ""}
      {
        send ? (
          <form
            className="py-4 px-20 max-sm:px-8 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm max-sm:min-w-full border-[1px]"
            action=""
            onSubmit={onSubmit}
          >
            {/* FLECHA PARA IR HACIA ATRAS */}
            <Link className="text-xl text-[#292929] size-4" to={"/Proveedores"}>
              <BiArrowBack />
            </Link>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Nombre:</p>
                <input
                  className={`bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins] ${errors.Nombre && border}`}
                  type="text"
                  {...register("Nombre", { required: true })}
                />
              </div>
              {errors.Nombre && <ErrorMsg text={`Completa correctamente el campo del Nombre`} />}
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Rif:</p>
                <input
                  className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                  type="text"
                  {...register("Rif", { required: true })}
                />
              </div>
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Ubicacion:</p>
                <input
                  className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                  type="text"
                  {...register("Ubicacion", { required: true })}
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
                <p className="font-semibold">Email:</p>
                <input
                  className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                  type="text"
                  {...register("Email", { required: true })}
                />
              </div>
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Referencia:</p>
                <input
                  className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                  type="text"
                  {...register("Referencia", { required: true })}
                />
              </div>
              {/* ACEPTAR Y CANCELAR */}
              <div className="flex flex-wrap justify-around py-6">
                <Link className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer" to={"./Proveedores"}>
                  Cancelar
                </Link>
                <button className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer">
                  Aceptar
                </button>
              </div>
            </div>
          </form>
        ) : <Loader />
      }
    </div>
  );
};

export default AddProveedores;

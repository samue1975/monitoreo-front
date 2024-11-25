import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useMethodGet from "../../api/useMethodGet";
import { useForm } from "react-hook-form";
import {
  almacenEditar,
  almacenGetid,
  proveedorGet,
} from "../../Logic/ConsUrls";
import Identificador from "../Identificador";
import useMethodPut from "../../api/useMethodPut";
import Loader from "../Loader";

// eslint-disable-next-line react/prop-types
const EditInventario = ({ /* error, */ setUpdate, setPut, put }) => {
  //state
  const [data2, setData] = useState();
  const [success, setSuccess] = useState(null);
  const [send, setSend] = useState(true);

  //Parametro de la ruta
  const { id } = useParams();

  //useForm
  const { register, handleSubmit, /*formState: { errors }*/ setValue } =
    useForm();

  //methods CRUD
  const { data } = useMethodGet(`${almacenGetid}${id}`);

  const almacen = data?.[0];

  const combinedId = almacen ? `${id}/${almacen.idCodProd}` : null;

  //useMethodPut
  const { errorsPost } = useMethodPut(
    setSuccess,
    combinedId,
    data2,
    `${almacenEditar}`
  );

  //useNavigate
  const navigate = useNavigate();

  errorsPost && console.log(errorsPost);

  if (data) {
    setValue("Nombre", data[0].nombre);
    setValue("Codigo", data[0].codigo);
    setValue("Proveedor", data[0].proveedor);
    setValue("Cantidad", data[0].cantidad);
    setValue("Descripcion", data[0].descripcion);
    setValue("FechaIngreso", data[0].fechaingreso);
    setValue("FechaCaducidad", data[0].fechaCaducidad);
    setValue("Ubicacion", data[0].ubicacion);
    setValue("ID2", data[0].idCodProd);
  }

  const onSubmit = handleSubmit(async (object) => {
    setSend(false);
    await setData(object);
    setPut(!put);
  });

  useEffect(() => {
    if (success) {
      setUpdate(true);
      navigate(`/Inventario`);
      setSuccess(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const { data1 } = useMethodGet(proveedorGet);

  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center max-sm:px-4 pt-12 pb-4">
      <Identificador titulo={"EDITAR INVENTARIO"} />
      {/* TODO EL FORMULARIO */}

      {send ? (
        <form
          className="py-4 px-20 max-sm:px-8 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm max-sm:min-w-full border-[1px]"
          action=""
          onSubmit={onSubmit}
        >
          {/* FLECHA PARA IR HACIA ATRAS */}
          <Link className="text-xl text-[#292929] size-4" to={"/Inventario"}>
            <BiArrowBack />
          </Link>

          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Catálogo:</p>
              <input
                className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
                type="text"
                readOnly
                {...register("Nombre", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Código del Producto:</p>
              <input
                className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
                id="systemCodeInput"
                type="text"
                {...register("Codigo", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Proveedores:</p>
              <input
                className={`bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
                type="number"
                readOnly
                {...register("Proveedor", { required: true })}
              />
            </div>
            {/* <div className="flex flex-wrap gap-4 justify-end pt-1">
              <p className="font-semibold">Lote:</p>
              <input
                className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
                type="number"
              />
            </div> */}
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Cantidad:</p>
              <input
                className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
                type="number"
                {...register("Cantidad", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Descripción:</p>
              <input
                className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
                type="text"
                placeholder="Escriba la Descripción"
                {...register("Descripcion", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Fecha de Ingreso:</p>
              <input
                className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
                type="date"
                {...register("FechaIngreso", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Fecha de Caducidad:</p>
              <input
                className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
                type="date"
                {...register("FechaCaducidad", { required: true })}
              />
            </div>
            <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
              <p className="font-semibold">Ubicación:</p>
              <input
                className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
                type="text"
                placeholder="Escriba la Ubicación"
                {...register("Ubicacion", { required: true })}
              />
            </div>
            {/* ACEPTAR Y CANCELAR */}
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

export default EditInventario;

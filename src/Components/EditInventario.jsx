import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useMethodGet from "../../api/useMethodGet";
import { useForm } from "react-hook-form";
import { listNames, listNamesId, listNamesPost, proveedorGet } from "../../Logic/ConsUrls";
import useMethodPost from "../../api/useMethodPost";
import Identificador from "../Identificador";

const EditInventario = () => {
  //useState
  const [selectedProduct, setSelectedProduct] = useState(); // ESTADO PARA ALMACENAR EL PRODUCTO SELECCIONADO
  const [data2, setData2] = useState();
  const [dataSend, setDataSend] = useState();
  //useMethodGet
  const { data } = useMethodGet(listNames);

  //useMethodPost
  const { success, errorsPost } = useMethodPost(dataSend, listNamesPost);
  //useForm
  const { register, handleSubmit /* formState: { errors } */, setValue } =
    useForm();
  //Navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedProduct) {
      fetch(`${listNamesId}${selectedProduct}`)
        .then((res) => res.json())
        .then((json) => setData2(json[0]));
    }
  }, [selectedProduct]);

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value); // CAMBIA EL ESTADO CUANDO HAY UN CAMBIO
    console.log(selectedProduct);
  };

  if (data2) {
    setValue("codigo", data2.codigo);
    setValue("CodSu", data2.codSu);
    setValue("fechaIngreso", data2.fechaIngreso);
    setValue("descripcion", data2.descripcion);
    setValue("idCodProd", data2.idCodProd);
  }

  const onSubmit = handleSubmit((data) => {
    let object = { ...data };
    object.cantidad = Number(data.cantidad);
    object.nombre = data2.nombre;
    setDataSend(object);
  });

  useEffect(() => {
    success && navigate("/Inventario");
    errorsPost && console.log(errorsPost);
  }, [success, errorsPost]);

  const { data1 } = useMethodGet(proveedorGet);
  console.log(data1);

  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center max-sm:px-4 pt-12 pb-4">
      <Identificador titulo={"AGREGAR INVENTARIO"} />
      {/* TODO EL FORMULARIO */}
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
            <select
              className="bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              id="catalogSelect"
              onChangeCapture={handleProductChange}
              required="required"
              {...register("nombre", { required: true })}
            >
              <option value=""></option>
              {data?.map((item) => {
                return (
                  <option key={item.idCodProd} value={item.idCodProd}>
                    {`${item.nombre} (Departamento: ${item.area})`}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Código del Producto:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
              id="systemCodeInput"
              type="text"
              {...register("codigo", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Proveedores:</p>
            <select
              className={`bg-[#F6F6F6] outline-none pl-4 max-sm:min-w-full pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
              {...register("CodSu", { required: true })}
            >
              <option value=""></option>
              {data1?.map((item) => {
                  return (
                    <option key={item.idProveedor} value={item.codProveedor}>
                      {item.codProveedor}
                    </option>
                  );
                })}
            </select>
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
              {...register("cantidad", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Descripción:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
              type="text"
              placeholder="Escriba la Descripción"
              {...register("descripcion", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Fecha de Ingreso:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
              type="date"
              {...register("fechaIngreso", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Fecha de Caducidad:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
              type="date"
              {...register("fechaCaducidad", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Ubicación:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-72"
              type="text"
              placeholder="Escriba la Ubicación"
              {...register("ubicacion", { required: true })}
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
    </div>
  );
};

export default EditInventario;

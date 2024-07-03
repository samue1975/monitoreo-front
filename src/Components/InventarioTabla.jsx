import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useMethodGet from "../api/useMethodGet";
import { useForm } from "react-hook-form";
import { listNames, listNamesPost } from "../Logic/ConsUrls";
import useMethodPost from "../api/useMethodPost";

const ProductCatalog = () => {
  //useState
  const [selectedProduct, setSelectedProduct] = useState(); // ESTADO PARA ALMACENAR EL PRODUCTO SELECCIONADO
  const [data2, setData2] = useState()
  const [dataSend, setDataSend] = useState()
  //useMethodGet
  const { data } = useMethodGet(listNames)

  //useMethodPost
  const { success, errorsPost } = useMethodPost(dataSend, listNamesPost)
  //useForm
  const { register, handleSubmit /* formState: { errors } */, setValue } = useForm();
  //Navigate
  const navigate = useNavigate()

  useEffect(() => {
    if (selectedProduct) {
      fetch(`http://192.168.0.195:80/api/Almacen/Agregar/${selectedProduct}`)
        .then(res => res.json())
        .then(json => setData2(json[0]))
    }
  }, [selectedProduct])



  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value); // CAMBIA EL ESTADO CUANDO HAY UN CAMBIO
    console.log(selectedProduct)
  };

  if (data2) {
    setValue('codigo', data2.codigo)
    setValue('CodSu', data2.codSu)
    setValue('fechaIngreso', data2.fechaIngreso)
    setValue('descripcion', data2.descripcion)
    setValue('idCodProd', data2.idCodProd)
  }

  const onSubmit = handleSubmit((data) => {
    let object = { ...data }
    object.cantidad = Number(data.cantidad)
    object.nombre = data2.nombre
    setDataSend(object);

  })


  useEffect(() => {
    success && navigate('/Inventario')
    errorsPost && console.log(errorsPost)
  }, [success, errorsPost])


  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center h-screen">
      {/* TODO EL FORMULARIO */}
      <form
        className="py-4 px-20 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm border-[1px]"
        action=""
        onSubmit={onSubmit}

      >
        {/* FLECHA PARA IR HACIA ATRAS */}
        <Link className="text-xl text-[#292929] size-4" to={"/Inventario"}>
          <BiArrowBack />
        </Link>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Catálogo:</p>
            <select
              className="bg-[#F6F6F6] outline-none pl-4 pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              id="catalogSelect"
              onChangeCapture={handleProductChange}
              required="required"
              {...register("nombre", { required: true })}
            >
              <option value=""></option>
              {
                data?.map((item) => {
                  return (
                    <option key={item.idCodProd} value={item.idCodProd}>
                      {`${item.nombre} (Departamento: ${item.area})`}
                    </option>
                  )
                })
              }

            </select>
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Código del Producto:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              id="systemCodeInput"
              type="text"
              {...register("codigo", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Proveedores:</p>
            <select
              className={`bg-[#F6F6F6] outline-none pl-4 pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
              {...register("CodSu", { required: true })}
            >
              <option value=""></option>
              <option value="001">001</option>
              <option value="002">002</option>
              <option value="003">003</option>
              <option value="004">004</option>
              <option value="005">005</option>
              <option value="006">006</option>
              <option value="007">007</option>
              <option value="008">008</option>
              <option value="009">009</option>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="012">012</option>
              <option value="013">013</option>
              <option value="014">014</option>
              <option value="015">015</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
              <option value="020">020</option>
              <option value="021">021</option>
              <option value="022">022</option>
              <option value="023">023</option>
              <option value="024">024</option>
              <option value="025">025</option>
              <option value="026">026</option>
            </select>
          </div>
          {/* <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Lote:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              type="number"
            />
          </div> */}
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Cantidad:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              type="number"
              {...register("cantidad", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Descripción:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              type="text"
              placeholder='Escriba la Ubicación'
              {...register("descripcion", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Fecha de Ingreso:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              type="date"
              {...register("fechaIngreso", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Fecha de Caducidad:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              type="date"
              {...register("fechaCaducidad", { required: true })}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Ubicación:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              type="text"
              placeholder='Escriba la Ubicación'
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

export default ProductCatalog;

import { IoIosAdd } from "react-icons/io";
import BodyTable from "../Components/BodyTable";
import { Link } from "react-router-dom";
import Busqueda from "../Components/Busqueda";
import { useState } from "react";
import { almacenGet } from "../Logic/ConsUrls";
import Loader from '../Components/Loader'
import useMethodFilter from "../api/useMethodFilter";
import { almacenDelete } from '../Logic/ConsUrls'
import Pagination from "../Components/Pagination";


const Inventario = () => {
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();
  const [cambio, setCambio] = useState()

  //useMethodGet
  const { searcher, resultsId } = useMethodFilter(almacenGet, cambio)
  function deleteData(id) {
    fetch(`${almacenDelete}${id}`, {
      method: 'DELETE',
    }).then(respuesta => respuesta.json())
      .then(datos => {
        console.log(datos)
        setCambio(!cambio)
      })
  }
  console.log(resultsId)
  return (
    <div className="col-span-5 pt-4 overflow-x-auto md:overflow-x-hidden">
      {/* Apartado de busqueda y botones */}
      <div className="px-8 pt-8 flex max-sm:gap-4 flex-wrap justify-between">
        <Busqueda searcher={searcher} />
        {/* Botones */}
        <div className="flex flex-wrap items-center gap-4">
          {/* LA FECHA */}
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <label className="text-gray-700 font-medium">Desde:</label>
              <input
                className="border-[1px] border-[#292929] rounded-xl p-2 outline-none border-none bg-[#292929] text-white"
                type="date"
                value={fechaInicio}
                onChange={(e) => {
                  setFechaInicio(e.target.value);
                  setFechaFin(e.target.value); // Inicializar fechaFin con fechaInicio
                }}
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <label className="text-gray-700 font-medium">Hasta:</label>
              <input
                className="border-[1px] border-[#292929] rounded-xl p-2 outline-none border-none bg-[#292929] text-white"
                type="date"
                value={fechaFin}
                min={fechaInicio} // Limitar fecha mínima con fechaInicio
                onChange={(e) => {
                  setFechaFin(e.target.value);
                }}
              />
            </div>
          </div>

          <select className="border-[1px] border-[#292929] rounded-xl p-2 outline-none border-none bg-[#292929] text-white cursor-pointer">
            <option value="">Identificación</option>
            <option value="E">Equipo</option>
            <option value="C">Componente</option>
            <option value="P">Parte</option>
            <option value="M">Materia Prima</option>
            <option value="S">Consumible</option>
            <option value="H">Herramienta</option>
          </select>

          <Link
            className="flex flex-wrap items-end bg-[#292929] text-white hover:bg-white hover:text-black border-[1px] border-[#292929] p-2 rounded-xl cursor-pointer"
            to={"/AddInventario"}
          >
            Agregar <IoIosAdd className="text-2xl" />
          </Link>
        </div>
      </div>
      {/* component */}
      <div className=" py-8 w-full flex justify-center items-center">
        <div className="shadow overflow-hidden rounded border-b border-gray-200 flex flex-col gap-4 justify-center items-center">
          <div className="max-sm:max-w-[90%] max-w-[95%] max-sm:min-w-[90%] max-sm:overflow-x-scroll scrollbar-thin gap-2">
            <table className="min-w-full bg-white">
              {/* HEAD TABLE */}
              <thead className="bg-[#292929] text-white">
                <tr>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    NOMBRE
                  </th>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    COD. PRODUCTO
                  </th>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    PROVEEDOR
                  </th>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    INGRESO
                  </th>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    CADUCIDAD
                  </th>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    CANTIDAD
                  </th>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    DESCRIPCIÓN
                  </th>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    UBICACIÓN
                  </th>
                  <th className="text-center py-3 uppercase font-semibold text-sm">
                    EDITAR
                  </th>
                </tr>
              </thead>
              {/* BODY TABLE */}
              <tbody className="text-gray-700 overflow-x-scroll">
                {
                  resultsId?.reverse().map((lote) => {
                    return (
                      <BodyTable
                        cod_nombre={lote.nombre}
                        key={lote.idAlmacen}
                        id={lote.idAlmacen}
                        cod_sistema={lote.codigo}
                        proveedor={lote.proveedor}
                        ingreso={lote.fechaIngreso}
                        caducidad={lote.fechaCaducidad}
                        descript={lote.descripcion}
                        ubicacion={lote.ubicacion}
                        cod_cantidad={lote.cantidad}
                        deleteData={deleteData}
                      />

                    )
                  })
                }
              </tbody>

            </table>
            {
              !resultsId && <Loader />
            }
          </div>
          <Pagination />
        </div>
      </div>

    </div>
  );
};

export default Inventario;

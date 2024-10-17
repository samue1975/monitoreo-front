import { Link } from "react-router-dom";
import Busqueda from "../Components/Busqueda";
import { IoIosAdd } from "react-icons/io";
import { useState, useEffect } from "react";
import Identificador from "../Components/Identificador";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import "../assets/css/shadow.css";
import Loader from "../Components/Loader"
import { ResponsableList } from "../Logic/ConsUrls";
import Success from "../Components/alerts/Success";

const Responsable = ({success}) => {
  const [data, setData] = useState([]); // Estado para almacenar los datos de la API
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Definir columnas
  const columns = [
    { header: "Nombre", accessorKey: "nombre" },
    { header: "Apellido", accessorKey: "apellido" },
    { header: "Cedula", accessorKey: "cedula" },
    { header: "Telefono", accessorKey: "telefono" },
    { header: "Taller", accessorKey: "taller" },
    { header: "Grado de Instruccion", accessorKey: "gradoInstruccion" },
    { header: "Codigo", accessorKey: "codigoResponsable" },
  ];

  // Función para hacer fetching de los datos de la API
  useEffect(() => {
    const fetchResponsables = async () => {
      try {
        const response = await fetch(ResponsableList);
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        const data = await response.json();
        setData(data); // Actualizar el estado con los datos recibidos
        setLoading(false); // Finalizar el estado de carga
      } catch (error) {
        setError(error.message); // Manejar el error si ocurre
        setLoading(false);
      }
    };

    fetchResponsables();
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) {
    return <div className="col-span-5"><Loader /></div>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="col-span-5 pt-4 px-8 pb-8 overflow-x-auto md:overflow-x-hidden">
      <Identificador titulo={"RESPONSABLE"} />
      {/* APARTADO DE BUSQUEDA Y DE BOTONES */}
      <div className="flex flex-wrap max-sm:gap-4 justify-between pt-8">
        <Busqueda />
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#292929] text-white hover:bg-[#f6f6f6] hover:text-[#292929] shadow px-2 py-1 border rounded-xl">
            <Link className="flex flex-wrap items-end" to={"/AddResponsable"}>
              Agregar <IoIosAdd className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
      {/* PRODUCTOS */}
      <div className="pt-8 flex flex-col gap-6">
        <div className="max-sm:max-w-[90%] max-w-[100%] max-sm:min-w-[90%] max-sm:overflow-x-scroll scrollbar-thin gap-2 w-full">
          <table className="w-full bg-white">
            <thead className="bg-[#292929] text-white min-w-full">
              {table.getHeaderGroups().map((getHeaderGroup) => (
                <tr key={getHeaderGroup.nombre}>
                  {getHeaderGroup.headers.map((header) => (
                    <th
                      key={header.nombre}
                      className="text-center uppercase py-3 font-semibold text-sm"
                    >
                      <div className="flex justify-center items-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="text-gray-700 overflow-x-scroll">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="text-center uppercase px-4 font-semibold text-sm max-sm:px-4"
                    >
                      <div className="max-sm:overflow-x-auto max-sm:max-w-32 py-3">
                        <p className="max-sm:min-w-max">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Success
        success={success}
        message={"Se ha creado el proveedor correctamente"}
      />
    </div>
  );
};

export default Responsable;
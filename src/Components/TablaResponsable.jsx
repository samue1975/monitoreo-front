import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import data from "../../MOCK_DATA.json";

const TablaResponsable = () => {
  const columns = [
    { header: "Nombre", accessorKey: "nombre" },
    { header: "Apellido", accessorKey: "apellido" },
    { header: "Codigo", accessorKey: "codigo" },
    { header: "Taller", accessorKey: "taller" },
    { header: "Telefono", accessorKey: "telefono" },
    { header: "Cargo", accessorKey: "cargo" },
    { header: "Grado de Instruccion", accessorKey: "gradoinstruccion" },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-sm:max-w-[90%] max-w-[95%] max-sm:min-w-[90%] max-sm:overflow-x-scroll scrollbar-thin gap-2 w-full">
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
            <tr key={row.nombre}>
              {row.getVisibleCells().map((cell) => (
                // eslint-disable-next-line react/jsx-key
                <td className="text-center uppercase px-4 font-semibold text-sm max-sm:px-4">
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
  );
};

export default TablaResponsable;

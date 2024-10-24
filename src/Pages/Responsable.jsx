import { useEffect, useState } from "react";
import { BiEdit, BiSearch, BiSolidTrash } from "react-icons/bi";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronUpDownIcon,
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import useMethodFilter from "../api/useMethodFilter";
import { ResponsableList, ResponsableEliminar } from "../Logic/ConsUrls";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import Loader from "../Components/Loader";
import Success from "../Components/alerts/Success";
import Identificador from "../Components/Identificador";

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({ itemRank });

  return itemRank.passed;
};

// eslint-disable-next-line react/prop-types
const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
  const [value, setValue] = useState(keyWord);
  // console.log(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Filterd");
      onChange(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

console.log();

// eslint-disable-next-line react/prop-types
const Responsable = ({ setSuccess, success }) => {
  //States
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [cambio, setCambio] = useState();
  const [deleteProv, setDeleteProv] = useState();

  //Use Method Get
  const { resultsId, isLoading } = useMethodFilter(ResponsableList, cambio);
  const columns = [
    {
      accessorKey: "nombre",
      header: () => <span>Nombre</span>,
      cell: (info) => <span className="font-bold">{info.getValue()}</span>,
    },
    {
      accessorKey: "apellido",
      header: () => <span>APELLIDO</span>,
    },
    {
      accessorKey: "cedula",
      header: () => <span>CEDULA</span>,
    },
    {
      accessorKey: "telefono",
      header: () => <span>TELEFONO</span>,
    },
    {
      accessorKey: "taller",
      header: () => <span>TALLER</span>,
    },
    {
      accessorKey: "gradoInstruccion",
      header: () => <span>GRADO DE INSTRUCCION</span>,
    },
    {
      accessorKey: "codigoResponsable",
      header: () => <span>CODIGO</span>,
    },
  ];
  const getStateTable = () => {
    const totalRows = table.getFilteredRowModel().rows.length;
    const pageSize = table.getState().pagination.pageSize;
    const pageIndex = table.getState().pagination.pageIndex;
    const rowsPerPage = table.getRowModel().rows.length;
    const firstIndex = pageIndex * pageSize + 1;
    const lastIndex = pageIndex * pageSize + rowsPerPage;
    return {
      totalRows,
      firstIndex,
      lastIndex,
    };
  };

  /* Table constants */
  const table = useReactTable({
    data: resultsId,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  //Delete
  function deleteData(id) {
    fetch(`${ResponsableEliminar}${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        setDeleteProv(true);
        setCambio(!cambio);
      });
  }

  //Alerts
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false); // Ocultar la alerta después de 5 segundos
      }, 5000);
    } else if (deleteProv) {
      setTimeout(() => {
        setDeleteProv(false); // Ocultar la alerta después de 5 segundos
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, deleteProv]);

  console.log(resultsId);

  return (
    <div className="col-span-5 pt-4 overflow-x-auto md:overflow-x-hidden">
      <Identificador titulo={"RESPONSABLE"} />
      <div className="px-8 pt-8 flex max-sm:gap-4 flex-wrap justify-between">
        <div className="flex items-center gap-2 border-[1px] border-[#292929] justify-start rounded-xl px-4 max-sm:px-2 max-sm:w-full">
          <button>
            <BiSearch className="text-2xl text-[#292929]" />
          </button>
          <DebouncedInput
            type="text"
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="py-2 text-gray-600 outline-none"
            placeholder="Buscar..."
          />
        </div>
        <Link
          className="flex flex-wrap items-end bg-[#292929] text-white hover:bg-white hover:text-black border-[1px] border-[#292929] p-2 rounded-xl cursor-pointer"
          to={"/AddResponsable"}
        >
          Agregar <IoIosAdd className="text-2xl" />
        </Link>
      </div>
      <div className="py-8 w-full flex justify-center items-center">
        <div className="w-full shadow overflow-hidden rounded border-b border-gray-200 flex flex-col gap-4 justify-center items-center">
          <div className="max-sm:max-w-[90%] max-w-[95%] max-sm:min-w-[90%] max-sm:overflow-x-scroll scrollbar-thin gap-2 w-full">
            <table className="w-full bg-white">
              <thead className="bg-[#292929] text-white min-w-full">
                {isLoading
                  ? null
                  : table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="text-center uppercase py-3 font-semibold text-sm"
                          >
                            {header.isPlaceholder ? null : (
                              <div
                                className={{
                                  "cursor-pointer select-none flex justify-between flex-row item-center bg-red-300":
                                    header.column.getCanSort(),
                                }}
                                onClick={header.column.getToggleSortingHandler()}
                              >
                                <div className="flex justify-center items-center gap-2">
                                  {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                                  {{
                                    asc: (
                                      <BarsArrowUpIcon className="w-5 h-5" />
                                    ),
                                    desc: (
                                      <BarsArrowDownIcon className="w-5 h-5" />
                                    ),
                                  }[header.column.getIsSorted()] ??
                                    (header.column.getCanSort() ? (
                                      <ChevronUpDownIcon className="w-5 h-5" />
                                    ) : null)}
                                </div>
                              </div>
                            )}
                          </th>
                        ))}
                        <th className="text-center uppercase py-3 font-semibold text-sm">
                          Opciones
                        </th>
                      </tr>
                    ))}
              </thead>
              <tbody className="text-gray-700 overflow-x-scroll">
                {isLoading
                  ? null
                  : table.getRowModel().rows.map((row) => (
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
                        <td className="items-center uppercase font-semibold text-sm flex gap-6 justify-center itemn-center py-4">
                          <div className="flex justify-center items-center text-xl gap-2">
                            <Link to={`/Responsable/${row.original.id}`}>
                              <BiEdit />
                            </Link>
                            <button
                              onClick={async () => {
                                const accepted = window.confirm(
                                  "Estas seguro que quieres eliminar esta tarea"
                                );
                                if (accepted) {
                                  await deleteData(row.original.id);
                                }
                              }}
                            >
                              <BiSolidTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
              </tbody>
              {!resultsId && <Loader />}
            </table>
            {/* TABLA FOOTER */}
            <div className="mt-4 md:flex items-center justify-between space-y-4 text-center">
              {isLoading ? null : (
                <div className="flex items-center gap-2">
                  <button
                    className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
                      !table.getCanPreviousPage()
                        ? "text-gray-300 bg-white"
                        : null
                    }`}
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                  >
                    {}
                    <ChevronDoubleLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
                      !table.getCanPreviousPage()
                        ? "text-gray-300 bg-white"
                        : null
                    }`}
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <span className="text-sm">
                      <ChevronLeftIcon className="w-5 h-5" />
                    </span>
                  </button>
                  <div className="flex items-center justify-center gap-3">
                    {isLoading
                      ? null
                      : table.getPageOptions().map((value, key) => (
                          <button
                            key={key}
                            className={{
                              "text-gray-600 bg-gray-200 py-0.5 px-2 font-bold rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300": true,
                              "bg-indigo-200 text-indigo-700":
                                value === table.getState().pagination.pageIndex,
                            }}
                            onClick={() => table.setPageIndex(value)}
                          >
                            {value + 1}
                          </button>
                        ))}
                  </div>
                  <button
                    className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
                      !table.getCanNextPage() ? "text-gray-300 bg-white" : null
                    }`}
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                  <button
                    className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 ${
                      !table.getCanNextPage() ? "text-gray-300 bg-white" : null
                    }`}
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                  >
                    <ChevronDoubleRightIcon className="w-5 h-5" />
                  </button>
                </div>
              )}
              {isLoading ? null : (
                <div className="text-center uppercase font-semibold text-sm text-gray-600">
                  Mostrando de {getStateTable().firstIndex}&nbsp; a{" "}
                  {getStateTable().lastIndex}&nbsp; del total de{" "}
                  <span className="text-gray-700 font-bold">
                    {getStateTable().totalRows}
                  </span>{" "}
                  registros
                </div>
              )}
              {isLoading ? null : (
                <select
                  className="text-gray-600 border border-gray-300 rounded outline-indigo-700 py-2"
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  <option value="5">5 pág.</option>
                  <option value="10">10 pág.</option>
                  <option value="20">20 pág.</option>
                  <option value="25">25 pág.</option>
                  <option value="50">50 pág.</option>
                </select>
              )}
            </div>
          </div>
        </div>
      </div>
      <Success
        success={success}
        message={"Se ha creado el proveedor correctamente"}
      />
      <Success
        success={deleteProv}
        message={"Se ha eliminado el proveedor correctamente"}
      />
    </div>
  );
};

export default Responsable;

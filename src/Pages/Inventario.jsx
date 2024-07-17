import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import { almacenGet } from "../Logic/ConsUrls";
import Loader from '../Components/Loader'
import useMethodFilter from "../api/useMethodFilter";
import { almacenDelete } from '../Logic/ConsUrls'
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table";
import { TbListDetails, TbTrash } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { rankItem } from '@tanstack/match-sorter-utils'



const Inventario = () => {
  //States
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();
  const [cambio, setCambio] = useState()
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 5, //default page size
  });
  const [endPage, setEndPage] = useState(0)
  const [globalFilter, setGlobalFilter] = useState("")




  //useMethodGet
  const { resultsId, isLoading } = useMethodFilter(almacenGet, cambio)

  //Delete
  function deleteData(id) {
    fetch(`${almacenDelete}${id}`, {
      method: 'DELETE',
    }).then(respuesta => respuesta.json())
      .then(datos => {
        console.log(datos)
        setCambio(!cambio)
      })
  }


  const columns = [
    {
      header: 'NOMBRE',
      accessorkey: 'nombre',
      cell: ({ row }) => {
        return row.original.nombre
      },
    },
    {
      header: 'COD. PRODUCTO',
      accessorkey: 'codigo',
      cell: ({ row }) => {
        return row.original.codigo
      },
      enableSorting: true
    },
    {
      header: 'PROVEEDOR',
      accessorkey: 'proveedor',
      cell: ({ row }) => {
        return row.original.proveedor
      }
    },
    {
      header: 'INGRESO',
      accessorkey: 'fechaIngreso',
      cell: ({ row }) => {
        return row.original.fechaIngreso
      }
    },
    {
      header: 'CADUCIDAD',
      accessorkey: 'fechaCaducidad',
      cell: ({ row }) => {
        return row.original.fechaCaducidad
      }
    },
    {
      header: 'CANTIDAD',
      accessorkey: 'cantidad',
      cell: ({ row }) => {
        return row.original.cantidad
      }
    },
    {
      header: 'DESCRIPCIÓN',
      accessorkey: 'descripcion',
      cell: ({ row }) => {
        return row.original.descripcion
      }
    },
    {
      header: 'UBICACIÓN',
      accessorkey: 'ubicacion',
      cell: ({ row }) => {
        return row.original.ubicacion
      }
    },
  ]

  const filterData = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({ itemRank })
    return itemRank.passed
  }

  //React Table
  const table = useReactTable({
    data: resultsId,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
    state: {
      pagination,
      globalFilter,
    },

    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: filterData
  })

  //useEffect
  useEffect(() => {
    isLoading ? null : setEndPage(table.getPageCount())
    /* table.isNuN && setEndPage(table.getPageCount()) */
  }, [table, isLoading])

  console.log(globalFilter)

  return (
    <div className="col-span-5 pt-4 overflow-x-auto md:overflow-x-hidden">
      {/* Apartado de busqueda y botones */}
      <div className="px-8 pt-8 flex max-sm:gap-4 flex-wrap justify-between">
        <div className="flex items-center gap-2 border-[1px] border-[#292929] justify-start rounded-xl px-4 max-sm:px-2 max-sm:w-full">
          <button>
            <BiSearch className="text-2xl text-[#292929]" />
          </button>
          <input
            className="py-2 outline-none border-none max-sm:w-full"
            placeholder="Buscar..."
            type="text"
            onChange={e => setGlobalFilter(e.target.value)}
          />
        </div>
        {/* Botones */}
        <div className="flex flex-wrap max-sm:justify-center items-center gap-4">
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
                {
                  table.getHeaderGroups().map((headerGroup) => {
                    return (
                      <tr key={headerGroup.id}>
                        {
                          headerGroup.headers.map((header, index) => {
                            return (
                              <th key={index} className="text-center uppercase py-3 font-semibold text-sm"
                                onClick={header.column.getToggleSortingHandler()}
                              >
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                {
                                  {
                                    asc: "⬆️", desc: "⬇️"
                                  }[header.column.getIsSorted() ?? null]
                                }
                              </th>
                            )
                          })
                        }
                        <th className="text-center uppercase py-3 font-semibold text-sm">
                          Editar
                        </th>
                      </tr>
                    )
                  })
                }
              </thead>
              {/* BODY TABLE */}
              <tbody className="text-gray-700 overflow-x-scroll">
                {isLoading ? console.log('carga') : table.getRowModel().rows.map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => {
                        return (
                          <td key={cell.id} className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
                            <p className="max-sm:min-w-max px-4">{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>
                          </td>
                        )
                      })}
                      <td className="text-center py-3 uppercase font-semibold text-sm flex gap-6 justify-center">
                        <button>
                          <TbListDetails />
                        </button>
                        <button
                          onClick={async () => {
                            const accepted = window.confirm(
                              "Estas seguro que quieres eliminar esta tarea"
                            );
                            if (accepted) {
                              await deleteData(row.original.idAlmacen);
                            }
                          }}
                        >
                          <TbTrash />
                        </button>
                      </td>
                    </tr>

                  )
                })
                }
              </tbody>

            </table>
            {
              !resultsId && <Loader />
            }
          </div>
          <div>
            <nav>
              <ul className="flex">
                <li>
                  <button
                    className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                    onClick={() => { table.previousPage() }}
                  >
                    <span className="text-sm">
                      <IoIosArrowBack />
                    </span>
                  </button>
                </li>

                {/* {
                  pagination.pageIndex > 2 ? (
                    <li>
                      <button
                        className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                        onClick={table.setPageIndex(pagination.pageIndex - 2)}
                      >
                        {pagination.pageIndex - 2}
                      </button>
                    </li>
                  ) : null
                } */}

                <li>
                  <button
                    className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#292929] p-0 text-sm text-white"
                  >
                    {pagination.pageIndex}
                  </button>
                </li>

                {
                  pagination.pageIndex >= (endPage - 1) ? null : (<span
                    className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  >
                    ...
                  </span>)


                }
                {
                  pagination.pageIndex >= (endPage - 1) ? null : (<li>
                    <button
                      className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                      onClick={() => { table.setPageIndex(table.getPageCount() - 1) }}
                    >
                      {endPage - 1}
                    </button>
                  </li>)
                }
                {
                  pagination.pageIndex >= (endPage - 1) ? null : (<li>
                    <button
                      className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                      onClick={() => { table.nextPage() }}
                    >
                      <span className="text-sm">
                        <IoIosArrowForward />
                      </span>
                    </button>
                  </li>)


                }
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Inventario;



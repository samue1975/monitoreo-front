import { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel
} from '@tanstack/react-table'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
    MagnifyingGlassIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    ChevronUpDownIcon,
    ChevronDoubleLeftIcon,
    ChevronLeftIcon,
    ChevronDoubleRightIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/solid'
import useMethodFilter from "../api/useMethodFilter";
import { almacenGet } from "../Logic/ConsUrls";

const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)

    addMeta({ itemRank })

    return itemRank.passed
}

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
    const [value, setValue] = useState(keyWord);
    // console.log(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log('Filterd');
            onChange(value);
        }, 500)

        return () => clearTimeout(timeout);
    }, [value])

    return (
        <input {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
}

const DataTable = () => {
    const { resultsId, isLoading } = useMethodFilter(almacenGet)

    console.log(resultsId)
    console.log(isLoading)

    const [globalFilter, setGlobalFilter] = useState('')
    const [sorting, setSorting] = useState([])
    console.log(globalFilter);

    const columns = [
        {
            accessorKey: 'nombre',
            header: () => <span>Nombre</span>,
            cell: info => <span className='font-bold'>{info.getValue()}</span>
        },
        {
            accessorKey: 'codigo',
            header: () => <span>COD. PRODUCTO</span>
        },
        {
            accessorKey: 'proveedor',
            header: () => <span>PROVEEDOR</span>
        },
        {
            accessorKey: 'fechaIngreso',
            header: () => <span>INGRESO</span>
        },
        {
            accessorKey: 'fechaCaducidad',
            header: () => <span>CADUCIDAD</span>
        },
        {
            accessorKey: 'cantidad',
            header: () => <span>CANTIDAD</span>
        },
        {
            accessorKey: 'descripcion',
            header: () => <span>DESCRIPCION</span>
        },
        {
            accessorKey: 'ubicacion',
            header: () => <span>UBICACIÓN</span>
        },
        {
            accessorKey: 'actions',
            header: 'Acciones',
            cell: info => {
                return (
                    <div className='space-x-2'>
                        <button className='text-red-600'>Eliminar</button>
                    </div>
                )
            },
            enableSorting: false
        }
    ]

    /* const columns = [
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
 */
    const getStateTable = () => {
        const totalRows = table.getFilteredRowModel().rows.length;
        const pageSize = table.getState().pagination.pageSize;
        const pageIndex = table.getState().pagination.pageIndex;
        const rowsPerPage = table.getRowModel().rows.length;

        const firstIndex = (pageIndex * pageSize) + 1;
        const lastIndex = (pageIndex * pageSize) + rowsPerPage;

        return {
            totalRows,
            firstIndex,
            lastIndex
        }
    }

    const table = useReactTable({
        data: resultsId,
        columns,
        state: {
            globalFilter,
            sorting
        },
        initialState: {
            pagination: {
                pageSize: 5
            }
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: fuzzyFilter,
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting
    })

    return (
        <div className=''>

            <div className='my-2 flex justify-end'>
                <div className='flex items-center gap-2 border-[1px] border-[#292929] justify-start rounded-xl px-4 max-sm:px-2 max-sm:w-full'>
                    <DebouncedInput
                        type="text"
                        value={globalFilter ?? ''}
                        onChange={value => setGlobalFilter(String(value))}
                        className='px-6 py-2 text-gray-600 border border-gray-300 rounded outline-indigo-700'
                        placeholder='Buscar...'
                    />
                    <BiSearch className='w-5 h-5 absolute top-3 left-1' />
                </div>

            </div>
            <div className=''>
                <table className='table-auto w-full min-w-[560px]'>
                    <thead>
                        {isLoading ? null : table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="border-b border-gray-300 text-gray-600 bg-gray-100" >
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="py-2 px-4 text-left uppercase">
                                        {header.isPlaceholder
                                            ? null
                                            :
                                            <div
                                                className={{
                                                    'cursor-pointer select-none flex justify-between': header.column.getCanSort(),
                                                }}
                                                onClick={header.column.getToggleSortingHandler()}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                {{
                                                    asc: <BarsArrowUpIcon className='w-5 h-5' />,
                                                    desc: <BarsArrowDownIcon className='w-5 h-5' />
                                                }[header.column.getIsSorted()] ?? (header.column.getCanSort() ? <ChevronUpDownIcon className='w-5 h-5' /> : null)}
                                            </div>
                                        }
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {isLoading ? null : table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="text-gray-600 hover:bg-slate-100" >
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="py-2 px-4" >
                                        {
                                            console.log(cell.column.columnDef.cell)
                                        }
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-4 md:flex items-center justify-between space-y-4 text-center'>
                <div className='flex items-center gap-2'>
                    {
                        isLoading ? null : (

                            <button
                                className='text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300'
                                onClick={() => table.setPageIndex(0)}
                                disabled={!table.getCanPreviousPage()}>
                                <ChevronDoubleLeftIcon className='w-5 h-5' />
                            </button>

                        )
                    }

                    {
                        isLoading ? null : (
                            <button
                                className='text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300'
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}>
                                <ChevronLeftIcon className='w-5 h-5' />
                            </button>
                        )
                    }



                    {isLoading ? null : table.getPageOptions().map((value, key) => (
                        <>
                            <button key={key}
                                className={{
                                    "text-gray-600 bg-gray-200 py-0.5 px-2 font-bold rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300": true,
                                    "bg-indigo-200 text-indigo-700": value === table.getState().pagination.pageIndex
                                }}
                                onClick={() => table.setPageIndex(value)}>
                                {value + 1}
                            </button>
                            <button
                                className='text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300'
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}>
                                <ChevronRightIcon className='w-5 h-5' />
                            </button>
                            <button
                                className='text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300
            disabled:hover:bg-white disabled:hover:text-gray-300'
                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                disabled={!table.getCanNextPage()}>
                                <ChevronDoubleRightIcon className='w-5 h-5' />
                            </button>
                        </>
                    ))}



                </div>

                {
                    isLoading ? null : (
                        <div className='text-gray-600 font-semibold'>
                            Mostrando de {getStateTable().firstIndex}&nbsp;
                            a {getStateTable().lastIndex}&nbsp;
                            del total de {getStateTable().totalRows} registros
                        </div>
                    )
                }

                {
                    isLoading ? null : (
                        <select
                            className='text-gray-600 border border-gray-300 rounded outline-indigo-700 py-2'
                            onChange={e => {
                                table.setPageSize(Number(e.target.value))
                            }}>
                            <option value="5">5 pág.</option>
                            <option value="10">10 pág.</option>
                            <option value="20">20 pág.</option>
                            <option value="25">25 pág.</option>
                            <option value="50">50 pág.</option>
                        </select>
                    )
                }


            </div>
        </div>
    )
}

export default DataTable
/* eslint-disable react/prop-types */
import useMethodGet from "../api/useMethodGet";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router";

const Details = () => {

    const { id } = useParams()
    const { data } = useMethodGet(`http://192.168.0.195:80/api/Catalogo/Detalles/${id}`)
    console.log(data)
    return (
        <>
            {
                data && <div
                    className={`border rounded-2xl flex flex-col w-2/4  top-0 bottom-0 left-0 right-0 m-auto shadow bg-white justify-around fixed`}
                >
                    {/* FLECHA PARA IR HACIA ATRAS */}
                    <span className="px-10">
                        <BiArrowBack
                            className="cursor-pointer text-xl text-[#292929] size-4"
                        />
                    </span>
                    <div className="h-40 flex justify-center">
                        <img
                            className="h-full saturate-0"
                            src={`../../public/${data[0].codE.replace(/ /g, "")}.png`}
                        />
                    </div>
                    {
                        console.log(data[0].codE)
                    }
                    <div className="flex justify-between items-end p-4">
                        <div className="flex flex-col flex-wrap w-full px-10">
                            <h1 className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Nombre:</span>
                                {data[0].nombre}
                            </h1>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Cantidad:</span>
                                {data[0].cantidad}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Código OACI:</span>
                                {data[0].codOaci}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Identificación:</span>
                                {data[0].codE}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Departamento:</span>
                                {data[0].codFg}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Sector De Investigación:</span>
                                {data[0].codHi}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Línea de Investigación:</span>
                                {data[0].codJk}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Proveedores:</span>
                                {data[0].codSu}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">ID Cronológica:</span>
                                {data[0].codLmnop}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Descripción:</span>
                                {data[0].descrip}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Código de Barra:</span>
                                {data[0].codBarra}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Código del Sistema:</span>
                                {data[0].codSistema}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <span className="font-semibold">Código:</span>
                                {data[0].codigo}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Details
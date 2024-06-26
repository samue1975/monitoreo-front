/* eslint-disable react/prop-types */
import useMethodGet from "../api/useMethodGet";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router";

const Details = () => {

    const { id } = useParams()
    const { data } = useMethodGet(`http://192.168.0.143:80/api/Catalogo/Lista/${id}`)
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
                            className="h-full"
                            src={
                                "https://laminas.com.mx/wp-content/uploads/2019/11/varilla-corrugada-300x223.png"
                            }
                        />
                    </div>
                    <div className="flex justify-between items-end p-4">
                        <div className="flex flex-col flex-wrap w-full px-10">
                            <h1 className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Nombre:</p>
                                {data[0].nombre}
                            </h1>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Cantidad:</p>
                                {data[0].cantidad}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Código OACI:</p>
                                {data[0].codOaci}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Identificación:</p>
                                {data[0].codE}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Departamento:</p>
                                {data[0].codFg}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Sector De Investigación:</p>
                                {data[0].codHi}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Línea de Investigación:</p>
                                {data[0].codJk}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Proveedores:</p>
                                {data[0].codSu}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">ID Cronológica:</p>
                                {data[0].codLmnop}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Descripción:</p>
                                {data[0].descrip}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Código de Barra:</p>
                                {data[0].codBarra}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Código del Sistema:</p>
                                {data[0].codSistema}
                            </p>
                            <p className="text-base flex flex-wrap gap-4">
                                <p className="font-semibold">Código:</p>
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
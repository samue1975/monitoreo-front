/* eslint-disable react/prop-types */
import { IoIosAdd } from "react-icons/io";
import Busqueda from "../Components/Busqueda";
import Productos from "../Components/Productos";
import { Link } from "react-router-dom";
import Success from "../Components/alerts/Success";
import { useEffect } from "react";
import useMethodGet from "../api/useMethodGet";
import image from "../Logic/Const"


const Catalogo = ({ success, setSuccess
}) => {
  const { data } = useMethodGet('http://192.168.0.195:80/api/Catalogo/Listas/')



  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false)
      }, ['5000'])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success])
  console.log(data)
  console.log(image)

  return (
    <div className="col-span-5 pt-4 px-8">
      {/* APARTADO DE BUSQUEDA Y DE BOTONES */}
      <div className="flex flex-wrap justify-between pt-8">
        <Busqueda />
        <div className="flex flex-wrap gap-4">
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Equipo
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Componente
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Parte
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Materia Prima
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Consumible
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Herramienta
          </button>
          <button className="hover:bg-[#292929] hover:text-white bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl">
            Todo
          </button>
          <button className="bg-[#292929] text-white hover:bg-[#f6f6f6] hover:text-[#292929] shadow px-2 py-1 border rounded-xl">
            <Link className="flex flex-wrap items-end" to={"/AddMaterial"}>
              Agregar <IoIosAdd className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
      <div className="pt-8 flex-wrap gap-6 grid grid-cols-5">
        {
          data?.map((item) => {
            return (
              <Productos
                foto={
                  `./${item.codEDetallado.replace(/ /g, "")}.png`
                }
                key={item.idCodProd}
                titulo={item.nombre}
                descripcion={item.descrip}
                idCodProd={item.idCodProd}
              />
            )
          })
        }
      </div>


      <Success success={success} message={'Se ha creado el material correctamente'} />


    </div>
  );
};

export default Catalogo;

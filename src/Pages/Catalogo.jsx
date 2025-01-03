/* eslint-disable react/prop-types */
import { IoIosAdd } from "react-icons/io";
import Busqueda from "../Components/Busqueda";
import Productos from "../Components/Productos";
import ProductoLista from "../Components/ProductoLista";
import { Link } from "react-router-dom";
import Success from "../Components/alerts/Success";
import { useEffect, useState } from "react";
import useMethodFilter from "../api/useMethodFilter";
import Loader from "../Components/Loader";
import NoDisponible from "../Components/NoDisponible";
import Switching from "../Components/Switching";
import { catalogoDelete, catalogoGet, proveedorGet } from "../Logic/ConsUrls";
import Identificador from "../Components/Identificador";
import useMethodGet from "../api/useMethodGet";
/* import { urlGet, urlDelete } from '../Logic/ConsUrls' */

const Catalogo = ({
  success,
  setSuccess,
  update,
  setUpdate,
  cambio1,
  cambio2,
}) => {
  const [cambio, setCambio] = useState(false);
  const [array, setArray] = useState(false);

  const {
    searcher,
    resultsId,
    identificacion,
    departamentofunc,
    sectorInvesfunc,
    lineaInvesfunc,
    proveedoresfunc,
  } = useMethodFilter(`${catalogoGet}`, cambio);
  function deleteData(id) {
    fetch(`${catalogoDelete}${id}`, {
      method: "DELETE",
    })
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setCambio(!cambio);
      }); 
  }
  console.log(resultsId)
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false); // Ocultar la alerta después de 5 segundos
      }, 5000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  useEffect(() => {
    if (update) {
      setTimeout(() => {
        setUpdate(false);
      }, ["5000"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  useEffect(() => {
    if (Array.isArray(resultsId)) {
      resultsId.length === 0 && setArray(true);
      resultsId.length && setArray(false);
    }
  }, [resultsId]);

  const { data1 } = useMethodGet(proveedorGet);

  return (
    <div className="col-span-5 pt-4 px-8 pb-8">
      <Identificador titulo={"CATÁLOGO"} />
      {/* APARTADO DE BUSQUEDA Y DE BOTONES */}
      <div className="flex flex-wrap gap-4 justify-between pt-8">
        <div className="flex gap-4">
          <Busqueda searcher={searcher} />
          <Switching cambio={cambio1} />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <select
            className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40"
            onChange={(e) => identificacion(e.target.value)}
          >
            <option value="">Identificación</option>
            <option value="E">Equipo</option>
            <option value="C">Componente</option>
            <option value="P">Parte</option>
            <option value="M">Materia Prima</option>
            <option value="S">Consumible</option>
            <option value="H">Herramienta</option>
          </select>
          <select
            className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40"
            onChange={(e) => departamentofunc(e.target.value)}
          >
            <option value="">Departamento</option>
            <option value="IT">Inteligencia</option>
            <option value="DA">Dominio Aeroespacial</option>
            <option value="IA">Integración Aviónica</option>
            <option value="AI">Armamento Inteligente</option>
            <option value="DO">Desarrollo Organizacional</option>
            <option value="IF">Informática</option>
            <option value="TC">Telecomunicaciones</option>
            <option value="TL">Torres Eléctricas</option>
            <option value="OM">Operaciones y Mantenimiento</option>
            <option value="NC">Navegación y Control de Tráfico Aéreo</option>
            <option value="PF">Procesos de Fabricación</option>
            <option value="RP">Regulación y Política Aeronáutica</option>
            <option value="DS">Defensa y Seguridad</option>
            <option value="TP">Tecnología de Propulsión Alternativa</option>
            <option value="DP">Diseño y Optimización</option>
            <option value="RE">Robótica Espacial</option>
          </select>
          <select
            className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40"
            onChange={(e) => sectorInvesfunc(e.target.value)}
          >
            <option value="">Sector de Investigación</option>
            <option value="01">Telecomunicaciones</option>
            <option value="02">Electrónica</option>
            <option value="03">Tecnología</option>
            <option value="04">Diseño</option>
            <option value="05">Propulsión</option>
            <option value="06">Aeronáutica</option>
            <option value="07">Automatización y Control</option>
            <option value="08">Mantenimiento Electrónico</option>
            <option value="09">Electrónica Programada</option>
            <option value="10">Fabricación</option>
            <option value="11">Ensamblaje</option>
            <option value="12">Navegación</option>
            <option value="13">Explosivos</option>
            <option value="14">Telecomunicaciones Bélicas</option>
            <option value="15">Productividad</option>
            <option value="16">Recursos Humanos</option>
            <option value="17">Clima Organizacional</option>
            <option value="18">Estructura Organizacional</option>
            <option value="19">Calidad</option>
            <option value="20">Doctrina del Poder Aéreo</option>
            <option value="21">Tecnología Led</option>
            <option value="22">Informática Tecnológica</option>
          </select>
          <select
            className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40"
            onChange={(e) => lineaInvesfunc(e.target.value)}
          >
            <option value="">Línea de Investigación</option>
            <option value="01">Telemetría</option>
            <option value="02">Fibra Óptica</option>
            <option value="03">Comunicaciones Estratégicas</option>
            <option value="04">Antenas Eléctro Ópticas</option>
            <option value="05">Sistemas Digitales</option>
            <option value="06">
              Comunicaciones de Guerra Electrónica: Desarrollo de Redes
              Neuronales
            </option>
            <option value="07">Sensores remotos</option>
            <option value="08">GPS</option>
            <option value="09">Telemetría aeroespacial</option>
            <option value="10">
              Navegación Aeroespacial, telecomunicaciones y control
            </option>
            <option value="11">Satélites</option>
            <option value="12">Cohetería</option>
            <option value="13">Aeronaves</option>
            <option value="14">Misiles</option>
            <option value="15">Planta de potencias motrices</option>
            <option value="16">Diseño de partes de aeronaves</option>
            <option value="17">Mecánica de vuelo</option>
            <option value="18">Procesos de fabricación</option>
            <option value="19">Gestión de mantenimiento</option>
            <option value="20">Aerodinámica</option>
            <option value="21">Simulación</option>
            <option value="22">Comunicaciones y banco de pruebas</option>
            <option value="23">Cargas</option>
            <option value="24">Inteligencia electronica y distribución</option>
            <option value="25">Plataforma guiada</option>
            <option value="26">Propelente</option>
            <option value="27">Carga militar</option>
            <option value="28">Telemetría bélica</option>
            <option value="29">Electro óptica</option>
            <option value="30">Planificación y control de producción</option>
            <option value="31">Mejoramiento continuo de procesos</option>
            <option value="32">Gestión de conocimiento</option>
            <option value="33">Modelos de competencia</option>
            <option value="34">
              Análisis de comportamiento organizacional
            </option>
            <option value="35">Cultura organizacional</option>
            <option value="36">
              Optimización y creación de estructuras organizativas
            </option>
            <option value="37">Reingeniería de procesos</option>
            <option value="38">Gerencia de procesos</option>
            <option value="39">Calidad total</option>
            <option value="40">Métodos industriales</option>
            <option value="41">Almacén y control de inventario</option>
            <option value="42">Básica</option>
            <option value="43">Funcional</option>
            <option value="44">Operacional</option>
            <option value="45">Conjunto</option>
            <option value="46">Telemática</option>
            <option value="47">Software</option>
            <option value="48">Diseño de hardware interfaces</option>
            <option value="49">Mantenimiento</option>
            <option value="50">Sistemas de alumbrado</option>
          </select>
          <select
            className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40"
            onChange={(e) => proveedoresfunc(e.target.value)}
          >
            <option value="">Proveedores</option>
            {data1?.map((item) => {
                  return (
                    <option key={item.idProveedor} value={item.codProveedor}>
                      {item.codProveedor}
                    </option>
                  );
                })}
          </select>
          <button className="bg-[#292929] text-white hover:bg-[#f6f6f6] hover:text-[#292929] shadow px-2 py-1 border rounded-xl">
            <Link className="flex flex-wrap items-end" to={"/AddMaterial"}>
              Agregar <IoIosAdd className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
      <div className={`pt-8 flex flex-wrap ${cambio2 ? "gap-6" : "gap-0"} max-sm:overflow-x-scroll`}>
        {cambio2 == true &&
          resultsId?.map((item) => {
            return (
              <Productos
                foto={`./${item.codEDetallado.replace(/ /g, "")}.png`}
                key={item.idCodProd}
                codigo={item.codSistema}
                titulo={item.nombre}
                idCodProd={item.idCodProd}
                deleteData={deleteData}
              />
            );
          })}
        {cambio2 == false &&
          resultsId?.map((item, index) => {
            return (
              <ProductoLista
                foto={`./${item.codEDetallado.replace(/ /g, "")}.png`}
                key={item.idCodProd}
                codigo={item.codSistema}
                titulo={item.nombre}
                idCodProd={item.idCodProd}
                deleteData={deleteData}
                bgcolor={index % 2 === 0 ? "bg-slate-200" : "bg-white"}
              />
            );
          })}
        {array && (
          <div className="w-full">
            <NoDisponible />
          </div>
        )}
      </div>

      <Success
        success={success}
        message={"Se ha creado el material correctamente"}
      />
      <Success success={update} message={"Se ha modificado exitosamente"} />

      {!resultsId && (
        <div className="relative -top-1/4 -z-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Catalogo;

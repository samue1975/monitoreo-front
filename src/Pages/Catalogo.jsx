/* eslint-disable react/prop-types */
import { IoIosAdd } from "react-icons/io";
import Busqueda from "../Components/Busqueda";
import Productos from "../Components/Productos";
import { Link } from "react-router-dom";
import Success from "../Components/alerts/Success";
import { useEffect, useState } from "react";
import useMethodFilter from "../api/useMethodFilter";
import Loader from '../Components/Loader'
/* import { urlGet, urlDelete } from '../Logic/ConsUrls' */


const Catalogo = ({ success, setSuccess, update, setUpdate
}) => {
  const [cambio, setCambio] = useState(false)

  const { results, searcher } = useMethodFilter('http://192.168.0.195:80/api/Catalogo/Listas/', cambio)
  function deleteData(id) {
    fetch(`http://192.168.0.195:80/api/Codigos/Eliminar/${id}`, {
      method: 'DELETE',
    }).then(respuesta => respuesta.json())
      .then(datos => {
        console.log(datos)
        setCambio(!cambio)
      })
  }
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false); // Ocultar la alerta después de 5 segundos
      }, 5000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success])


  useEffect(() => {
    if (update) {
      setTimeout(() => {
        setUpdate(false)
      }, ['5000'])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])




  return (
    <div className="col-span-5 pt-4 px-8">
      {/* APARTADO DE BUSQUEDA Y DE BOTONES */}
      <div className="flex flex-wrap justify-between pt-8">
        <Busqueda searcher={searcher} />
        <div className="flex flex-wrap gap-4">
          <select className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40">
            <option value="">Identificación</option>
            <option value="Equipo">Equipo</option>
            <option value="Componente">Componente</option>
            <option value="Parte">Parte</option>
            <option value="Materia Prima">Materia Prima</option>
            <option value="SConsumible">Consumible</option>
            <option value="Herramienta">Herramienta</option>
          </select>
          <select className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40">
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
          <select className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40">
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
          <select className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40">
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
          <select className="bg-[#f6f6f6] shadow px-2 py-1 border rounded-xl w-40">
            <option value="">Proveedores</option>
            <option value="001">001</option>
            <option value="002">002</option>
            <option value="003">003</option>
            <option value="004">004</option>
            <option value="005">005</option>
            <option value="006">006</option>
            <option value="007">007</option>
            <option value="008">008</option>
            <option value="009">009</option>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="012">012</option>
            <option value="013">013</option>
            <option value="014">014</option>
            <option value="015">015</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
            <option value="020">020</option>
            <option value="021">021</option>
            <option value="022">022</option>
            <option value="023">023</option>
            <option value="024">024</option>
            <option value="025">025</option>
            <option value="026">026</option>
          </select>
          <button className="bg-[#292929] text-white hover:bg-[#f6f6f6] hover:text-[#292929] shadow px-2 py-1 border rounded-xl">
            <Link className="flex flex-wrap items-end" to={"/AddMaterial"}>
              Agregar <IoIosAdd className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
      <div className="pt-8 flex-wrap gap-6 grid grid-cols-5">
        {results?.map((item) => {
          return (
            <Productos
              foto={`./${item.codEDetallado.replace(/ /g, "")}.png`}
              key={item.idCodProd}
              titulo={item.nombre}
              descripcion={item.descrip}
              idCodProd={item.idCodProd}
              deleteData={deleteData}
            />
          );
        })}
      </div>

      <Success success={success} message={'Se ha creado el material correctamente'} />
      <Success success={update} message={'Se ha modificado exitosamente'} />

      <div className="flex min-h-screen justify-center items-center">
        <Loader />

      </div>

    </div>
  );
};

export default Catalogo;

import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
/* import SelectImg from "./SelectImg";
 */import ErrorMsg from "./ErrorMsg";

const FormTable = ({ grid, error, text, border }) => {
  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center h-screen">
      <form
        className="py-4 px-20 flex flex-col gap-6 rounded-xl text-[#292929] shadow-sm border-[1px]"
        action=""
      >
        {/* MENSAJE DE ERROR */}
        <div
          onClick={error}
          className=" selection:bg-transparent animate-bounce absolute top-10 left-3/4 cursor-pointer p-2 bg-pink-200 rounded-2xl text-white font-bold shadow-lg"
        >
          MENSAJE DE ERROR
        </div>
        {/* FLECHA PARA IR HACIA ATRAS */}
        <Link className="text-xl text-[#292929] size-4" to={"/Catalogo"}>
          <BiArrowBack />
        </Link>
        {/* TODO EL FORULARIO */}
        <div className="gap-1 flex flex-col">
          <div className="flex flex-wrap gap-4 justify-end">
            <p className="font-semibold">Código OACI:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-52"
              type="text"
              value="VZLA"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Identificación:</p>
            <select
              className={`bg-[#F6F6F6] ${border} outline-none pl-4 pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
              required="required"
              id="select"
            >
              <option value=""></option>
              <option value="E">Equipo</option>
              <option value="C">Componente</option>
              <option value="P">Parte</option>
              <option value="M">Materia Prima</option>
              <option value="S">Consumible</option>
              <option value="H">Herramienta</option>
            </select>
          </div>
          <ErrorMsg display={`${text}`} />
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Area o Departamento:</p>
            <select
              className={`bg-[#F6F6F6] ${border} outline-none pl-4 pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
              required="required"
            >
              <option value=""></option>
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
          </div>
          <ErrorMsg display={`${text}`} />
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Sector de Investigación:</p>
            <select
              className={`bg-[#F6F6F6] ${border} outline-none pl-4 pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
              required="required"
            >
              <option value=""></option>
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
          </div>
          <ErrorMsg display={`${text}`} />
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Línea de Investigación:</p>
            <select
              id="valor_LineaInv"
              className={`bg-[#F6F6F6] ${border} outline-none pl-4 pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
              required="required"
            >
              <option value=""></option>
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
              <option value="24">
                Inteligencia electronica y distribución
              </option>
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
          </div>
          <ErrorMsg display={`${text}`} />
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Proveedores:</p>
            <select
              className={`bg-[#F6F6F6] ${border} outline-none pl-4 pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
              required="required"
            >
              <option value=""></option>
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
          </div>
          <ErrorMsg display={`${text}`} />
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">ID Cronológica:</p>
            <input
              className={`bg-[#F6F6F6] ${border} rounded outline-none pl-4 pr-1 text-[#292929] w-52`}
              placeholder="Codigo LMNOP"
              type="text"
            />
          </div>
          <ErrorMsg display={`${text}`} />
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <textarea
              className={`w-full min-h-[100px] max-h-[300px] h-28 ${border} border outline-none rounded-lg  py-4 px-4`}
              placeholder="Descripción del producto"
            ></textarea>
          </div>
          <ErrorMsg display={`${text}`} />
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Código de Barra:</p>
            <input
              className={`bg-[#F6F6F6] ${border} rounded outline-none pl-4 pr-1 text-[#292929] w-52`}
              placeholder="Codigo de Barras"
              type="text"
            />
          </div>
          <ErrorMsg display={`${text}`} />
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Código del Sistema:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-52"
              type="text"
            />
          </div>
          {/* SELECCIONAR IMAGEN */}
          <div className="pt-1"></div>
        </div>
        {/* ACEPTAR Y CANCELAR */}
        <div className="flex flex-wrap justify-around">
          <button className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer">
            Cancelar
          </button>
          <button className="bg-[#F6F6F6] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTable;

import { BiArrowBack } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
/* import SelectImg from "./SelectImg";*/
import ErrorMsg from "./ErrorMsg";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import useMethodPost from "../api/useMethodPost";
import Loader from "./Loader";


// eslint-disable-next-line react/prop-types
const FormTable = ({ setSuccess }) => {
  //Parametro de la ruta
  //useState
  const [data, setData] = useState();
  const [send, setSend] = useState(true)
  //useForm
  const { register, handleSubmit, formState: { errors } } = useForm();

  //methods CRUD
  //method Post
  const { /* errorsPost,  */ success } = useMethodPost(
    data,
    "http://192.168.0.195:80/api/codigos/RegistrodeCodigos"
  );
  //method Put
  const onSubmit = handleSubmit((data) => {
    setSend(false)
    setData(data)
  });

  //Constant 
  const border = 'border border-[#ff0000ad]'

  useEffect(() => {
    success && setSuccess(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);


  /* useEffect(() => {
    errorsPost || Object.entries(errors).length !== 0 && error()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]) */

  //Funcion concatenar el codigo del sistema
  /* function codConcat(palabra, num) {
    let codSystem = [...cod];
    codSystem[num] = palabra;
    setCod(codSystem);
    console.log(cod);
  } */
  return (
    <div className="flex flex-wrap col-span-5 justify-center items-center h-screen max-sm:px-4">
      {success ? <Navigate to={"/Catalogo"} /> : ""}
      {
        send ? (
          <form
            className="py-4 px-20 max-sm:px-4 max-sm:min-w-full flex flex-col gap-6 max-sm:py-8 rounded-xl text-[#292929] shadow-sm border-[1px]"
            onSubmit={onSubmit}
          >
            {/* FLECHA PARA IR HACIA ATRAS */}
            <Link className="text-xl text-[#292929] size-4" to={"/Catalogo"}>
              <BiArrowBack />
            </Link>
            {/* TODO EL FORULARIO */}
            <div className="gap-1 flex flex-col max-sm:gap-2">
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end">
                <p className="font-semibold">Código OACI:</p>
                <input
                  className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-52"
                  type="text"
                  value="VZLA"
                  {...register("CodOaci", { required: true })}
                />
              </div>
              <div className={`flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1`}>
                <p className="font-semibold">Nombre:</p>
                <input
                  className={`bg-[#F6F6F6] ${errors.Nombre ? border : null} rounded outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-52`}
                  type="text"
                  {...register("Nombre", { required: true })}
                />
              </div>
              {errors.Nombre ? <ErrorMsg text={`Completa correctamente el campo del Nombre`} /> : null}
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Identificación:</p>
                <select
                  className={`bg-[#F6F6F6] ${errors.CodE ? border : null} outline-none pl-4 max-sm:min-w-full pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
                  id="select"
                  {...register("CodE", { required: true })}
                >
                  <option value=""></option>
                  <option value="Equipo">Equipo</option>
                  <option value="Componente">Componente</option>
                  <option value="Parte">Parte</option>
                  <option value="Materia Prima">Materia Prima</option>
                  <option value="SConsumible">Consumible</option>
                  <option value="Herramienta">Herramienta</option>
                </select>
              </div>
              {errors.CodE ? <ErrorMsg text={`Completa correctamente el campo de Identificación`} /> : null}
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Area o Departamento:</p>
                <select
                  className={`bg-[#F6F6F6] ${errors.CodFg ? border : null} outline-none pl-4 max-sm:min-w-full pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
                  {...register("CodFg", { required: true })}
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
              {errors.CodFg ? <ErrorMsg text={`Completa correctamente el campo Area o Departamento`} /> : null}
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Sector de Investigación:</p>
                <select
                  className={`bg-[#F6F6F6] ${errors.CodHi ? border : null} outline-none pl-4 max-sm:min-w-full pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
                  {...register("CodHi", { required: true })}
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
              {errors.CodHi ? <ErrorMsg text={`Completa correctamente el campo Sector de Investigación`} /> : null}
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Línea de Investigación:</p>
                <select
                  id="valor_LineaInv"
                  className={`bg-[#F6F6F6] ${errors.CodJk ? border : null} outline-none pl-4 max-sm:min-w-full pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
                  {...register("CodJk", { required: true })}
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
              {errors.CodJk ? <ErrorMsg text={`Completa correctamente el campo Línea de Investigación`} /> : null}
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Proveedores:</p>
                <select
                  className={`bg-[#F6F6F6] ${errors.CodSu ? border : null} outline-none pl-4 max-sm:min-w-full pr-1 w-52 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]`}
                  {...register("CodSu", { required: true })}
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
              {errors.CodSu ? <ErrorMsg text={`Completa correctamente el campo Proveedores`} /> : null}
              <div className={`flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1`}>
                <p className="font-semibold">ID Cronológica:</p>
                <input
                  className={`bg-[#F6F6F6] ${errors.CodSu ? border : null} rounded outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-52`}
                  placeholder="Codigo LMNOP"
                  type="text"
                  {...register("CodLmnop", { required: true })}
                />
              </div>
              {errors.CodBarra ? <ErrorMsg text={`Completa correctamente el campo ID Cronológica`} /> : null}
              <div className="flex flex-wrap gap-4 justify-end pt-1">
                <textarea
                  className={`w-full min-h-[100px] max-h-[300px] h-28 ${errors.Descrip ? border : null} border outline-none rounded-lg  py-4 px-4`}
                  placeholder="Descripción del producto"
                  {...register("Descrip", { required: true })}
                ></textarea>
              </div>
              {errors.CodSu ? <ErrorMsg text={`Completa correctamente el campo Descripcion`} /> : null}
              <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
                <p className="font-semibold">Código de Barra:</p>
                <input
                  className={`bg-[#F6F6F6] ${errors.CodBarra ? border : null} rounded outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-52`}
                  placeholder="Codigo de Barras"
                  type="text"
                  {...register("CodBarra", { required: true })}
                />
              </div>
              {errors.CodBarra ? <ErrorMsg text={`Completa correctamente el campo Proveedores`} /> : null}
              {/* CODIGO GENERADO AUTOMATICAMENTE */}
              {/* 

          const [cod, setCod] = useState(new Array(5).fill(null));
  const [codSistema, setCodSistema] = useState("");

          useEffect(() => {
    let codConst = [...cod];
    codConst[0] = "VZLA";
    setCod(codConst);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
            En los imputs:
          onChangeCapture={(e) => {
                codConcat(e.target.value, 4);
              }}
          
          <div className="flex flex-wrap gap-4 max-sm:gap-0 max-sm:justify-start justify-end pt-1">
            <p className="font-semibold">Código del Sistema:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 max-sm:min-w-full pr-1 text-[#292929] w-52"
              type="text"
              value={codSistema}
              {...register("CodSistema")}
            />
          </div> */}
              {/* SELECCIONAR IMAGEN */}
              {/*           Modulo para cargar imagen
           */}{" "}
              {/* <SelectImg /> */}
            </div>
            {/* ACEPTAR Y CANCELAR */}
            <div className="flex flex-wrap justify-around py-6">
              <Link className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer" to={"/Catalogo"}>
                Cancelar
              </Link>
              <button className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer"
              >
                Aceptar
              </button>
            </div>
          </form>
        ) : <Loader />
      }
    </div>
  );
};

export default FormTable;

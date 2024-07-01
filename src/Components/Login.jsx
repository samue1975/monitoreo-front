import { ImCancelCircle } from "react-icons/im";
import "../assets/css/home.css";

const Login = ({ param, action }) => {
  return (
    <div
      className={`w-[380px] h-[420px] contenedor-gradiente rounded-[8px] fixed top-0 bottom-0 left-0 right-0 m-auto duration-200 ${param}`}
    >
      <form
        className="absolute inset-[2px] bg-[#292929] px-[50px] py-[40px] rounded-lg z-[2] flex flex-col"
        method="get"
      >
        <ImCancelCircle
          onClick={action}
          className="text-[#dfdfdf] absolute top-2 right-2 size-6 cursor-pointer hover:text-white"
        />
        <h1 className="text-white font-medium text-center tracking-widest">
          Iniciar Sesión
        </h1>
        <div className="relative w-[300px] mt-[35px]">
          <input
            className="relative element1 element3 w-full p-[10px] bg-transparent outline-none border-none text-[1em] tracking-wider duration-500 z-10"
            type="text"
            required
          />
          <span
            id="element2"
            className="absolute left-0 top-0 text-white p-3 pointer-events-none text-[1em] tracking-wider duration-500"
          >
            Usuario
          </span>
          <i
            id="element4"
            className="absolute left-0 bottom-0 w-full h-[2px] bg-white rounded-[4px] overflow-hidden duration-500 pointer-events-none"
          ></i>
        </div>

        <div className="relative w-[300px] mt-[35px]">
          <input
            className="relative element1 element3 w-full p-[10px] bg-transparent outline-none border-none text-[1em] tracking-wider duration-500 z-10"
            type="password"
            required
          />
          <span
            id="element2"
            className="absolute left-0 top-0 text-white p-3 pointer-events-none text-[1em] tracking-wider duration-500"
          >
            Contraseña
          </span>
          <i
            id="element4"
            className="absolute left-0 bottom-0 w-full h-[2px] bg-white rounded-[4px] overflow-hidden duration-500 pointer-events-none"
          ></i>
        </div>

        <div className="flex justify-between">
          <a id="links" href="#">
            Olvidó la contraseña?
          </a>
          <a id="links" href="#">
            Registrarse
          </a>
        </div>
        <input
          className="border-none outline-none py-[9px] px-[25px] bg-white cursor-pointer text-[0.9em] rounded-[4px] font-semibold w-full mt-[10px] active:opacity-80"
          type="submit"
          value="Acceder"
        />
      </form>
    </div>
  );
};

export default Login;

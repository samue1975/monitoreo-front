import { format } from "date-fns";
import "../assets/css/home.css";
import Loader from "../Components/Loader";
import ProductoLista from "../Components/ProductoLista";

const meses = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre",
};

const Home = () => {
  const fechaActual = new Date();
  const mes = fechaActual.getMonth(); // Enero es 0
  const año = fechaActual.getFullYear();
  const nombreMes = meses[mes]; // Obtener el nombre del mes

  const fechaFormateada = format(fechaActual, "dd"); // Formatear solo el día
  const fechaCompleta = `${fechaFormateada} de ${nombreMes} de ${año}`;

  return (
    <div className="col-span-5 px-14 py-8">
      <header className="flex justify-end w-full">
        <span className="text-gray-600">{fechaCompleta}</span>
      </header>
      <section className="flex flex-col gap-10">
        <h1 className="text-5xl text-center max-sm:text-4xl">
          Bienvenido al Sistema de <strong>Monitoreo y Control</strong>
        </h1>
        <h1 className="text-4xl text-center max-sm:text-3xl">
          Realizado por la Gerencia de Software
        </h1>
        <h1 className="text-6xl text-center flex justify-center gap-5 max-sm:text-5xl">
          Para
          <div className="flex font-semibold selection:bg-transparent cursor-default">
            <div className="text-[yellow] shadowEa">E</div>
            <div className="text-[blue] shadowEa">N</div>
            <div className="text-[red] shadowEa">SA</div>
          </div>
        </h1>
        <div className="fixed right-0 left-0 m-auto max-[680px]:top-1/3 -z-10">
          <Loader />
        </div>
      </section>
    </div>
  );
};

export default Home;

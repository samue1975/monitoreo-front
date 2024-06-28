import LineCharts from "../Components/LineCharts";
import { format } from "date-fns";
import Login from "../Components/Login";

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
      <header className="flex flex-wrap justify-between items-start">
        <div className="flex flex-col flex-wrap">
          <h1 className="font-medium text-2xl">
            Bienvenido, Equipo de Sistemas!
          </h1>
          <span className="text-gray-600">{fechaCompleta}</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <button className="p-2 border bg-[#f6f6f6] hover:text-white hover:bg-[#292929] rounded-2xl font-semibold">
              Login
            </button>
            <Login />
          </div>
          <div>
            <button className="p-2 border bg-[#f6f6f6] hover:text-white hover:bg-[#292929] rounded-2xl font-semibold">
              Register
            </button>
          </div>
        </div>
      </header>
      <LineCharts />
    </div>
  );
};

export default Home;

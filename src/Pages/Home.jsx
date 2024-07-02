import LineCharts from "../Components/LineCharts";
import { format } from "date-fns";
import Login from "../Components/Login";
import { useState } from "react";

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
  const [abrir, setAbrir] = useState(false);
  const toggleAbrir = () => {
    setAbrir(!abrir);
  };

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
          <h1 className="font-medium text-2xl text-red-500">
            Bienvenido, Equipo de Sistemas!
          </h1>
          <span className="text-gray-600">{fechaCompleta}</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <button
              onClick={toggleAbrir}
              className="p-2 border text-white shadow bg-[#292929] rounded-2xl font-semibold"
            >
              Cuenta de Usuario
            </button>
            <Login
              param={abrir ? "opacity-1 z-30" : "opacity-0 scale-0 -z-30"}
              action={toggleAbrir}
            />
          </div>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4 py-10">
        <LineCharts
          e={"1124"}
          c={"1686"}
          p={"2249"}
          m={"2811"}
          s={"2267"}
          h={"754"}
          titulo={"Agregados en el Mes"}
        />
        <LineCharts
          e={"181"}
          c={"321"}
          p={"762"}
          m={"52"}
          s={"566"}
          h={"188"}
          titulo={"Agregados en la Semana"}
        />
        <LineCharts
          e={"37"}
          c={"56"}
          p={"64"}
          m={"33"}
          s={"75"}
          h={"25"}
          titulo={"Agregados en el Día"}
        />
      </div>
    </div>
  );
};

export default Home;

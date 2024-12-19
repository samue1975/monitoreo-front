import { format } from "date-fns";
import "../assets/css/home.css";
import CTA_main from "../Components/CTA_main";
import { BiCategory } from "react-icons/bi";
import { CgToolbox } from "react-icons/cg";
import { BsFilePerson } from "react-icons/bs";
import { GrDeliver, GrSystem } from "react-icons/gr";

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

const Home = ({ option1 }) => {
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
      <section className="flex flex-wrap gap-5 justify-between max-[667px]: max-[667px]:gap-0 max-[457px]:gap-7">
        <CTA_main
          color={"bg-yellow-500"}
          texto={"Catálago"}
          icon={<BiCategory className="size-14" />}
          dir={"/Catalogo"}
        />
        <CTA_main
          color={"bg-blue-500"}
          texto={"Inventario"}
          icon={<CgToolbox className="size-14" />}
          dir={"/Inventario"}
        />
        <CTA_main
          color={"bg-red-500"}
          texto={"Proveedores"}
          icon={<GrDeliver className="size-14" />}
          dir={"/Proveedores"}
        />
        <CTA_main
          color={"bg-slate-400"}
          texto={"Sistemas"}
          icon={<GrSystem className="size-14" />}
          dir={"/Home"}
          option={option1}
        />
        <CTA_main
          color={"bg-green-500"}
          texto={"Responsable"}
          icon={<BsFilePerson className="size-14" />}
          dir={"/Responsable"}
        />
      </section>
    </div>
  );
};

export default Home;

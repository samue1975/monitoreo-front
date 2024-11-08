import { Link } from "react-router-dom";
import Identificador from "./Identificador";

const DetailsSistemas = () => {
  return (
    <div className="col-span-5 flex justify-center pt-12 pb-4">
      <Identificador titulo={`DETALLES DE ANSU-700`} />
      <div>
        <Link to={"/OrdenTrabajoEA"}></Link>
        <Link to={"/SolicitudDespachoEA"}></Link>
        <Link to={"/OrdenDespachoEA"}></Link>
      </div>
    </div>
  );
};

export default DetailsSistemas;

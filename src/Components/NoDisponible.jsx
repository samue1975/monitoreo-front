import Loader from "./Loader";

const NoDisponible = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="text-3xl text-center">No se han encontrado resultados</h1>
      <p className="text-xl text-center">
        Prueba con otros filtros de búsqueda
      </p>
      <span className="relative -top-52 left-0">
        <Loader />
      </span>
    </div>
  );
};

export default NoDisponible;

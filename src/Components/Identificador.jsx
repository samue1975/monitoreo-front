const Identificador = ({ titulo }) => {
  return (
    <div>
      <h1 className="fixed top-0 left-0 bg-white w-full text-center py-2 font-semibold shadowHeader z-[1]">
        {titulo}
      </h1>
    </div>
  );
};

export default Identificador;

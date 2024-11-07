const ProductosSistema = ({ nombre }) => {
  return (
    <div className="w-80 h-36 bg-[#f6f6f6] flex flex-col justify-between gap-2">
      <div className="flex">
        {/* CUADRO DE IMAGEN */}
        <div className="min-w-36 min-h-36 flex justify-start">
          <img
            className="object-cover object-center min-w-full min-h-full"
            src="Horizontal.jpg"
          />
        </div>
        {/* PARTE DERECHA */}
        <div className="px-1 pt-2 flex flex-col justify-between min-w-44">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-semibold text-lg">SISTEMA</h1>
            <p className="text-overflow:ellipsis line-clamp-1 text-2xl font-light">
              {nombre}
            </p>
          </div>

          {/* OPCIONES DE EDITAR */}
          <div className="flex gap-1">
            <button className="w-1/2 bg-[#292929] text-center text-white">
              Detalles
            </button>
            <button className="w-1/2 bg-[#292929] text-center text-white">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosSistema;

const ProductoLista = () => {
  return (
    <div className="h-10 w-full flex justify-between items-center bg-slate-50">
      {/* CUADRO DE IMAGEN */}
      <div className="w-[5%] border flex justify-center">
        <img
          className="max-w-10 min-h-full bg-center bg-cover saturate-0"
          src="Equipo.png"
        />
      </div>
      {/* TITULO */}
      <div className="w-[32%] h-full flex items-center border">
        <h1 className="font-medium">Servidor Rack Promocional De Navidad</h1>
      </div>
      {/* DESCRIPCION */}
      <div className="w-[45%] h-full flex items-center border">
        <p>
          Un servidor dedicado unica y exclusivamente para alojar sitios web
        </p>
      </div>
      <div className="w-[18%] h-full flex items-center border gap-1">
        <button className="h-full w-1/2 bg-[#292929] text-white p-2">
          Detalles
        </button>
        <button className="h-full w-1/2 bg-[#292929] text-white">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductoLista;

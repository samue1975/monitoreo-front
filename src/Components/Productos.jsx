const Productos = () => {
  return (
    <div className="flex flex-wrap">
      <div className="border rounded-2xl flex flex-col flex-wrap w-32 shadow cursor-pointer">
        <img
          className=""
          src="https://img.freepik.com/vector-premium/icono-martillo-estilo-dibujos-animados-aislado-sobre-fondo-blanco-ilustracion-vector-stock-simbolo-herramienta_258706-373.jpg?w=740"
        />
        <div className="flex flex-col flex-wrap pl-1 w-32">
          <h1>Martillo</h1>
          <p>Herramienta</p>
        </div>
      </div>
    </div>
  );
};

export default Productos;

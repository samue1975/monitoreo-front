const Login = () => {
  return (
    <div className="fixed top-auto left-auto p-4 border flex flex-col gap-2">
      {/* LOGIN */}
      <div>
        <label className="relative font-light">nombre</label>
        <input className="outline-none bg-[#f6f6f6] px-2" type="email" />
      </div>
      {/* CONTRASEÑA */}
      <div>
        <label className="relative font-light">contraseña</label>
        <input className="outline-none bg-[#f6f6f6] px-2" type="password" />
      </div>
      {/* OPCIONES DE CONTRASEÑA */}
      <div className="flex flex-col flex-wrap justify-center items-center gap-1">
        <h1 className="flex text-xs">
          <input type="checkbox" /> Recordar Contraseña
        </h1>
        <h1 className="text-xs hover:underline cursor-pointer">
          Olvidó su contraseña?
        </h1>
      </div>
      {/* BOTON INPUT */}
      <div className="flex">
        <button className="w-full border font-semibold bg-[#F6F6F6] hover:text-white hover:bg-[#292929]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

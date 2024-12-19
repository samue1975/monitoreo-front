const Login = () => {
  return (
    <div className="relative col-span-5 bg-[url('LoginBackground.png')] bg-cover bg-center h-screen">
      <span className="absolute inset-0 bg-opacity-50 bg-black">
        {/* Un fondo oscuro semi transparente para ajustar la visibilidad*/}
      </span>
      <section>
        <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 bg-[#F6F6F6] opacity-95 backdrop-blur-md">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-500 text-sm font-bold">
                  INICIO DE SESIÓN
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form className="flex flex-col gap-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                    USUARIO
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow outline-none w-full"
                    placeholder="Ingrese su usuario"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                    CONTRASEÑA
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow outline-none w-full"
                    placeholder="Ingrese su contraseña"
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none mr-1 mb-1 w-full bg-[#292929]"
                    type="button"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

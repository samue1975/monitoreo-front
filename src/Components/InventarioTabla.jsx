import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const ProductCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(""); // ESTADO PARA ALMACENAR EL PRODUCTO SELECCIONADO

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value); // CAMBIA EL ESTADO CUANDO HAY UN CAMBIO
  };

  return (
    <div className="col-span-5 flex flex-wrap col-span-5 justify-center items-center h-screen">
      {/* TODO EL FORMULARIO */}
      <form
        className="py-4 px-20 flex flex-col h-64 gap-6 rounded-xl text-[#292929] shadow-sm border-[1px]"
        action=""
      >
        {/* FLECHA PARA IR HACIA ATRAS */}
        <Link className="text-xl text-[#292929] size-4" to={"/Inventario"}>
          <BiArrowBack />
        </Link>

        <div className="flex flex-col">
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Catálogo:</p>
            <select
              className="bg-[#F6F6F6] outline-none pl-4 pr-1 w-72 rounded text-[#292929] hover:bg-[#f0f0f0] font-[poppins]"
              id="catalogSelect"
              value={selectedProduct}
              onChange={handleProductChange}
              required="required"
            >
              <option value=""></option>
              <option value="OACI-E-IT-03-15-004-955944-BA233">
                Servidor Rack
              </option>
              <option value="OACI-C-DA-05-32-023-485884-JS238">Motor</option>
              <option value="OACI-P-IA-07-24-001-234443-KI283">
                Correa de Distribución
              </option>
              <option value="OACI-M-AI-09-35-010-554543-PI110">
                Barra de Acero
              </option>
              <option value="OACI-S-DO-12-16-009-443667-UT211">
                Aceite de Motor
              </option>
              <option value="OACI-H-IF-15-11-005-887990-JH023 ">
                Llave Inglesa
              </option>
            </select>
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Código del Sistema:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              id="systemCodeInput"
              type="text"
              value={selectedProduct}
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Lote:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              type="number"
            />
          </div>
          <div className="flex flex-wrap gap-4 justify-end pt-1">
            <p className="font-semibold">Cantidad:</p>
            <input
              className="bg-[#F6F6F6] border-none outline-none pl-4 pr-1 text-[#292929] w-72"
              type="number"
            />
          </div>
          {/* ACEPTAR Y CANCELAR */}
          <div className="flex flex-wrap justify-around py-6">
            <button className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer">
              Cancelar
            </button>
            <button className="bg-[#F6F6F6] hover:bg-[#F0F0F0] text-[#292929] font-semibold py-1 px-3 border shadow-sm rounded-md cursor-pointer">
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductCatalog;

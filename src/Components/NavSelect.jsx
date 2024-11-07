import { BiSubdirectoryRight } from "react-icons/bi";
import "../assets/css/nav.css";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NavSelect = ({ icon, title, option, options, moving }) => {
  

  return (
    <div>
      <div
        onClick={option}
        className="flex justify-between items-center px-4 py-1 rounded-r-full bg-white text-[#292929] cursor-pointer element pr-6 hover:pr-4 duration-200 selection:bg-transparent"
      >
        <div className=" flex items-center gap-2 text-lg">
          <span className="text-3xl">{icon}</span>
          <p>{title}</p>
        </div>
        <div
          className={`bg-[#292929] rounded-full duration-200 flex justify-center items-center text-white`}
          id="pelota"
        >
          <IoIosArrowUp className={`${moving}`} />
        </div>
      </div>
      <div className={`${moving} text-white px-4 py-2 gap-2 flex flex-col`}>
        <Link
        onClick={options}
          to={"/SistemasEA"}
          className="flex selection:bg-transparent items-center rounded-r-full bg-white text-[#292929] cursor-pointer"
        >
          <BiSubdirectoryRight />
          Ensamblaje Avionica
        </Link>
        <Link
        onClick={options}
          to={"/SistemasMC"}
          className="flex selection:bg-transparent items-center rounded-r-full bg-white text-[#292929] cursor-pointer"
        >
          <BiSubdirectoryRight />
          Material Compuesto
        </Link>
        <Link
        onClick={options}
          to={"/SistemasIP"}
          className="flex selection:bg-transparent items-center rounded-r-full bg-white text-[#292929] cursor-pointer"
        >
          <BiSubdirectoryRight />
          Integracion y Prueba
        </Link>
        <Link
        onClick={options}
          to={"/SistemasEE"}
          className="flex selection:bg-transparent items-center rounded-r-full bg-white text-[#292929] cursor-pointer"
        >
          <BiSubdirectoryRight />
          Ensamblaje
        </Link>
      </div>
    </div>
  );
};

export default NavSelect;

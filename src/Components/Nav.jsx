import NavButtons from "../Components/NavButtons";
import { Link } from "react-router-dom";
import { BiCategory, BiHome, BiSolidTag } from "react-icons/bi";
import { CgToolbox } from "react-icons/cg";

// eslint-disable-next-line react/prop-types
const Nav = ({ toggle, color, move, bgcolor }) => {
  return (
    <div>
      <BiSolidTag
        onClickCapture={toggle}
        className={`z-30 top-0 absolute text-4xl ${color} text-[#292929] duration-100 cursor-pointer`}
      />
      <div
        onMouseLeave={toggle}
        className={`bg-[#292929] h-screen flex flex-col gap-8 absolute top-0 w-1/5 ${move} duration-300 z-20`}
      >
        {/* ========LOGO DE LA EMPRESA======== */}
        <div className="flex justify-center flex-col items-center py-6 selection:bg-transparent">
          <img className=" size-20" src="LogoEansa.png" />
          <h1 className="text-white text-2xl font-semibold">INVENTARIO</h1>
        </div>
        <div className="flex flex-col gap-1 pr-4">
          <Link to={"/Home"}>
            <NavButtons icon={<BiHome />} title={"Inicio"} />
          </Link>
          <Link to={"/Catalogo"}>
            <NavButtons icon={<BiCategory />} title={"Catalogo"} />
          </Link>
          <Link to={"/Materiales"}>
            <NavButtons icon={<CgToolbox />} title={"Materiales"} />
          </Link>
        </div>
      </div>
      {/* FONDO NEGRO CON OPACIDAD */}
      <div
        className={`absolute top-0 left-0 h-screen  w-full bg-[#292929] opacity-[0.5] z-0 ${bgcolor}`}
      ></div>
    </div>
  );
};

export default Nav;

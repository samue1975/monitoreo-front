import NavButtons from "../Components/NavButtons";
import { Link } from "react-router-dom";
import { BiCategory, BiHome, BiSolidTag } from "react-icons/bi";
import { CgToolbox } from "react-icons/cg";
import { BsFilePerson } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Nav = ({ toggle, color, move, bgcolor }) => {
  return (
    <div>
      <BiSolidTag
        onClickCapture={toggle}
        className={`z-30 top-0 fixed text-4xl ${color} text-[#292929] duration-100 cursor-pointer`}
      />
      <div
        className={`bg-[#292929] h-full flex flex-col gap-8 fixed top-0 w-1/5 max-sm:w-full max-lg:w-1/3 ${move} duration-300 z-20`}
      >
        {/* ========LOGO DE LA EMPRESA======== */}
        <div className="flex justify-center items-center py-6 selection:bg-transparent">
          <img className="size-20" src="LogoEansa.png" />
        </div>
        <div className="flex flex-col gap-1 pr-4">
          <Link to={"/Home"}>
            <NavButtons icon={<BiHome />} title={"Inicio"} option={toggle} />
          </Link>
          <Link to={"/Catalogo"}>
            <NavButtons
              icon={<BiCategory />}
              title={"Catalogo"}
              option={toggle}
            />
          </Link>
          <Link to={"/Inventario"}>
            <NavButtons
              icon={<CgToolbox />}
              title={"Inventario"}
              option={toggle}
            />
          </Link>
          <Link to={"/Proveedores"}>
            <NavButtons
              icon={<BsFilePerson />}
              title={"Proveedores"}
              option={toggle}
            />
          </Link>
        </div>
      </div>
      {/* FONDO NEGRO CON OPACIDAD */}
      <div
        onClick={toggle}
        className={`fixed top-0 left-0 h-full  w-full bg-[#292929] opacity-[0.5] z-0 ${bgcolor}`}
      ></div>
    </div>
  );
};

export default Nav;

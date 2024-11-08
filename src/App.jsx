import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Catalogo from "./Pages/Catalogo";
import Inventario from "./Pages/Inventario";
import FormTable from "./Components/FormTable";
import { useState } from "react";
import AddInventario from "./Components/tablesPost/AddInventario";
import Details from "./Components/Details";
import FormTable2 from "./Components/FormTable2";
import AddProveedores from "./Components/tablesPost/AddProveedores";
import Proveedores from "./Pages/Proveedores";
import Sistemas from "./Pages/Sistemas";
import AddSistemas from "./Components/tablesPost/AddSistemas";
import Responsable from "./Pages/Responsable";
import AddResponsable from "./Components/tablesPost/AddResponsable";
import EditResponsable from "./Components/tablesPost/EditResponsable";
import EditInventario from "./Components/tablesPost/EditInventario";
import DetailsSistemas from "./Components/DetailsSistemas";

function App() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [success, setSuccess] = useState(false);
  const [update, setUpdate] = useState(false);
  const [put, setPut] = useState(false);
  const [select, setSelect] = useState(false);

  const [elSwitch, setElSwitch] = useState(false);
  const cambiarSwitch = () => {
    setElSwitch(!elSwitch);
  };

  const toggleMenu = () => {
    setOpen(!open);
    {
      select ? setSelect(!select) : setSelect(select);
    }
  };
  const errorMenu = () => {
    setColor(!color);
  };

  const Desplegable = () => {
    setSelect(!select);
  };

  return (
    <>
      <div className="grid grid-cols-5 font-poppins">
        <Nav
          toggle={toggleMenu}
          option1={Desplegable}
          options1={toggleMenu}
          move={
            open ? "left-0" : " max-sm:-left-full max-lg:-left-1/3 -left-1/4"
          }
          color={
            open ? "z-30 text-white max-sm:block hidden" : "rotate-180 left-0"
          }
          bgcolor={open ? "block" : "hidden"}
          faded={open ? "" : "hidden"}
          moving1={select ? "block" : "hidden"}
        />
        <Routes>
          {/* INICIO */}
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />

          {/* CATALOGO */}
          <Route
            path="/Catalogo"
            element={
              <Catalogo
                success={success}
                setSuccess={setSuccess}
                update={update}
                setUpdate={setUpdate}
                cambio1={cambiarSwitch}
                cambio2={elSwitch}
              />
            }
          />
          <Route path="/Catalogo/:id" element={<Details />} />
          <Route
            path="/Catalogo/:id/Modificar"
            element={
              <FormTable2
                error={errorMenu}
                border={color ? "border border-[#ff0000ad]" : ""}
                text={color ? "block" : "hidden"}
                setUpdate={setUpdate}
                setPut={setPut}
                put={put}
              />
            }
          />
          <Route
            path="/AddMaterial"
            element={<FormTable setSuccess={setSuccess} />}
          />
          <Route path="/Catalogo/:id" element={<Details />} />

          {/*INVENTARIO */}
          <Route path="/Inventario" element={<Inventario />} />
          <Route path="/AddInventario" element={<AddInventario />} />
          <Route
            path="/Inventario/:id"
            element={
              <EditInventario setUpdate={setUpdate} setPut={setPut} put={put} />
            }
          />
          {/* <Route path="/Inventario/:id/Modificar" element={<EditInventario />} />  */}

          {/*PROVEEDORES*/}
          <Route
            path="/AddProveedores"
            element={<AddProveedores setSuccess={setSuccess} />}
          />
          <Route
            path="/Proveedores"
            element={<Proveedores success={success} setSuccess={setSuccess} />}
          />

          {/* SISTEMAS */}
          <Route
            path="/SistemasEA"
            element={
              <Sistemas
                titulo={"ENSAMBLAJE AVIONICA"}
                agregar={"/AddSistemaEA"}
              />
            }
          />
          <Route
            path="/SistemasMC"
            element={
              <Sistemas
                titulo={"MATERIAL COMPUESTO"}
                agregar={"/AddSistemaMC"}
              />
            }
          />
          <Route
            path="/SistemasIP"
            element={
              <Sistemas
                titulo={"INTEGRACION Y PRUEBA"}
                agregar={"/AddSistemaIP"}
              />
            }
          />
          <Route
            path="/SistemasEE"
            element={
              <Sistemas titulo={"ENSAMBLAJE"} agregar={"/AddSistemaEE"} />
            }
          />
          <Route
            path="/AddSistemaEA"
            element={<AddSistemas titulo={"ENSAMBLAJE AVIONICA"} />}
          />
          <Route
            path="/AddSistemaMC"
            element={<AddSistemas titulo={"MATERIAL COMPUESTO"} />}
          />
          <Route
            path="/AddSistemaIP"
            element={<AddSistemas titulo={"INTEGRACION Y PRUEBA"} />}
          />
          <Route
            path="/AddSistemaEE"
            element={<AddSistemas titulo={"ENSAMBLAJE"} />}
          />

          {/* SISTEMAS DETALLES */}
          <Route path="/DetallesEA" element={<DetailsSistemas />} />

          {/* RESPONSABLE */}
          <Route
            path="/Responsable"
            element={<Responsable success={success} setSuccess={setSuccess} />}
          />
          <Route
            path="/AddResponsable"
            element={<AddResponsable setSuccess={setSuccess} />}
          />
          <Route
            path="/Responsable/:id"
            element={
              <EditResponsable
                setUpdate={setUpdate}
                setPut={setPut}
                put={put}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

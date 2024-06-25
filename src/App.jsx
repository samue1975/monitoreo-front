import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Catalogo from "./Pages/Catalogo";
import Inventario from "./Pages/Inventario";
import FormTable from "./Components/FormTable";
import { useState } from "react";
import InventarioTabla from "./Components/InventarioTabla";

function App() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const errorMenu = () => {
    setColor(!color);
  };
  return (
    <>
      <div className="grid grid-cols-5 font-poppins">
        <Nav
          toggle={toggleMenu}
          move={open ? "left-0" : "-left-1/4"}
          color={open ? "hidden" : "rotate-180 left-0 color"}
          bgcolor={open ? "block" : "hidden"}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Catalogo"
            element={
              <Catalogo
                Nombre={"Barra de Acero"}
                Cantidad={"425"}
                CodOaci={"OACI"}
                CodE={"Material"}
                CodFg={"Armamento Inteligente"}
                CodHi={"Electrónica Programada"}
                CodJk={"Cultura Organizacional"}
                CodSu={"Empresa de Hierros Vzla"}
                CodLmnop={"PI110"}
                Descrip={"Materia Prima para bla bla"}
                CodBarra={"554543"}
                CodSistema={"OACIMAI0935010554543PI110"}
                Codigo={"OACIMAI0935010554543PI110-BLA-BLA-BLA"}
              />
            }
          />
          <Route path="/Inventario" element={<Inventario />} />
          <Route
            path="/AddMaterial"
            element={
              <FormTable
                error={errorMenu}
                border={color ? "border border-[#ff0000ad]" : ""}
                text={color ? "block" : "hidden"}
              />
            }
          />
          <Route path="/AddInventario" element={<InventarioTabla />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

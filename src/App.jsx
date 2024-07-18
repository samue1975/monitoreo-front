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
import AddProveedores from "./Components/tablesPost/AddProveedores"
import Proveedores from "./Pages/Proveedores"

function App() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [success, setSuccess] = useState(false);
  const [update, setUpdate] = useState(false);
  const [put, setPut] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  const errorMenu = () => {
    setColor(!color);
  };
  return (
    <>
      <div className="grid grid-cols-5 font-poppins max-w-">
        <Nav
          toggle={toggleMenu}
          move={
            open ? "left-0" : " max-sm:-left-full max-lg:-left-1/3 -left-1/4"
          }
          color={
            open ? "z-30 text-white max-sm:block hidden" : "rotate-180 left-0"
          }
          bgcolor={open ? "block" : "hidden"}
          faded={open ? "" : "hidden"}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Catalogo"
            element={
              <Catalogo
                success={success}
                setSuccess={setSuccess}
                update={update}
                setUpdate={setUpdate}
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
          <Route path="/Catalogo/:id" element={<Details />} />
          <Route path="/Inventario" element={<Inventario />} />
          <Route
            path="/AddMaterial"
            element={
              <FormTable
                error={errorMenu}
                border={color ? "border border-[#ff0000ad]" : ""}
                text={color ? "block" : "hidden"}
                setSuccess={setSuccess}
              />
            }
          />
          <Route path="/AddInventario" element={<AddInventario />} />
          <Route path="/AddProveedores" element={<AddProveedores />} />
          <Route path="/Proveedores" element={<Proveedores />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

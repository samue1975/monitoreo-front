import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Catalogo from "./Pages/Catalogo";
import Inventario from "./Pages/Inventario";
import FormTable from "./Components/FormTable";
import { useState } from "react";
import InventarioTabla from "./Components/InventarioTabla";
import Details from "./Components/Details";
import FormTable2 from "./Components/FormTable2";

function App() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [success, setSuccess] = useState(false)
  const [update, setUpdate] = useState(false)

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
          faded={open ? "" : "hidden"}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/Catalogo"
            element={<Catalogo success={success} setSuccess={setSuccess} update={update} setUpdate={setUpdate} />}
          />
          <Route
            path="/Catalogo/:id"
            element={<Details />}
          />
          <Route
            path="/Catalogo/:id/Modificar"
            element={<FormTable2
              error={errorMenu}
              border={color ? "border border-[#ff0000ad]" : ""}
              text={color ? "block" : "hidden"}
              setUpdate={setUpdate}
            />}
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
          <Route path="/AddInventario" element={<InventarioTabla />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

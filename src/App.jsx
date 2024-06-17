import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Catalogo from "./Pages/Catalogo";
import Materiales from "./Pages/Materiales";
import FormTable from "./Components/FormTable";
import { useState } from "react";

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
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Materiales" element={<Materiales />} />
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
        </Routes>
      </div>
    </>
  );
}

export default App;

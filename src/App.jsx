import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Ordenes from "./pages/Ordenes";
import Productos from "./pages/Productos";
import Categorias from "./pages/Categorias";
import Clientes from "./pages/Clientes";
import CreateAdmin from "./pages/CreateAdmin";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/crear" element={<CreateAdmin />} />
        <Route path="/ordenes" element={<Ordenes />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Ordenes from "./pages/Ordenes";
import Productos from "./pages/Productos";
import Categorias from "./pages/Categorias";
import Clientes from "./pages/Clientes";
import CreateAdmin from "./pages/CreateAdmin";
import EditAdmin from "./pages/EditAdmin";
import VerOrden from "./pages/VerOrden";
import EditOrden from "./pages/EditOrden";
import VerProducto from "./pages/VerProducto";
import CreateProducto from "./pages/CreateProducto";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/crear" element={<CreateAdmin />} />
        <Route path="/admin/editar/:id" element={<EditAdmin />} />

        <Route path="/ordenes" element={<Ordenes />} />
        <Route path="/ordenes/:id" element={<VerOrden />} />
        <Route path="/ordenes/editar/:id" element={<EditOrden />} />

        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<VerProducto />} />
        <Route path="/productos/crear" element={<CreateProducto />} />
        <Route path="/productos/editar/:id" element={<Productos />} />

        <Route path="/categorias" element={<Categorias />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </>
  );
}

export default App;

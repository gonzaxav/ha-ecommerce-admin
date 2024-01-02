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
import EditProducto from "./pages/EditProducto";
import CreateCategoria from "./pages/CreateCategoria";
import EditCategoria from "./pages/EditCategoria";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/crear" element={<CreateAdmin />} />
            <Route path="/admin/editar/:id" element={<EditAdmin />} />

            <Route path="/ordenes" element={<Ordenes />} />
            <Route path="/ordenes/:id" element={<VerOrden />} />
            <Route path="/ordenes/editar/:id" element={<EditOrden />} />

            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:slug" element={<VerProducto />} />
            <Route path="/productos/crear" element={<CreateProducto />} />
            <Route path="/productos/editar/:slug" element={<EditProducto />} />

            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categorias/crear" element={<CreateCategoria />} />
            <Route path="/categorias/editar/:slug" element={<EditCategoria />} />

            <Route path="/clientes" element={<Clientes />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;

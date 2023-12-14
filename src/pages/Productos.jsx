import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import ProductosTr from "../components/ProductosTr";

function Ordenes() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const [productos, setProductos] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${apiUrl}products?includeinactive=true&buscar=${search}`)
      .then((response) => {
        setProductos(response.data.products);
      });
  }, [trigger, search]);

  const handleClickCrear = () => {
    navigate("crear");
  };

  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <Sidebar />
          <div className="col-10 g-0 d-flex flex-column">
            <Topbar
              name="Productos"
              placeholder="por id, nombre, descripción"
              setSearch={setSearch}
            />
            <section className="lightcream flex-grow-1 p-3">
              <div className="rounded">
                <button
                  className="btn btn-orange-fill mb-3"
                  onClick={handleClickCrear}
                >
                  Crear
                </button>
                <table className="table table-hover table-striped-columns align-middle table-transparent mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Categoría</th>
                      <th scope="col">Destacado</th>
                      <th scope="col">Descripción corta</th>
                      <th scope="col">Activo?</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos &&
                      productos.map((product) => (
                        <ProductosTr key={product._id} product={product} />
                      ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordenes;

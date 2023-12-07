import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import ProductosTr from "../components/ProductosTr";

function Ordenes() {
  const [productos, setProductos] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?includeinactive=true`)
      .then((response) => {
        setProductos(response.data.products);
        console.log(response.data.products);
      });
  }, [trigger]);

  const handleClickCrear = () => {
    navigate("crear");
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name="Productos" />
            <section className="lightcream flex-grow-1 h-100 p-3">
              <div className="rounded overflow-hidden">
                <button
                  className="btn btn-primary mb-3"
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
                      <th scope="col">Featured</th>
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

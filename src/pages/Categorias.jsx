import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CategoriaTr from "../components/CategoriaTr";

function Categorias() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const [categorias, setCategorias] = useState(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${apiUrl}category?includeinactive=true&buscar=${search}`)
      .then((response) => {
        setCategorias(response.data.categories);
      });
  }, [search]);

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
              name="Categorías"
              placeholder="por id, nombre"
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
                <div className="rounded">
                  <table className="table table-hover table-striped-columns align-middle table-transparent mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Activo?</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categorias &&
                        categorias.map((categoria) => (
                          <CategoriaTr
                            key={categoria._id}
                            categoria={categoria}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categorias;

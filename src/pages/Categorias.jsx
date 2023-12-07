import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CategoriaTr from "../components/CategoriaTr";

function Categorias() {
  const [categorias, setCategorias] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/category?includeinactive=true`)
      .then((response) => {
        setCategorias(response.data.categories);
      });
  }, []);

  const handleClickCrear = () => {
    navigate("crear");
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name="Categorías" />
            <section className="lightcream flex-grow-1 h-100 p-3">
              <div className="rounded overflow-hidden">
                <button
                  className="btn btn-primary mb-3"
                  onClick={handleClickCrear}
                >
                  Crear
                </button>
                <div className="rounded overflow-hidden">
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

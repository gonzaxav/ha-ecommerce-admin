import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Modal from "react-bootstrap/Modal";
import AdminTr from "../components/AdminTr";

function Admin() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const [admins, setAdmins] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}admins?buscar=${search}`).then((response) => {
      setAdmins(response.data.admins);
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
              name="Admin"
              placeholder="por id, nombre, apellido, email"
              setSearch={setSearch}
            />
            <section className="lightcream flex-grow-1 p-3">
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
                      <th scope="col">Apellido</th>
                      <th scope="col">Email</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins &&
                      admins.map((admin) => (
                        <AdminTr
                          key={admin._id}
                          admin={admin}
                          trigger={trigger}
                          setTrigger={setTrigger}
                        />
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

export default Admin;

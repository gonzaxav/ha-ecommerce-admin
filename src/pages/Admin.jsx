import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Modal from "react-bootstrap/Modal";
import {useNavigate} from "react-router-dom";

function Admin() {
  const [admins, setAdmins] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/admins`).then((response) => {
      setAdmins(response.data.admins);
    });
  }, []);

  const handleClick = () => {
    navigate("crear");
  }

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col p-0">
            <Topbar name="Admin" />
            <section className="lightcream h-100 p-3">
              <button className="btn btn-primary mb-3" onClick={handleClick}>
                Crear
              </button>
              <div className="rounded overflow-hidden">
                <table className="table table-hover table-striped-columns table-transparent mb-0">
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
                        <tr>
                          <th scope="row">{admin._id}</th>
                          <td>{admin.firstname}</td>
                          <td>{admin.lastname}</td>
                          <td>{admin.email}</td>
                          <td>
                            <button className="btn btn-success me-1">
                              Editar
                            </button>
                            <button className="btn btn-orange">Eliminar</button>
                          </td>
                        </tr>
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

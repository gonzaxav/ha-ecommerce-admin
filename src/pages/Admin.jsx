import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Modal from "react-bootstrap/Modal";
import AdminTr from "../components/AdminTr";

function Admin() {
  const navigate = useNavigate();
  const [admins, setAdmins] = useState(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/admins`).then((response) => {
      setAdmins(response.data.admins);
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
            <Topbar name="Admin" />
            <section className="lightcream flex-grow-1 h-100 p-3">
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
                      <th scope="col">Apellido</th>
                      <th scope="col">Email</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins &&
                      admins.map((admin) => (
                        <AdminTr key={admin._id} admin={admin} trigger={trigger} setTrigger={setTrigger}/>
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

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateAdmin() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createAdmin = async () => {
      await axios({
        method: "POST",
        url: "http://localhost:3000/admins",
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
      });

      navigate("/admin");
    };

    createAdmin();
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name="Admin" />
            <section className="lightcream flex-grow-1 h-100 p-3">
              <div className="container">
                <div className="row">
                  <div className="col myInputWidth">
                    <form onSubmit={handleSubmit}>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="firstname">
                          Nombre
                        </span>
                        <input
                          value={firstname}
                          onChange={handleFirstNameChange}
                          type="text"
                          className="form-control"
                          aria-label="nombre"
                          aria-describedby="firstname"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="lastname">
                          Apellido
                        </span>
                        <input
                          value={lastname}
                          onChange={handleLastNameChange}
                          type="text"
                          className="form-control"
                          aria-label="apellido"
                          aria-describedby="lastname"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="email">
                          Email
                        </span>
                        <input
                          value={email}
                          onChange={handleEmailChange}
                          type="email"
                          className="form-control"
                          aria-label="email"
                          aria-describedby="email"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="password">
                          Contraseña
                        </span>
                        <input
                          value={password}
                          onChange={handlePasswordChange}
                          type="password"
                          className="form-control"
                          aria-label="contrasena"
                          aria-describedby="password"
                        />
                      </div>
                      <button type="submit" className="btn btn-orange">Crear</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAdmin;

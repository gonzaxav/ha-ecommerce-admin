import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function CreateAdmin() {
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

  

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col p-0">
            <Topbar name="Admin" />
            <section className="lightcream h-100 p-3">
              <div className="container">
                <div className="row">
                  <div className="col myInputWidth">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="firstname">
                        Nombre
                      </span>
                      <input
                        value={firstname}
                        onChange={handleFirstNameChange}
                        type="text"
                        class="form-control"
                        placeholder="Dios"
                        aria-label="nombre"
                        aria-describedby="firstname"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="lastname">
                        Apellido
                      </span>
                      <input
                        value={lastname}
                        onChange={handleLastNameChange}
                        type="text"
                        class="form-control"
                        placeholder="Todopoderoso"
                        aria-label="apellido"
                        aria-describedby="lastname"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="email">
                        Email
                      </span>
                      <input
                        value={email}
                        onChange={handleEmailChange}
                        type="email"
                        class="form-control"
                        placeholder="diostodopoderoso@gmail.com"
                        aria-label="email"
                        aria-describedby="email"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="password">
                        Contraseña
                      </span>
                      <input
                        value={password}
                        onChange={handlePasswordChange}
                        type="password"
                        class="form-control"
                        placeholder=""
                        aria-label="contrasena"
                        aria-describedby="password"
                      />
                    </div>
                    <button className="btn btn-success">Crear</button>
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

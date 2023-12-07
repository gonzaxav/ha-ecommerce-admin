import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditAdmin() {
  const navigate = useNavigate();
  const params = useParams();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/admins/${params.id}`).then((response) => {
      setFirstname(response.data.admin.firstname);
      setLastname(response.data.admin.lastname);
      setEmail(response.data.admin.email);
    });
  }, []);

  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateAdmin = async () => {
      await axios({
        method: "PATCH",
        url: `http://localhost:3000/admins/${params.id}`,
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
        },
      });
      navigate("/admin");
    };

    updateAdmin();
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name={firstname + " " + lastname} />
            <section className="lightcream flex-grow-1 h-100 p-3">
              <div className="container">
                <div className="row">
                  <div className="col myInputWidth">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="firstname">
                        Nombre
                      </span>
                      <input
                        value={firstname}
                        onChange={handleFirstNameChange}
                        type="text"
                        className="form-control"
                        placeholder="Dios"
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
                        placeholder="Todopoderoso"
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
                        placeholder="diostodopoderoso@gmail.com"
                        aria-label="email"
                        aria-describedby="email"
                      />
                    </div>
                    <button className="btn btn-orange" onClick={handleSubmit}>
                      Guardar
                    </button>
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

export default EditAdmin;

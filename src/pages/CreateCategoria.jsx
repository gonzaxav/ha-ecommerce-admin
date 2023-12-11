import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateCategoria() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const createCategory = async () => {
      await axios({
        method: "POST",
        url: "http://localhost:3000/category",
        data: formData,
        headers: {
          "content-Type": "multipart/form-data",
        },
      });

      navigate("/categorias");
    };

    createCategory();
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name="Categoría nueva" />
            <section className="lightcream flex-grow-1 h-100 p-3">
              <div className="container">
                <div className="row">
                  <div className="col myInputWidth">
                    <form onSubmit={handleSubmit}>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="nombre">
                          Nombre
                        </span>
                        <input
                          value={name}
                          onChange={handleNameChange}
                          type="text"
                          className="form-control"
                          aria-label="nombre"
                          aria-describedby="name"
                          name="name"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="photo">
                          Foto
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="photo"
                          name="photo"
                        />
                      </div>
                      <button type="submit" className="btn btn-orange-fill">
                        Crear
                      </button>
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

export default CreateCategoria;

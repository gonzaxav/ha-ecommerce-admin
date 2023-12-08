import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditCategoria() {
  const navigate = useNavigate();
  const params = useParams();

  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/${params.slug}`)
      .then((response) => {
        setName(response.data.category.name);
      });
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updateCategory = async () => {
      await axios({
        method: "PATCH",
        url: `http://localhost:3000/category/${params.slug}`,
        data: formData,
        headers: {
          "content-Type": "multipart/form-data",
        },
      });
      navigate("/categorias");
    };

    updateCategory();
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name={params.slug} />
            <section className="lightcream flex-grow-1 h-100 p-3">
              <div className="container">
                <div className="row">
                  <div className="col myInputWidth">
                    <form onSubmit={handleSubmit}>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="name">
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
                      <button className="btn btn-orange">Guardar</button>
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

export default EditCategoria;

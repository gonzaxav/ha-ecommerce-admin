import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateProducto() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleStockChange = (e) => {
    setStock(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleFeaturedChange = (e) => {
    setFeatured(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createProducto = async () => {
      await axios({
        method: "POST",
        url: "http://localhost:3000/products",
        data: {
          name: name,
          description: description,
          price: price,
          stock: stock,
          category: category,
          featured: featured,
        },
      });

      navigate("/products");
    };

    createProducto();
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
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="description">
                          Descripción
                        </span>
                        <input
                          value={description}
                          onChange={handleDescriptionChange}
                          type="text"
                          className="form-control"
                          aria-label="nombre"
                          aria-describedby="description"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="description">
                          Precio
                        </span>
                        <input
                          value={price}
                          onChange={handlePriceChange}
                          type="text"
                          className="form-control"
                          aria-label="nombre"
                          aria-describedby="description"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="description">
                          Stock
                        </span>
                        <input
                          value={stock}
                          onChange={handleStockChange}
                          type="text"
                          className="form-control"
                          aria-label="nombre"
                          aria-describedby="description"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="description">
                          Categoría
                        </span>
                        <input
                          value={category}
                          onChange={handleCategoryChange}
                          type="text"
                          className="form-control"
                          aria-label="nombre"
                          aria-describedby="description"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="description">
                          Destacado
                        </span>
                        <input
                          value={featured}
                          onChange={handleFeaturedChange}
                          type="text"
                          className="form-control"
                          aria-label="nombre"
                          aria-describedby="description"
                        />
                      </div>
                      <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupFile01">
                          Upload
                        </label>
                        <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile01"
                        />
                      </div>
                      <button className="btn btn-orange">Crear</button>
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

export default CreateProducto;

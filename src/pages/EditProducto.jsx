import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProducto() {
  const navigate = useNavigate();
  const params = useParams();

  const [categories, setCategories] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [featured, setFeatured] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/?includeinactive=true`)
      .then((response) => {
        setCategories(response.data.categories);
      });
  }, []);

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
  const handleShortDescriptionChange = (e) => {
    setShortDescription(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${params.slug}`)
      .then((response) => {
        setName(response.data.product.name);
        setDescription(response.data.product.description);
        setPrice(response.data.product.price);
        setStock(response.data.product.stock);
        setCategory(response.data.product.category);
        setFeatured(response.data.product.featured);
        setShortDescription(response.data.product.shortDescription);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const updateAdmin = async () => {
      await axios({
        method: "PATCH",
        url: `http://localhost:3000/products/${params.slug}`,
        data: formData,
        headers: {
            "content-Type": "multipart/form-data",
        }
      });
      navigate("/productos");
    };

    updateAdmin();
  };

  return (
    categories && (
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
                          <span className="input-group-text" id="description">
                            Descripción
                          </span>
                          <textarea
                            value={description}
                            onChange={handleDescriptionChange}
                            type="text"
                            className="form-control"
                            aria-label="nombre"
                            aria-describedby="description"
                            name="description"
                          ></textarea>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="price">
                            Precio
                          </span>
                          <input
                            value={price}
                            onChange={handlePriceChange}
                            type="text"
                            className="form-control"
                            aria-label="nombre"
                            aria-describedby="price"
                            name="price"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="stock">
                            Stock
                          </span>
                          <input
                            value={stock}
                            onChange={handleStockChange}
                            type="text"
                            className="form-control"
                            aria-label="nombre"
                            aria-describedby="stock"
                            name="stock"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="category">
                            Categoría
                          </span>
                          <select
                            value={category}
                            onChange={handleCategoryChange}
                            className="form-select"
                            name="category"
                          >
                            {categories.map((category) => (
                              <option value={category._id} key={category._id}>
                                {category.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="featured">
                            Destacado
                          </span>
                          <select
                            value={featured.toString()}
                            onChange={handleFeaturedChange}
                            className="form-select"
                            name="featured"
                          >
                            <option value="true">Si</option>
                            <option value="false">No</option>
                          </select>
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="shortDescription">
                            Descripcion corta
                          </span>
                          <textarea
                            value={shortDescription}
                            onChange={handleShortDescriptionChange}
                            type="text"
                            className="form-control"
                            aria-label="nombre"
                            aria-describedby="shortDescription"
                            name="shortDescription"
                          ></textarea>
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
    )
  );
}

export default EditProducto;

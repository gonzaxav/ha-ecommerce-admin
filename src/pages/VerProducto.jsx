import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function VerProducto() {
  const baseUrl = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${params.id}`)
      .then((response) => {
        setProduct(response.data.product);
      });
  }, []);

  return (
    product && (
      <>
        <div className="container-fluid p-0">
          <div className="row">
            <Sidebar />
            <div className="col-10 p-0 vh-100 d-flex flex-column">
              <Topbar name={product.name} />
              <section className="lightcream flex-grow-1 h-100 p-3">
                <div className="container text-bg-color">
                  <div className="row">
                    <div className="col-6 col-lg-5 mb-4">
                      <img
                        src={`${baseUrl}img/${product.photo[0]}`}
                        className="img"
                      ></img>
                    </div>
                    <div className="col-6 col-lg-7 mb-4 d-flex flex-column justify-content-center">
                      Nombre
                      <h3 className="mb-5">{product.name}</h3>
                      Descripción corta
                      <h5>{product.shortDescription}</h5>
                    </div>
                    <div className="col-12 mb-4">
                      Descripción
                      <h5>{product.description}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Precio
                      <h5>$U {product.price}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Stock
                      <h5>{product.stock}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Categoría
                      <h5>{product.category.name}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Destacado
                      <h5>{product.featured ? "Si" : "No"}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Activo?
                      <h5>{product.isActive ? "Si" : "No"}</h5>
                    </div>
                    <div className="col-12 mb-4">
                      Slug
                      <h5>{product.slug}</h5>
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

export default VerProducto;

import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function VerProducto() {
  const baseUrl = import.meta.env.VITE_BASE_URL_API;
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}products/${params.slug}`)
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
                      <h3 className="mb-5 orange">{product.name}</h3>
                      Descripción corta
                      <h5 className="gray">{product.shortDescription}</h5>
                    </div>
                    <div className="col-12 mb-4">
                      Descripción
                      <h5 className="gray">{product.description}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Precio
                      <h5 className="gray">$U {product.price}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Stock
                      <h5 className="gray">{product.stock}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Categoría
                      <h5 className="gray">{product.category.name}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Destacado
                      <h5 className="gray">{product.featured ? "Si" : "No"}</h5>
                    </div>
                    <div className="col-4 mb-4">
                      Activo?
                      <h5 className="gray">{product.isActive ? "Si" : "No"}</h5>
                    </div>
                    <div className="col-12 mb-4">
                      Slug
                      <h5 className="gray">{product.slug}</h5>
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

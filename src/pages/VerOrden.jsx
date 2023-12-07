import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function VerOrden() {
  const baseUrl = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const params = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/orders/${params.id}`).then((response) => {
      setOrder(response.data.order);
    });
  }, []);

  return (
    order && (
      <>
        <div className="container-fluid p-0">
          <div className="row">
            <Sidebar />
            <div className="col-10 p-0 vh-100 d-flex flex-column">
              <Topbar name={order._id} />
              <section className="lightcream flex-grow-1 h-100 p-3">
                <div className="container text-bg-color">
                  <div className="row rowGray">
                    <div className="col-6">
                      IdOrden
                      <h5 className="gray">{order._id}</h5>
                    </div>
                    <div className="col-6">
                      IdCliente
                      <h5 className="gray">{order.client._id}</h5>
                    </div>
                    <div className="col-4">
                      Cliente
                      <h5 className="orange">
                        {order.client.firstname + " " + order.client.lastname}
                      </h5>
                    </div>
                    <div className="col-4">
                      Estado
                      <h5 className="green">{order.orderstate}</h5>
                    </div>
                    <div className="col-4">
                      Total
                      <h5 className="gray">
                        {"$U " +
                          order.products.reduce(
                            (accumulator, currentProduct) => {
                              const productTotal =
                                currentProduct.price * currentProduct.qty;
                              return accumulator + productTotal;
                            },
                            0
                          )}
                      </h5>
                    </div>
                  </div>
                  {order.products.map((product) => (
                    <div className="row rowGray my-2">
                      <div className="col">
                        IdProducto
                        <h6 className="gray">{product.productId}</h6>
                      </div>
                      <div className="col">
                        Nombre
                        <h6 className="gray">{product.name}</h6>
                      </div>
                      <div className="col">
                        Precio
                        <h6 className="gray">{product.price}</h6>
                      </div>
                      <div className="col">
                        Cantidad
                        <h6 className="gray">{product.qty}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default VerOrden;

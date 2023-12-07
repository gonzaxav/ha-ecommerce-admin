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
                  <div className="row">
                    <div className="col-6 mb-4">
                      Cliente
                      <h3 className="mb-3">
                        {order.client.firstname + " " + order.client.lastname}
                      </h3>
                      <h3 className="mb-5">{order.client._id}</h3>
                    </div>
                    <div className="col-6 mb-4">
                      Estado
                      <h5 className="mb-3">{order.orderstate}</h5>
                    </div>
                    {order.products.map((product) => (
                      <div className="row">
                        <div className="col mb-4">
                          ProductId
                          <h5 className="mb-3">{product.productId}</h5>
                        </div>
                        <div className="col mb-4">
                          Name
                          <h5 className="mb-3">{product.name}</h5>
                        </div>
                        <div className="col mb-4">
                          Price
                          <h5 className="mb-3">{product.price}</h5>
                        </div>
                        <div className="col mb-4">
                          Qty
                          <h5 className="mb-3">{product.qty}</h5>
                        </div>
                      </div>
                    ))}
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

export default VerOrden;

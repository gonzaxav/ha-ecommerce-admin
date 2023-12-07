import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";

function Ordenes() {
  const [ordenes, setOrdenes] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/orders`).then((response) => {
      setOrdenes(response.data.orders);
    });
  }, [trigger]);

  const handleClickVer = (id) => {
    navigate(`${id}`);
  };

  const handleClickEditar = (id) => {
    navigate(`editar/${id}`);
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name="Ordenes" />
            <section className="lightcream flex-grow-1 h-100 p-3">
              <div className="rounded overflow-hidden">
                <table className="table table-hover table-striped-columns align-middle table-transparent mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Cliente</th>
                      <th scope="col">Total</th>
                      <th scope="col">Productos</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordenes &&
                      ordenes.map((order) => (
                        <tr>
                          <th scope="row">{order._id}</th>
                          <td>
                            {order.client.firstname +
                              " " +
                              order.client.lastname}
                          </td>
                          <td>
                            {"$U " +
                              order.products.reduce(
                                (accumulator, currentProduct) => {
                                  const productTotal =
                                    currentProduct.price * currentProduct.qty;
                                  return accumulator + productTotal;
                                },
                                0
                              )}
                          </td>
                          <td>
                            {order.products.reduce(
                              (accumulator, currentProduct) => {
                                return accumulator + currentProduct.qty;
                              },
                              0
                            ) + " unidades"}
                          </td>
                          <td>{order.orderstate}</td>
                          <td>
                            <button
                              className="btn btn-primary me-1"
                              onClick={() => handleClickVer(order._id)}
                            >
                              Ver
                            </button>
                            <button
                              className="btn btn-success me-1"
                              onClick={() => handleClickEditar(order._id)}
                            >
                              Editar
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordenes;

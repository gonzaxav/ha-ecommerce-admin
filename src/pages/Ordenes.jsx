import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import OrdenesTr from "../components/OrdenesTr";

function Ordenes() {
  const [ordenes, setOrdenes] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/orders`).then((response) => {
      setOrdenes(response.data.orders);
    });
  }, []);

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
                        <OrdenesTr order={order} />
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

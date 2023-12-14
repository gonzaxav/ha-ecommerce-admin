import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import OrdenesTr from "../components/OrdenesTr";

function Ordenes() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const [ordenes, setOrdenes] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}orders?buscar=${search}`).then((response) => {
      setOrdenes(response.data.orders);
    });
  }, [search]);

  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <Sidebar />
          <div className="col-10 g-0 d-flex flex-column">
            <Topbar
              name="Ordenes"
              placeholder="por id, idCliente, estado"
              setSearch={setSearch}
            />
            <section className="lightcream flex-grow-1 p-3">
              <div className="rounded">
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
                        <OrdenesTr key={order._id} order={order} />
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

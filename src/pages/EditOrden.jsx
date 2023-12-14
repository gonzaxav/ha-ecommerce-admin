import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditOrden() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const params = useParams();

  const [order, setOrder] = useState(null);
  const [orderstate, setOrderstate] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}orders/${params.id}`).then((response) => {
      setOrderstate(response.data.order.orderstate);
      setOrder(response.data.order);
    });
  }, []);

  const handleStateChange = (e) => {
    setOrderstate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateOrder = async () => {
      await axios({
        method: "PATCH",
        url: `${apiUrl}orders/${params.id}`,
        data: {
          orderstate: orderstate,
        },
      });
      navigate("/ordenes");
    };

    updateOrder();
  };

  return (
    order && (
      <>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <Sidebar />
            <div className="col-10 g-0 d-flex flex-column">
              <Topbar name={order._id} />
              <section className="lightcream flex-grow-1 p-3">
                <div className="container">
                  <div className="row g-0">
                    <div className="col myInputWidth">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="firstname">
                          Estado
                        </span>
                        <select
                          value={orderstate}
                          onChange={handleStateChange}
                          className="form-select"
                        >
                          <option value="pago pendiente">pago pendiente</option>
                          <option value="rechazado">rechazado</option>
                          <option value="pago">pago</option>
                          <option value="en tránsito">en tránsito</option>
                          <option value="entregado">entregado</option>
                        </select>
                      </div>
                      <button
                        className="btn btn-transparent btn-orange-transparent"
                        onClick={handleSubmit}
                      >
                        Guardar
                      </button>
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

export default EditOrden;

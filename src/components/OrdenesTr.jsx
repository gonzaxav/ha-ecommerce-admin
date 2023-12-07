import React from "react";
import { useNavigate } from "react-router-dom";

function OrdenesTr({order}) {
    const navigate = useNavigate();

  const handleClickVer = (id) => {
    navigate(`${id}`);
  };

  const handleClickEditar = (id) => {
    navigate(`editar/${id}`);
  };

  return (
    <>
      <tr>
        <th scope="row">{order._id}</th>
        <td>{order.client.firstname + " " + order.client.lastname}</td>
        <td>
          {"$U " +
            order.products.reduce((accumulator, currentProduct) => {
              const productTotal = currentProduct.price * currentProduct.qty;
              return accumulator + productTotal;
            }, 0)}
        </td>
        <td>
          {order.products.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.qty;
          }, 0) + " unidades"}
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
    </>
  );
}

export default OrdenesTr;

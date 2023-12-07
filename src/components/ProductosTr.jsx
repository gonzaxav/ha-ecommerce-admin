import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductosTr({ product }) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(product.isActive);

  const handleChangeIsActive = () => {
    setIsActive(!isActive);
    axios
      .delete(`http://localhost:3000/products/${product.slug}`)
      .then((response) => {});
  };

  const handleClickVer = (id) => {
    navigate(`${id}`);
  };

  const handleClickEditar = (id) => {
    navigate(`editar/${id}`);
  };

  return (
    <>
      <tr className={isActive ? "" : "rowDisabled"}>
        <th scope="row">
          <span className="id">{product._id}</span>
        </th>
        <td>{product.name}</td>
        <td>
          <span className="description">{product.description}</span>
        </td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.category.name}</td>
        <td>
          {product.featured ? (
            <i className="bi bi-check-circle"></i>
          ) : (
            <i className="bi bi-x-circle"></i>
          )}
        </td>
        <td>{product.shortDescription}</td>
        <td>
          {isActive ? (
            <i
              className="bi bi-check-circle mouseOver green"
              onClick={handleChangeIsActive}
            ></i>
          ) : (
            <i
              className="bi bi-x-circle mouseOver red"
              onClick={handleChangeIsActive}
            ></i>
          )}
        </td>
        <td>
          {
            <>
              <button
                className="btn btn-primary me-1"
                onClick={() => handleClickVer(product.slug)}
              >
                Ver
              </button>
              <button
                className="btn btn-success"
                onClick={() => handleClickEditar(product._id)}
              >
                Editar
              </button>
            </>
          }
        </td>
      </tr>
    </>
  );
}

export default ProductosTr;

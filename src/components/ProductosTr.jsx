import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductosTr({ product }) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(product.isActive);

  const handleChangeIsActive = () => {
    setIsActive(!isActive);
    axios
      .delete(`http://localhost:3000/products/${product.slug}`)
  };

  const handleClickVer = (slug) => {
    navigate(`${slug}`);
  };

  const handleClickEditar = (slug) => {
    navigate(`editar/${slug}`);
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
            <button className="px-2 rounded"><i
              className="bi bi-check-circle mouseOver green"
              onClick={handleChangeIsActive}
            ></i></button>
          ) : (
            <button className="px-2 rounded"><i
              className="bi bi-x-circle mouseOver red"
              onClick={handleChangeIsActive}
            ></i></button>
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
                onClick={() => handleClickEditar(product.slug)}
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

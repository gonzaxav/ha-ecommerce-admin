import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CategoriaTr({ categoria }) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(categoria.isActive);

  const handleChangeIsActive = () => {
    setIsActive(!isActive);
    axios
      .delete(`http://localhost:3000/category/${categoria.slug}`)
  };

  const handleClickEditar = (slug) => {
    navigate(`editar/${slug}`);
  };

  return (
    <>
      <tr className={isActive ? "" : "rowDisabled"}>
        <th scope="row">{categoria._id}</th>
        <td>{categoria.name}</td>
        <td>{categoria.photo}</td>
        <td>
          {isActive ? (
            <button className="px-2 rounded">
              <i
                className="bi bi-check-circle mouseOver green"
                onClick={handleChangeIsActive}
              ></i>
            </button>
          ) : (
            <button className="px-2 rounded">
              <i
                className="bi bi-x-circle mouseOver red"
                onClick={handleChangeIsActive}
              ></i>
            </button>
          )}
        </td>
        <td>
          <button
            className="btn btn-transparent btn-cream-transparent me-1"
            onClick={() => handleClickEditar(categoria.slug)}
          >
            Editar
          </button>
        </td>
      </tr>
    </>
  );
}

export default CategoriaTr;

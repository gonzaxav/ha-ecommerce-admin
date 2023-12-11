import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminTr({admin, trigger, setTrigger}) {
  const navigate = useNavigate();

  const handleClickEditar = (id) => {
    navigate(`editar/${id}`);
  };

  const handleClickEliminar = (id) => {
    const deleteAdmin = async () => {
      await axios({
        method: "DELETE",
        url: `http://localhost:3000/admins/${id}`,
      });
      setTrigger(!trigger);
    };

    deleteAdmin();
  };

  return (
    <>
      <tr>
        <th scope="row">{admin._id}</th>
        <td>{admin.firstname}</td>
        <td>{admin.lastname}</td>
        <td>{admin.email}</td>
        <td>
          <button
            className="btn btn-transparent btn-cream-transparent me-1"
            onClick={() => handleClickEditar(admin._id)}
          >
            Editar
          </button>
          <button
            className="btn btn-transparent btn-black-transparent"
            onClick={() => handleClickEliminar(admin._id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default AdminTr;

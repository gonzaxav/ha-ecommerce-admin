import React from "react";

function AdminTr({admin}) {
  return (
    <>
      <tr>
        <th scope="row">{admin._id}</th>
        <td>{admin.firstname}</td>
        <td>{admin.lastname}</td>
        <td>{admin.email}</td>
        <td>
          <button
            className="btn btn-success me-1"
            onClick={() => handleClickEditar(admin._id)}
          >
            Editar
          </button>
          <button
            className="btn btn-orange"
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

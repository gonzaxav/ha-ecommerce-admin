import "./Sidebar.css";
import Logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    // Navegar a la ruta '/otra-ruta'
    navigate(`/${route}`);
  };

  return (
    <>
      <div className="col-2 vh-100 bgDark text-light p-0">
        <div className="d-flex flex-column gap-2 vh-100 py-5">
          <img className="logo align-self-center" src={Logo}></img>
          <h1 className="bold align-self-center mb-5">Casa de abajo</h1>
          <button className="btn btn-dark myBgDark" onClick={() => handleClick("")}>Dashboard</button>
          <button className="btn btn-dark myBgDark" onClick={() => handleClick("admin")}>Admin</button>
          <button className="btn btn-dark myBgDark" onClick={() => handleClick("ordenes")}>Ordenes</button>
          <button className="btn btn-dark myBgDark" onClick={() => handleClick("productos")}>Productos</button>
          <button className="btn btn-dark myBgDark" onClick={() => handleClick("categorias")}>Categorias</button>
          <button className="btn btn-dark myBgDark mt-auto">Logout</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

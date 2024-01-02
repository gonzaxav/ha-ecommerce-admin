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
      <div className="col-2 g-0 vh-100">
        <section className="col-2 g-0 sidebar">
          <div className="bgDark text-light">
            <div className="d-flex flex-column gap-2 vh-100 py-5">
              <img className="logo align-self-center mb-5" src={Logo}></img>
              <button className="btn btn-dark myBgDark" onClick={() => handleClick("dashboard")}>Dashboard</button>
              <button className="btn btn-dark myBgDark" onClick={() => handleClick("admin")}>Admin</button>
              <button className="btn btn-dark myBgDark" onClick={() => handleClick("ordenes")}>Ordenes</button>
              <button className="btn btn-dark myBgDark" onClick={() => handleClick("productos")}>Productos</button>
              <button className="btn btn-dark myBgDark" onClick={() => handleClick("categorias")}>Categorias</button>
              <button className="btn btn-dark myBgDark mt-auto">Logout</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Sidebar;

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Categorias() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name="Categorías" />
            <section className="lightcream flex-grow-1 h-100"></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categorias;

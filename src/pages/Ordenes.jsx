import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Ordenes() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col p-0">
            <Topbar name="Ordenes" />
            <section className="lightcream h-100"></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordenes;

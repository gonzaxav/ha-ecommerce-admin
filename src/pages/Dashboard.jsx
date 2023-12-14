import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Dashboard() {
  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <Sidebar />
          <div className="col-10 g-0 d-flex flex-column">
            <Topbar name="Dashboard" />
            <section className="lightcream flex-grow-1"></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

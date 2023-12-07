import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Dashboard() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <div className="col-10 p-0 vh-100 d-flex flex-column">
            <Topbar name="Dashboard" />
            <section className="lightcream flex-grow-1"></section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

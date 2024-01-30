import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Chart from "react-apexcharts";

function Dashboard() {
  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0">
          <Sidebar />
          <div className="col-10 g-0 d-flex flex-column">
            <Topbar name="Dashboard" />
            <section className="lightcream flex-grow-1">
              <div className="container-fluid">
                <div className="row px-5 pt-5 pb-4">
                  <div className="col-4">
                    <div className="card h-100">
                      <div className="card-header">
                        <h5 className="card-title text-center m-2">VENTAS</h5>
                      </div>
                      <div className="card-body d-flex justify-content-center p-5">
                        <span className="card-text text-center fw-bold fs-5">
                          $U 1730
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card h-100">
                      <div className="card-header">
                        <h5 className="card-title text-center m-2">
                          PROMEDIO DE VENTAS
                        </h5>
                      </div>
                      <div className="card-body d-flex justify-content-center p-5">
                        <span className="card-text text-center fw-bold fs-5">
                          $U 1730
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card h-100">
                      <div className="card-header">
                        <h5 className="card-title text-center m-2">
                          MÁS VENDIDO
                        </h5>
                      </div>
                      <div className="card-body d-flex flex-wrap justify-content-center px-5 py-2">
                        <img
                          className="bestseller-img"
                          src="https://sfcesuatfinxjxgaclzt.supabase.co/storage/v1/object/public/img/cafe-en-grano.png"
                        ></img>
                        <span className="card-text text-center fw-bold fs-5">
                          Café de la Casa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row px-5 pt-4 pb-5">
                  <div className="dashboard-graphic">
                    <div className="card p-3">
                      <Chart
                        options={{
                          chart: {
                            id: "apexchart",
                          },
                          xaxis: {
                            categories: [
                              "Ene",
                              "Feb",
                              "Mar",
                              "Abr",
                              "May",
                              "Jun",
                              "Jul",
                              "Ago",
                              "Sep",
                              "Oct",
                              "Nov",
                              "Dic",
                            ],
                          },
                        }}
                        series={[
                          {
                            name: "Ventas",
                            data: [
                              5, 12, 14, 16, 15, 22, 19, 27, 19, 17, 14, 16,
                            ],
                          },
                          {
                            name: "Ganancia",
                            data: [
                              15, 22, 24, 26, 25, 32, 29, 37, 29, 27, 24, 26,
                            ],
                          },
                        ]}
                        type="line"
                        width={"100%"}
                        height={320}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

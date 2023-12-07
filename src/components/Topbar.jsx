import "./Topbar.css";

function Topbar({ name }) {
  return (
    <>
      <section className="white">
        <div className="px-5 py-3 d-flex flex-row gap-5 align-items-center">
          <h1 className="bold">{name}</h1>
          <div className="input-group myInput mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar id, ordenes, clientes, productos"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <button className="">
            <img className="logo"></img>
          </button>
        </div>
      </section>
    </>
  );
}

export default Topbar;



function Topbar({name}) {
  return (
    <>
      <section className="white">
        <div className="px-5 py-3 d-flex flex-row gap-5">
          <h1 className="bold">{name}</h1>
          <div className="form-floating mb-3">
            <input
              type="search"
              className="form-control"
              id="searchInput"
              placeholder="Buscar ordenes, clientes, productos"
            />
            <label htmlFor="searchInput">Buscar ordenes, clientes, productos</label>
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

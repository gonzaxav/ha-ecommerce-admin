import "./Topbar.css";
import Logo from "../img/avatar.png";
import { useState } from "react";

function Topbar({ name, placeholder, setSearch }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <section className="white topbar">
        <div className="px-5 py-3 d-flex flex-row gap-5 align-items-center">
          <h1 className="bold">{name}</h1>
          <div className="input-group myInput mb-3">
            <div className="input-group-prepend searchIcon">
              <span className="input-group-text" id="search">
                Buscar
              </span>
            </div>
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              className="form-control searchInput"
              placeholder={placeholder}
              aria-label="Username"
              aria-describedby="search"
            />
            <button
              className="btn btn-light searchButton"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setSearch(searchInput)}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
          <img className="logo" src={Logo}></img>
        </div>
      </section>
    </>
  );
}

export default Topbar;

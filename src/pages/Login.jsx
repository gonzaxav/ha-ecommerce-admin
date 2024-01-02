import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/adminSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../img/logo.png";

function Login() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const [email, setEmail] = useState("diossanto@admin.com");
  const [password, setPassword] = useState("1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [msg, setMsg] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${apiUrl}admin/tokens`,
      data: {
        email,
        password,
      },
    });
    response.data.msg && setMsg(response.data.msg);
    response.data.token &&
      (dispatch(login(response.data.token)), navigate("/dashboard"));
  };
  return (
    <>
      <section className="black d-flex align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-end py-5 px-6">
              <img src={Logo} className="w-50"></img>
            </div>
            <div class="vertical-line m-0 p-0 g-0"></div>
            <div className="col py-5 px-6">
              <h1 className="text-center mb-3">Bienvenido/a</h1>
              <h2 className="text-center mb-5">
                Inicia sesión para administrador.
              </h2>
              <div className="div-form">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label
                      hidden
                      htmlFor="email"
                      className="form-label"
                    ></label>
                    <input
                      className="form-control form-field"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      id="email"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      hidden
                      htmlFor="password"
                      className="form-label"
                    ></label>
                    <input
                      className="form-control form-field"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Contraseña"
                      id="password"
                    />
                  </div>

                  <p className="text-danger"> {msg && msg}&nbsp;</p>
                  <div className="d-flex">
                    <button
                      type="submit"
                      className="btn btn-orange-fill button-login"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

import React from "react";
import "./Login.css";
import axios from "axios";
import { useState } from "react";
/* import { useDispatch } from "react-redux"; */
/* import { login } from "../redux/clientSlice"; */
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const dispatch = useDispatch(); */
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/admin/tokens",
      data: {
        email,

        password,
      },
    });
    /* dispatch(login(response.data)); */
    console.log(response.data.token);
    navigate("/");
  };
  return (
    <>
      <section className="section-login white">
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <div className="row row-form">
            <div className=" col-12 login">
              <h1 className="login-title">Login</h1>
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
                  <div className="div-btn col-6  mb-3  d-flex">
                    <button
                      type="submit"
                      className=" button-login btn btn-ligth"
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

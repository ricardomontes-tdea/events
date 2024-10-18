import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const initForm = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const { logInUser } = useContext(AuthContext);

  const { email, password, onInputChange } = useForm(initForm);

  const onLogin = (event) => {
    event.preventDefault();

    const isValidLogin = logInUser(email, password);

    if (isValidLogin) {
      navigate("/events", { replace: true });
    }
  };

  return (
    <>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Inicio de Sesión</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onInputChange}
                      placeholder="Ingrese su correo electrónico"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={onInputChange}
                      placeholder="Ingrese su contraseña"
                    />
                  </div>
                   <br />
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={onLogin}
                    >
                      Iniciar Sesión
                    </button> 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

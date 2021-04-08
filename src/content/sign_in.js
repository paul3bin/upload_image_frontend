import React, { useState } from "react";
import { API } from "../api_service";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function SignIn() {
  document.title = "Sign In";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["token"]);
  const history = useHistory();

  const loginUser = () => {
    API.loginUser({ username: userName, password: password }).then((resp) =>
      setToken("token", resp.token)
    );
    history.push("/");
  };

  return (
    <div className="App-body">
      <div class="card text-white bg-dark mb-3">
        <div className="card-header">Sign In</div>
        <div className="card-body text-dark">
          <div className="container">
            <div className="d-grid gap-2">
              <div className="p-2">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="UserName"
                    onChange={(ev) => setUserName(ev.target.value)}
                  />
                  <label for="floatingInput">Username</label>
                </div>
              </div>
              <div className="p-2">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Password"
                    onChange={(ev) => setPassword(ev.target.value)}
                  />
                  <label for="floatingInput">Password</label>
                </div>
              </div>
              <div className="p-2">
                <div className="form-floating">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={loginUser}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SignIn };

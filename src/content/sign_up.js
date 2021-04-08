import React, { useState } from "react";
import { API } from "../api_service";
import { useHistory } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";

function SignUp() {
  document.title = "Sign Up";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const history = useHistory();

  const registerUser = () => {
    if (password !== password2) {
      toast.error("Passwords do not match!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      API.registerUser({
        username: userName,
        password: password,
      }).then((resp) => console.log(resp));
      history.push("/login");
    }
  };

  return (
    <div className="App-body">
      <ToastContainer />
      <div class="card text-white bg-dark mb-3">
        <div class="card-header">Sign Up</div>
        <div class="card-body text-dark">
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
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Re-Enter Password"
                    onChange={(ev) => setPassword2(ev.target.value)}
                  />
                  <label for="floatingInput">Re-Enter Password</label>
                </div>
              </div>
              <div className="p-2">
                <div className="form-floating">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={registerUser}
                  >
                    Register
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

export { SignUp };

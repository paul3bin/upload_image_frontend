import React, { useState } from "react";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App-body">
      <div class="card border-dark mb-3">
        <div class="card-header">Sign-In</div>
        <div class="card-body text-dark">
          <div className="container">
            <div className="col">
              <div className="row">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="UserName"
                    onChange={(ev) => setUserName(ev.target.value)}
                  />
                  <label for="floatingInput">UserName</label>
                </div>
              </div>
              <div className="row">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Password"
                    onChange={(ev) => setPassword(ev.target.value)}
                  />
                  <label for="floatingInput">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="form-floating">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    // onClick={getResult}
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

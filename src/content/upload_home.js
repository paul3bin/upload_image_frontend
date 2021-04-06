import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  const submitClicked = () => {
    history.push("/landing");
  };
  return (
    <div className="App-body">
      <div className="container">
        <div className="container">
          <input
            class="form-control form-control-lg"
            id="formFileLg"
            type="file"
          ></input>
        </div>
        <div className="container">
          <button
            id="submit-btn"
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={submitClicked}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export { Home };

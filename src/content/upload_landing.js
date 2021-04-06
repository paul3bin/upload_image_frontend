import React from "react";
import { useHistory } from "react-router-dom";

function UploadLanding() {
  const history = useHistory();
  const returnClicked = () => {
    history.push("/");
  };
  return (
    <div className="App-body">
      Landing
      <div className="container">
        <button
          id="submit-btn"
          type="submit"
          className="btn btn-primary btn-lg"
          onClick={returnClicked}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export { UploadLanding };

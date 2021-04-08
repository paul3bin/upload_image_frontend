import React from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function UploadLanding(props) {
  document.title = "Landing";
  const history = useHistory();
  const [fileName, setFileName, deleteFileName] = useCookies(["filename"]);

  const returnClicked = () => {
    deleteFileName(["filename"]);
    history.push("/");
  };

  return (
    <div className="App-body">
      <p>{fileName.filename}</p>
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

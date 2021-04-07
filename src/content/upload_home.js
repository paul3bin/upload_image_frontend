import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [selectedFile, setSelectedFile] = useState();
  const [fileName, setFileName] = useCookies(["filename"]);
  const [token] = useCookies(["token"]);

  const history = useHistory();
  const submitClicked = () => {
    if (!token["token"] === true) {
      toast.error("Login and try again!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      if (selectedFile) {
        setFileName("filename", selectedFile.name);
        history.push("/landing");
      } else {
        toast.error("No file selected!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <div className="App-body">
      <ToastContainer />
      <div className="container">
        <div className="container">
          <input
            class="form-control form-control-lg"
            id="formFileLg"
            type="file"
            onChange={(event) => setSelectedFile(event.target.files[0])}
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

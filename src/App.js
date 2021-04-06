import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";

import { Home } from "./content/upload_home";
import { UploadLanding } from "./content/upload_landing";
import { SignIn } from "./content/sign_in";
import { SignUp } from "./content/sign_up";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/landing">
          <UploadLanding />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/register">
          <SignUp />
        </Route>
      </div>
    </Router>
  );
}

export default App;

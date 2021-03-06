import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MarvelScreen from "../components/Marvel/MarvelScreen";
// import DCScreen from "../components/DC/DCScreen";
// import NavBar from "../components/ui/NavBar";
import Login from "../components/Login/Login";
import DashBoardRoutes from "./DashBoardRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={DashBoardRoutes} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

import React from "react";
import { Redirect, Route, Switch } from "react-router";
import MarvelScreen from "../components/Marvel/MarvelScreen";
import HeroesScreen from "../components/Heroes/HeroesScreen";
import NavBar from "../components/ui/NavBar";
import DCScreen from "../components/DC/DCScreen";
import { Container } from "@material-ui/core";
import SearchScreen from "../components/Heroes/SearchScreen";
const DashBoardRoutes = () => {
  return (
    <>
      <NavBar />

        <Switch>
          <Container>
            <Route exact path="/marvel" component={MarvelScreen} />
            <Route exact path="/heroe/:heroeid" component={HeroesScreen} />
            <Route exact path="/dc" component={DCScreen} />
            <Route exact path="/search" component={SearchScreen} />
            <Redirect to="/marvel" />
          </Container>
        </Switch>
    </>
  );
};

export default DashBoardRoutes;

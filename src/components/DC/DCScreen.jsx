import { Typography } from "@material-ui/core";
import React from "react";
import HeroesList from "../Heroes/HeroesList";

const DCScreen = () => {
  return (
    <div>
      <Typography align="center" color="primary" variant="h2">
        DC
      </Typography>
      <HeroesList publisher="DC Comics" />
    </div>
  );
};

export default DCScreen;

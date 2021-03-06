import { Button, Typography, Grid, Box } from "@material-ui/core";
import React,{useMemo} from "react";
import { Redirect, useParams } from "react-router";
import { getHeroesById } from "../../selectors/getHeroesById";
const HeroesScreen = ({ history }) => {
  const { heroeid } = useParams();
 
  const heroe = useMemo(() => getHeroesById(heroeid), [heroeid])
  if (!heroe) {
    return <Redirect to="/" />;
  }
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;

  const handleBack = () => {
    history.goBack();
  };
  return (
    <div>
      <Typography variant="h2" color="primary">{superhero}</Typography>
      <Grid container>
        <Grid sm={6} xl={6} xs={12} item>
          <img
          className="animate__animated animate__fadeInLeft"
            style={{ maxHeight: "70%" }}
            src={`../assets/heroes/${id}.jpg`}
            alt={superhero}
          />
        </Grid>
        <Grid sm={6} xl={6} xs={12} item>
          <Box mb={5}>
            <Typography>Publisher: {publisher}</Typography>
            <Typography>Alter: {alter_ego}</Typography>
            <Typography>First appearance: {first_appearance}</Typography>
            <Typography>Characters: {characters}</Typography>
          </Box>
          <Box  >
            <Button onClick={handleBack} variant="contained" color="primary">
              volver atras
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroesScreen;

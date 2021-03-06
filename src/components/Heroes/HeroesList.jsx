import { Grid, Box } from "@material-ui/core";
import React,{useMemo} from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroesCard from "./HeroesCard";
import 'animate.css'
const HeroesList = ({ publisher }) => {
  
  const heroes  =  useMemo(() => getHeroesByPublisher(publisher), [publisher])
  
  return (
    <Box mt={10}>
      <Grid container>
        {heroes.map((heroe) => (
          <Grid
          key={heroe.id}
          item xs={12} xl={3} sm={4}>
            <Box m={3} className="animate__animated animate__zoomIn">
              <HeroesCard  {...heroe} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroesList;

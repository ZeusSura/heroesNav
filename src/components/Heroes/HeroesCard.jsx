import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {

    height: 0,
    paddingTop: '56.25%', // 16:9,
 
  },
});
const HeroesCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const classes = useStyles();

  return (
    <Card className={`${classes.root}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`./assets/heroes/${id}.jpg`}
          title={superhero}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {superhero}
          </Typography>
          <Typography gutterBottom variant="body1" >
            {alter_ego}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut, repellendus unde numquam labore alias saepe reiciendis 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="small" color="primary">
          Compartir
        </Button>
        <Button  component={Link} to={`heroe/${id}`} size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
};

export default HeroesCard;

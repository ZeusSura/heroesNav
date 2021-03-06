import { Button, TextField } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Grid, Box } from "@material-ui/core";
import React, { useState } from "react";

const SearchScreen = () => {

    const [heroe, setHeroe] = useState('')
    const handleInputChange = e=>{
        setHeroe(e.target.value)
    }

    const handleSubmit = e=>
    {
            e.preventDefault()
    }
  return (
    <Box mt={8}>
    <Grid container>
      <Grid item  lg={6} sm={12}>
        <Typography align="center" variant="h4">
          Buscar Heroe
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={4}>
            <TextField
              fullWidth
              id="heroe"
              name="heroe"
              label="Heroe"
              onChange={handleInputChange}
              value={heroe}
            />
          </Box>
          <Box mt={2}>
            <Button fullWidth variant="contained" color="primary" type="submit">
             Buscar
            </Button>
          </Box>
        </form>
      </Grid>
      <Grid item  lg={6} sm={12}></Grid>
    </Grid>
    </Box>
  );
};

export default SearchScreen;

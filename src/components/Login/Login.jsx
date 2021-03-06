import { Grid, Button, TextField, Paper, Box, Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import GroupIcon from "@material-ui/icons/Group";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

const Login = ({history}) => {


   const {dispatch} = useContext(AuthContext);
    const handleClick  =()=>
    {
       const action = {
         type:types.login,
         payload:{
           user:'alejandrogzh@gmail.com',
           logged:true
         }
       }
       dispatch(action)
    }
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Paper elevation={15}>
          <Box p={10}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Avatar  >
                  <GroupIcon
                    color="primary"
              
                  />
                </Avatar>
              </Grid>
              <Grid item>
                <Box mt={5}>
                  <TextField
                    type="text"
                    name="usuario"
                    id="usuario"
                    label="Usuario"
                  />
                </Box>
              </Grid>

              <Grid item>
                <Box mt={5}>
                  <TextField
                    type="password"
                    name="password"
                    id="password"
                    label="Contraseña"
                  />
                </Box>
              </Grid>

              <Grid item>
                <Box mt={5}>
                  <Button
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                  >
                    Iniciar sesión
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;

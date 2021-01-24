import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Card, Button, Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const useStyles = makeStyles({
  root: {
    backgroundColor:'#F5F5F5',
    borderRadius: 10,
    maxWidth: 350,
    margin: 105,
  },
  large: {
    width: 165,
    height: 165,
  },
});

export default function FormLogin(){
  const classes = useStyles();

    return(
      <center>
      <Card className={classes.root} >
        <CardContent>
          <FormControl >
            <center><Avatar id="logo1" htmlFor="entradaUsuario" alt="logo" src="/images/LOGO_COMEPCAFE1.png" className={classes.large}/></center>
            <center><h1>Iniciar Sesión</h1></center>
            <ListItem>
              <ListItemAvatar>
                <Avatar htmlFor="entradaUsuario" alt="user" src="/images/user.png"/>
              </ListItemAvatar>
                <Form.Control type="text" placeholder="Usuario o Correo" size="small" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar htmlFor="entradaContra" alt="llave" src="/images/llave.png"/>
              </ListItemAvatar>
                <Form.Control type="password" placeholder="Contraseña" size="small" />
            </ListItem>
            <br/>
              <Link href={"/contacto"}  style={{ color:'black', textDecorationLine:'None' }}>¿Olvidó su Contraseña?</Link>
            <br/>
            <Button  variant="contained" size="small"><h6><b>Iniciar Sesión</b></h6></Button>
          </FormControl>
        </CardContent>
      </Card>
      
      </center>
    );
}

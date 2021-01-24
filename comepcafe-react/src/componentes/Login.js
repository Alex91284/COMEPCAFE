import React from 'react';
import './estilos/login.css';
import { FormControl, Button, Avatar } from '@material-ui/core';
import Card from 'react-bootstrap/Card';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Form from 'react-bootstrap/Form';
import FormLabel from '@material-ui/core/FormLabel';

export default function Login(){

    return(
      <center>
        <Card className="container well" id="containerLogin">
          <CardContent>
            <FormControl >
              <center><Avatar id="logo1" htmlFor="entradaUsuario" alt="logo" src="/images/LOGO_COMEPCAFE1.png"/></center>
              <center><h1>Iniciar Sesión</h1></center>
              <ListItem>
                <div>
                  <ListItemAvatar id="usuario-img">
                    <Avatar htmlFor="entradaUsuario" alt="user" src="/images/user.png"/>
                  </ListItemAvatar>
                </div>
                <div>
                  <FormLabel  id="txt-Usuario-correo">Usuario o Correo</FormLabel>
                  <Form.Control type="text" placeholder="ejemplo@gmail.com" size="small" />
                </div>
              </ListItem>
              <ListItem>
                <div>
                  <ListItemAvatar id="contra-img">
                    <Avatar htmlFor="entradaContra" alt="llave" src="/images/llave.png"/>
                  </ListItemAvatar>
                </div>
                <div>
                  <FormLabel  id="txt-contraseña">Contraseña</FormLabel>
                  <Form.Control type="password" placeholder="#*123asdASD" size="small" />
                </div>
              </ListItem>
              <br/>
                <Link href={"/olvido_contra"} id="olvido"  style={{ color:'black', textDecorationLine:'None' }}>¿Olvidó su Contraseña?</Link>
              <br/>
              <Button  variant="contained" size="small"><h6><b>Iniciar Sesión</b></h6></Button>
            </FormControl>
          </CardContent>
        </Card>
      </center>
    );
}

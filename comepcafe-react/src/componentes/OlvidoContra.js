import React from 'react';
import './estilos/olvidoContra.css';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Avatar } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



export default function OlvidoContraseña(){
  return(
    <Card id="conten-contacto">
    <CardMedia id="media" image="/images/comepcafemodificada3.png" title="logo corporativo"/>
      <img src="/images/comepcafemodificada3.png" id="Logo-Corpo" alt="Logo-Corporativo"/>
    <CardMedia/>
      <hr color="silver"/>
      <CardContent>
        <Link to={"/"} style={{ color:'black', textDecorationLine:'None' }}>
          <Avatar alt="atras" src="/images/arrow-back-icon.png" id="atras-contacto"/>
        </Link>
        <figcaption id="txt-atras-contacto">Atrás</figcaption>
          <Grid  container spacing={1}>
            <Grid item xs={10} >
              <div id="txt-titulo">
                Restablecer Contraseña
              </div>
              <div id="txt-mensajeRes">
                A continuación diligencie los siguientes campos del formulario
                para realizar el restablecimiento de su contraseña y pulse enviar.
                Recibirá un correo electronico con la nueva contraseña.
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormLabel  id="txt-labelsI-usuRes">Identificación</FormLabel>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Form.Control id="idDocuRes" placeholder="1000000000" type="text" variant="outlined"  size="small" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <FormLabel  id="txt-labels-usuRes">Correo Electrónico</FormLabel>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Form.Control id="correoRes" placeholder="ejemplo@gmail.com" type="text" variant="outlined" size="small" />
            <br/>
            </Grid>
            <Grid item xs={12}>
            <center>
              <Button id="btn-enviar-res"  variant="contained" color="default" size="small">
                <h6><b>Enviar</b></h6>
              </Button>
            </center>
            </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
}

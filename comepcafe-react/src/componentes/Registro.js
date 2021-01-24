import React from 'react';
import './estilos/registros.css';
import { Link } from "react-router-dom";
import { Card, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function Registro(){
    return(
      <Card id="contenedorReg">
        <CardMedia id="media"title="logo corporativo"/>
          <img  id="Logo-Corpo" src="/images/comepcafemodificada3.png" alt="Logo-Corporativo"/>
        <CardMedia/>
        <hr/>
        <CardContent>
          <Link to={"/home"} style={{ color:'black', textDecorationLine:'None' }}>
            <Avatar alt="atras" src="/images/arrow-back-icon.png" id="atras"/>
          </Link>
          <figcaption id="txt-atrasReg" className="figure-caption text-center">Atrás</figcaption>
          <Grid container spacing={3} id="GritIconos">
            <Grid item xs={6} sm={3} md={2}>
              <center>
                <Link to={"/reg_acopios"} style={{ color:'black', textDecorationLine:'None' }}>
                  <img src="/images/acopio.png" alt="acopio" id="iconoAcopio"/>
                </Link>
                <figcaption className="figure-caption text-center">Registro de Acopios</figcaption>
              </center>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <center>
                <Link to={"/reg_usuarios"} style={{ color:'black', textDecorationLine:'None' }}>
                  <img src="/images/usuarios.png" alt="usuarios" id="iconoUsuario"/>
                </Link>
                <figcaption className="figure-caption text-center">Registro de Usuarios</figcaption>
              </center>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <center>
                <Link to={"/reg_compras"} style={{ color:'black', textDecorationLine:'None' }}>
                  <img src="/images/compras.png" alt="compras" id="iconoCompras"/>
                </Link>
                <figcaption className="figure-caption text-center">Registro de Compras</figcaption>
              </center>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <center>
                <Link to={"/reg_recursos"} style={{ color:'black', textDecorationLine:'None' }}>
                  <img src="/images/recurso.png" alt="recurso" id="iconoRecursos"/>
                </Link>
                <figcaption id="txt-icon-Recur">Registro de Recursos</figcaption>
              </center>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <center>
                <Link to={"/reg_jornal"} style={{ color:'black', textDecorationLine:'None' }}>
                  <img src="/images/trabajador.png" alt="jornal" id="iconoJ"/>
                </Link>
                <figcaption id="txt-icon-jornal">Registro de Jornales</figcaption>
              </center>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Typography variant="body2" color="textPrimary" component="p" id="saludo">
            <b>¡BIENVENIDO!:</b> JAHIR VIVAS
          </Typography>
        </CardActions>
      </Card>
    );
}

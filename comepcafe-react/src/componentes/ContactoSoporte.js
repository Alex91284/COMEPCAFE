import React from 'react';
import './estilos/contacto_soporte.css';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Card, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



export default function ContactoSoporte(){
  return(
    <Card id="conten-contacto">
    <CardMedia id="media" image="/images/comepcafemodificada3.png" title="logo corporativo"/>
      <img src="/images/comepcafemodificada3.png" id="Logo-Corpo" alt="Logo-Corporativo"/>
    <CardMedia/>
      <hr color="silver"/>
      <CardContent>
        <Link to={"/home"} style={{ color:'black', textDecorationLine:'None' }}>
          <Avatar alt="atras" src="/images/arrow-back-icon.png" id="atras-contacto"/>
        </Link>
        <figcaption id="txt-atras-contacto">Atrás</figcaption>
          <Grid  container spacing={1}>
            <Grid item xs={10} >
              <center>
                <div id="txt-mensaje">
                  Si presentas alguna falla en el sistema o deseas contactarte
                  con la mesa de soporte al cliente, por favor comunicate a las
                  siguiente lineas telefonicas.
                </div>
              </center>
            </Grid>
            <Grid item xs={12}>
              <div  id="logotipos">
                <center>
                  <figure id="imgMesaAyuda">
                    <img src="images/mesa de ayuda.png"  alt="Responsive img" id="imgMesaAyuda" className="img-responsive"/>
                  </figure>
                </center>
                <br/>
                <br/>
               </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <center>
                <div id="txt-telefono1">
                Ing : Walter Muelas<br/>
                Cel: 3218516418<br/>
                comepcafe@hotmail.com
                </div>
              </center>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <center>
                <div id="txt-telefono2">
                Ing : David Guetio<br/>
                Cel: 3007419440<br/>
                davidguetio1124@gmail.com
                </div>
              </center>
            </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
}

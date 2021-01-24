import React, { useState } from 'react';
import './estilos/busqueda_acopio.css';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Card, Button, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    backgroundColor:'#F5F5F5',
    borderRadius: 10,
    boxShadow:5,
    maxWidth: 750,
    marginTop: 135,
    marginLeft:384,
    '& .MuiTextField-root': {
      margin: 1,
      width: '25ch',
    },
  },
  formControl: {
   margin: 0,
   width: 255
 },
 selectEmpty: {
   marginTop: 6
 },
  media: {
    height: 140,
  },
  atras: {
    marginTop:-20,
  },
  form: {
    marginTop:5,
    marginLeft:45
  },
  bortones: {

  },
});

export default function EditarAcopio(){
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const funciones=() => {
    guardar();
    handleClickOpen(true);
  };

  const [codigo, setCodigo] = useState("");
  const [grupo, setGrupo] = useState(0);
  const [resAco, setResAco] = useState("");
  const [muniAco, setMuniAco] = useState("");

  const guardar=()=>{const data = { codAcopio: codigo,
                                    nomAcopio: grupo,
                                    resguAcopio: resAco,
                                    muniAcopio: muniAco
                                  };

  fetch('http://localhost:8000/api/crear_acopio/', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
  }

    return(
      <Card className={classes.root}>
        <CardMedia className={classes.media} image="/images/comepcafemodificada3.png" title="logo corporativo"/>
        <hr color="silver"/>
        <CardContent>
          <Link to={"/busqueda_acopio"} style={{ color:'black', textDecorationLine:'None' }}>
            <Avatar alt="atas" src="/images/arrow-back-icon.png" className={classes.atras}/>
          </Link>
          <figcaption class="figure-caption text-center">Atrás</figcaption>

            <Grid container spacing={1} className={classes.form}>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField id="outlined-search" label="Código" type="text" onChange={(e)=>setCodigo(e.target.value)} variant="outlined" size="small" />
                </Grid>
                <Grid item xs={6} className={classes.formControl}>
                  <TextField id="outlined-search" label="Nombre del Grupo" type="text" onChange={(e)=>setGrupo(e.target.value)} variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField id="outlined-search" label="Resguardo" type="text" onChange={(e)=>setResAco(e.target.value)} variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField id="outlined-search" label="Municipio" type="text" onChange={(e)=>setMuniAco(e.target.value)} variant="outlined" size="small" />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <div id="img-guardar" style={{ marginLeft:280 }}>
                    <Button className="guardar" onClick={funciones}>
                      <Avatar alt="guardar" src="/images/guardar.png" id="img-guardar"/>
                    </Button>
                    <figcaption class="figure-caption text-center">Guardar</figcaption>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                      <center><DialogTitle id="alert-dialog-title"><b>¡Mensaje de alerta!</b></DialogTitle></center>
                      <DialogContent>
                        ESTA APUNTO DE ELIMINAR EL REGISTRO, DESEA CONTINUAR...
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} variant="contained" color="secundary" autoFocus size="small">
                          <b>Volver</b>
                        </Button>
                        <Link to={"/reg_acopios"} style={{ color:'black', textDecorationLine:'None' }}>
                          <Button onClick={handleClose} variant="contained" color="secundary" autoFocus size="small">
                            <b>Aceptar</b>
                          </Button>
                        </Link>
                      </DialogActions>
                    </Dialog>
                  </div>
                </Grid>
            </Grid>

        </CardContent>
    </Card>

    );
}

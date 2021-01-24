import React, { useState } from 'react';
import './estilos/reg_acopios.css';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { Card, Button, Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};
const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    width: 350,
    backgroundColor:'#FAF8F8',
    boxShadow: 15,
  },
});

export default function RegAcopios(props){
  const classes = useStyles();
//------------------ Hoocks para el Modal Atras --------------------------------
  const [modalStyle] = React.useState(getModalStyle);
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const [ key, setKey ] = useState('');
  const [ grupoA, setGrupoA ] = useState('')
  const [ resguAcopio, setResguAcopio ] = useState('')
  const [ municipioAcopio, setMunicipioAcopio ] = useState('')
  const capturar = () => { const data = {
                                          codAcopio:key,
                                          nomAcopio:grupoA,
                                          resguAcopio:resguAcopio,
                                          municipioAcopio:municipioAcopio
                                        };

  };
  const handleSubmit = (evt)=>{
    evt.preventDefault()
    fetch('http://localhost:8000/api/acopioID/{key}')
    .then((response) => response.json())
    .then((data) => {
      if(key)
      capturar(data)
      console.log(data);
    })
  //  window.location.href = `/busqueda_acopio?s=${key}`;//navegar a otra ruta
  };
  const handleChange = (evt) => {
    setKey(evt.target.value);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
//------------------- Cierre del Modal Atras -----------------------------------
//------------------ Hoocks para Crear Acopio ----------------------------------
  const [codigo, setCodigo] = useState("");
  const [grupo, setGrupo] = useState("");
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
    console.log('Success:', data)
  })
    .catch((error) => {
    console.error('Error:', error);
    });
  };
//-------------------- Fin de la Creación de Acopio ----------------------------
//------------------ Hoocks para el Modal Guardar ------------------------------
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    guardar();
    setOpen2(true);
  };
  let direccionar=()=>{
    window.location.href = '/registro';
  };
  const handleClose2 = () => {
    direccionar();
    setOpen2(false);
  };
//------------------- Cierre del Modal Guardar ---------------------------------
    return(
      <Card id="contenedorRegAcopio">
        <CardMedia id="media"title="logo corporativo"/>
          <img  id="Logo-Corpo" src="/images/comepcafemodificada3.png" alt="Logo-Corporativo"/>
        <CardMedia/>
        <hr color="silver"/>
        <CardContent>
          <Link to={"/registro"} style={{ color:'black', textDecorationLine:'None' }}>
            <Avatar alt="atas" src="/images/arrow-back-icon.png" id="atras"/>
          </Link>
          <figcaption id="txt-atrasRegAcopio">Atrás</figcaption>
          <Grid container spacing={1} id="form">
            <Grid id="grit-codigo" item xs={12} sm={12} md={6}>
              <FormLabel  id="txt-codigo-acopio">Código</FormLabel>
              <Form.Control id="codigo" class="needs-validation" placeholder="ACC-000" type="text" onChange={(e)=>setCodigo(e.target.value)} variant="outlined"  size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormLabel  id="txt-nom-grupo">Nombre del Grupo</FormLabel>
              <Form.Control id="grupo" placeholder="Cerro Alto" type="text" onChange={(e)=>setGrupo(e.target.value)} variant="outlined"  size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormLabel  id="txt-resgu-acopio">Resguardo</FormLabel>
              <Form.Control id="resguardo" placeholder="Las Mercedes" type="text" onChange={(e)=>setResAco(e.target.value)} variant="outlined"  size="small" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <FormLabel  id="txt-muni-acopio">Municipio</FormLabel>
              <Form.Control id="municipio" placeholder="Caldono" type="text" onChange={(e)=>setMuniAco(e.target.value)} variant="outlined"  size="small" />
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <center>
                <Button id="btn-buscar"  onClick={handleClickOpen1}>
                  <Avatar alt="buscar" src="/images/buscar.png" />
                </Button>
                <figcaption id="txt-buscar"><b>Buscar</b></figcaption>
                <Modal open={open1} onClose={handleClose1} aria-labelledby="parametro-busqueda" aria-describedby="busqueda-por-codigo">
                  <div style={modalStyle} className={classes.paper}>
                    <center>
                      <h2 id="simple-modal-title">Ingrese el parametro de busqueda </h2>
                    </center>
                    <center>
                      <form >
                        <div>
                          <label>Código de Acopio</label>
                        </div>
                        <div id="txt-codigo">
                          <TextField id="codigo" value={key} type="text" onChange={handleChange} variant="outlined" size="small" />
                        </div>
                      </form>
                    </center>
                    <center>
                      <div>
                        <Button id="btn-volver" onClick={handleClose1} variant="contained" color="default" autoFocus>
                          <b>Volver</b>
                        </Button>
                        <Button id="btn-editar" onClick={handleSubmit} variant="contained" color="default" autoFocus>
                          <b>Editar</b>
                        </Button>
                      </div>
                    </center>
                  </div>
                </Modal>
              </center>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <div id="img-guardar">
                <Button id="btn-guardar" onClick={handleClickOpen2}>
                  <Avatar alt="guardar" src="/images/guardar.png" id="img-guardar"/>
                </Button>
                <figcaption id="txt-guardar">Guardar</figcaption>
                <Modal open={open2} onClose={handleClose2} aria-labelledby="parametro-busqueda" aria-describedby="busqueda-por-codigo">
                  <div style={modalStyle} className={classes.paper}>
                    <center>
                      <h2 id="simple-modal-title"> ¡Mensaje de alerta! </h2>
                    </center>
                    <center>
                      <div>
                        <span>LOS DATOS SE HAN GUARDADO EXITOSAMENTE!</span>
                      </div>
                    </center>
                    <center>
                      <div>
                        <center>
                        <Button id="btn-volver" onClick={handleClose2} variant="contained" color="default" autoFocus>
                          <b>volver</b>
                        </Button>
                        </center>
                      </div>
                    </center>
                  </div>
                </Modal>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
}

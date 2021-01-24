import 'date-fns';
import React, { useState, useEffect } from 'react';
import './estilos/gastos.css';
import { makeStyles} from '@material-ui/core/styles';
import { Link } from "react-router-dom";
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

export default function Gastos(){
  const classes = useStyles();
  //------------------ Hoocks para el Modal Atras --------------------------------
    const [modalStyle] = React.useState(getModalStyle);
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
      setOpen1(true);
    };
    const [ key, setKey ] = useState('');
    const [ cantidad, setCantidad ] = useState('')
    const [ valorU, setValorU ] = useState('')
    const [ detalle, setDetalle ] = useState('')
    const capturar = () => { const data = {
                                            codAcopio:key,
                                            nomAcopio:cantidad,
                                            resguAcopio:valorU,
                                            municipioAcopio:detalle
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
    const [item, setItem] = useState("");
    const [canti, setCanti] = useState("");
    const [valUnidad, setValUnidad] = useState("");
    const [detal, setDetal] = useState("");
    const guardar=()=>{const data = { codAcopio: item,
                                      nomAcopio: canti,
                                      resguAcopio: valUnidad,
                                      muniAcopio: detal
                                    };
    fetch('http://localhost:8000/api/crear_gastos/', {
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
    <Card id="conten-gastos">
    <CardMedia id="media" image="/images/comepcafemodificada3.png" title="logo corporativo"/>
      <img src="/images/comepcafemodificada3.png" id="Logo-Corpo" alt="Logo-Corporativo"/>
    <CardMedia/>
      <hr color="silver"/>
      <CardContent>
      <Link to={"/reg_jornal"} style={{ color:'black', textDecorationLine:'None' }}>
        <Avatar alt="atras" src="/images/arrow-back-icon.png" id="atras-gastos"/>
      </Link>
        <figcaption id="txt-atras-gastos">Atrás</figcaption>
          <Grid container spacing={1} id="GridForm-gastos">
              <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-Gastos">Item</FormLabel>
                <Form.Control id="item-gasto" type="text" onChange="" variant="outlined" size="sm"/>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-Gastos">Cantidad</FormLabel>
                <Form.Control id="cantidad" type="text" onChange="" variant="outlined" size="sm"/>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormLabel id="txt-fac-gasto" >Adjuntar Factura</FormLabel>
                <Button id="factura-gasto">
                  <Avatar alt="factura" src="/images/Factura2.png" />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-Gastos">Valor Unidad</FormLabel>
                <Form.Control id="valor-unidad" type="text" onChange="" variant="outlined" size="sm"/>
              </Grid>
              <Grid item xs={12}>
                <FormLabel  id="txt-labels-Gastos">Detalle</FormLabel>
                <Form.Control as="textarea" rows="3" id="detalle-gasto" placeholder="Redacte un pequeña descripción del gasto generado." fullWidth margin="normal" type="text" onChange="" variant="outlined"  size="sm" />
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <center>
                  <Button id="buscar-gasto" onClick={handleClickOpen1}>
                    <Avatar alt="buscar" src="/images/buscar.png" />
                  </Button>
                  <figcaption id="txt-buscar-gasto">Buscar</figcaption>
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
                <center>
                  <Button id="guardar-gasto" onClick={handleClickOpen2}>
                    <Avatar alt="guardar" src="/images/guardar.png" id="img-guardar"/>
                  </Button>
                  <figcaption id="txt-guardar-gasto">Guardar</figcaption>
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
                </center>
              </Grid>
          </Grid>
        </CardContent>
    </Card>
    );
}

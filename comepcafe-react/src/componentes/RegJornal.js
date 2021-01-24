import 'date-fns';
import React, { useState, useEffect } from 'react';
import './estilos/reg_jornal.css';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';
import FormLabel from '@material-ui/core/FormLabel';
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

export default function RegJornal(){
  const classes = useStyles();
  const [ pers, setPers ] = useState([]);
  const traerUsuario = () => {
    fetch('http://localhost:8000/api/persona/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPers(data)
    })
  }
  useEffect(() => {
    traerUsuario();
  },[]);
  //------------------ Hoocks para el Modal Atras --------------------------------
    const [modalStyle] = React.useState(getModalStyle);
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
      setOpen1(true);
    };
    const [ key, setKey ] = useState('');
    const handleSubmit = (evt)=>{
      evt.preventDefault()
      fetch('http://localhost:8000/api/venta')
      .then((response) => response.json())
      .then((data) => {
        if(key)
        //capturar(data)
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

    const [ fecJornal, setFecJornal ] = useState("");
    const [ horaI, setHoraI ] = useState("");
    const [ valorHora, setValorHora ] = useState(0);
    const [ usuario, setUsuario ] = useState("");
    const [ horaF, setHoraF ] = useState("");
    //const [ gastos, setGastos ] = useState([]);
    const [ descrip, setDescrip ] = useState("");

    const guardarJornal=()=>{const data = { fechaJornal:fecJornal,
                                            horaIni:horaI,
                                            valorHora:valorHora,
                                            idenPer:usuario,
                                            horaFin:horaF,
                                            detJornal:descrip
                                          };

    fetch('http://localhost:8000/api/crear_jornal/', {
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
    //------------------ Hoocks para el Modal Guardar ------------------------------
      const [open2, setOpen2] = React.useState(false);
      const handleClickOpen2 = () => {
        guardarJornal();
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
    <Card id="contenedor-jornal">
    <CardMedia id="media" image="/images/comepcafemodificada3.png" title="logo corporativo"/>
      <img src="/images/comepcafemodificada3.png" id="Logo-Corpo" alt="Logo-Corporativo"/>
    <CardMedia/>
      <hr color="silver"/>
      <CardContent>
        <Link to={"/registro"} style={{ color:'black', textDecorationLine:'None' }}>
          <Avatar alt="atras" src="/images/arrow-back-icon.png" id="atras-jornal"/>
        </Link>
        <figcaption id="txt-atras-jornal">Atrás</figcaption>
          <Grid container spacing={1} id="GridForm-Jornal">
              <Grid item xs={12} sm={6} md={4}>
                <FormLabel  id="txt-fec-jornal">Fecha de Jornal</FormLabel>
                <Form.Control id="fecha-jornal" type="date" onChange={(e)=>setFecJornal(e.target.value)} variant="outlined" size="sm"/>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormLabel  id="txt-horaI-jornal">Hora Inicio</FormLabel>
                <Form.Control id="hora-inicio-j" type="time" onChange={(e)=>setHoraI(e.target.value)} variant="outlined" size="sm"/>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormLabel  id="txt-Valor-jornal">Valor por Hora</FormLabel>
                <Form.Control id="valor-hora" type="text" onChange={(e)=>setValorHora(e.target.value)} variant="outlined"  size="sm" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormLabel  id="txt-identi-jornal">Identificación</FormLabel>
                <Form.Group variant="outlined" size="sm">
                  <Form.Control as="select" value={usuario.usuario}  onChange={(e)=>setUsuario(e.target.value)} id="identificacion">
                    <option value="Identi" placeholder="Identi"/>
                    {pers.map(row => (
                    <option key={row.name} value={row.idDocu} id="txt-row"> {row.idDocu} : {row.nomPer} {row.apePer} </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormLabel  id="txt-horaF-jornal">Hora Fin</FormLabel>
                <Form.Control id="hora-fin-jornal" type="time" onChange={(e)=>setHoraF(e.target.value)} variant="outlined" size="sm"/>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <center>
                <Link to={"/reg_gastos"} style={{ color:'black', textDecorationLine:'None' }}>
                  <Button id="gastos">
                    <Avatar alt="gastos" src="/images/añadir.png" id="img-gastos" />
                  </Button>
                </Link>
                  <figcaption id="txt-img-gastos">Gastos</figcaption>
                </center>
              </Grid>
              <Grid item xs={12}>
                <FormLabel  id="txt-det-jornal">Detalle</FormLabel>
                <Form.Control as="textarea" rows="3" id="detalle-jornal" placeholder="Redacte un pequeña descripción de la labor desempeñada." fullWidth margin="normal" type="text" onChange={(e)=>setDescrip(e.target.value)} variant="outlined"  size="sm" />
              </Grid>
              <Grid item xs={12}>
              <FormLabel id="txt-comproJornal">Adjuntar Factura</FormLabel>
              <Button id="factura">
                <Avatar alt="factura" src="/images/Factura2.png" />
              </Button>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <center>
                  <Button id="buscar-jornal" onClick={handleClickOpen1}>
                    <Avatar alt="buscar" src="/images/buscar.png" />
                  </Button>
                  <figcaption id="txt-buscar-jornal">Buscar</figcaption>
                  <Modal open={open1} onClose={handleClose1} aria-labelledby="parametro-busqueda" aria-describedby="busqueda-por-codigo">
                    <div style={modalStyle} className={classes.paper} id="img-buscarUsu">
                      <center>
                        <h2 id="simple-modal-title">Ingrese el parametro de busqueda </h2>
                      </center>
                      <center>
                        <form >
                          <div>
                            <label>Código de Registro</label>
                          </div>
                          <div id="txt-codigo">
                            <Form.Control id="codigo-fac" value={key} type="text" onChange={handleChange} variant="outlined"  size="small" />
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
                  <Button id="guardar-jornal" onClick={handleClickOpen2}>
                    <Avatar alt="guardar" src="/images/guardar.png" id="img-guardar-jornal"/>
                  </Button>
                  <figcaption id="txt-guardar-jornal">Guardar</figcaption>
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
                          <Button id="btn-volver" onClick={handleClose2} variant="contained" color="default" autoFocus>
                            <b>Volver</b>
                          </Button>
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

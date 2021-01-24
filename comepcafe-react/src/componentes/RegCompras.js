import React, { useState, useEffect } from 'react';
import './estilos/reg_compras.css';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

export default function RegCompras(){
  const classes = useStyles();

  const [per, setPer] = useState([]);
  const traerPersona=()=>{
        fetch('http://localhost:8000/api/persona/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setPer(data)
        })
    }
    useEffect(() => {
      traerPersona();
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

    const [ usu, setUsu ] = useState("");
    const [ codFac, setCodFac ] = useState("");
    const [ numKilos, setNumKilos ] = useState(0);
    const [ valorKilo, setValorKilo ] = useState(0);
    const [ fecCompra, setFecCompra ] = useState("");
    const [ tipoCafe, setTipoCafe ] = useState("");

    const guardar=()=>{const data = { Persona_id: usu,
                                      codFactu: codFac,
                                      numKilos: numKilos,
                                      precioKilo: valorKilo,
                                      fechaVenta: fecCompra,
                                      tipoCafe: tipoCafe
                                    };

    fetch('http://localhost:8000/api/crear_venta/', {
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
      <Card id="contenedor-compras">
      <CardMedia id="media" image="/images/comepcafemodificada3.png" title="logo corporativo"/>
        <img src="/images/comepcafemodificada3.png" id="Logo-Corpo" alt="Logo-Corporativo"/>
      <CardMedia/>
      <hr color="silver"/>
        <CardContent>
          <Link to={"/registro"} style={{ color:'black', textDecorationLine:'None' }}>
            <Avatar alt="atras" src="/images/arrow-back-icon.png" id="atras-compras"/>
          </Link>
          <figcaption id="txt-atras-compras">Atrás</figcaption>
            <Grid container spacing={1} id="GridForm-Compras">
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-Com"></FormLabel>
                  <Form.Group variant="outlined" size="sm" id="sel-identi">
                    <Form.Control as="select" value={usu.usu}  onChange={(e)=>setUsu(e.target.value)} id="identificacion">
                      <option value="Identi" placeholder="Identi"/>
                      {per.map(row => (
                      <option key={row.name} value={row.idDocu} id="txt-row"> {row.idDocu} : {row.nomPer} {row.apePer} </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labelsC-Com"></FormLabel>
                  <Form.Control id="cod-fac-compra" type="text" onChange={(e)=>setCodFac(e.target.value)} placeholder="Código Factura" variant="outlined"  size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labelsK-Com">N° de Kilogramos</FormLabel>
                  <Form.Control id="num-kilos" type="text" onChange={(e)=>setNumKilos(e.target.value)} variant="outlined"  size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labelsP-Com">Precior por Kilo</FormLabel>
                  <Form.Control id="valor-kilo" type="text" onChange={(e)=>setValorKilo(e.target.value)} variant="outlined" size="small"/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-fec-venta">Fecha de Compra</FormLabel>
                  <Form.Control id="fecha-compra" type="date" onChange={(e)=>setFecCompra(e.target.value)} variant="outlined" size="sm"/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="tipo">Tipo de Café</FormLabel>
                  <RadioGroup row aria-label="position" name="position" defaultValue="top" id="radio" onChange={(e)=>setTipoCafe(e.target.value)}>
                    <FormControlLabel value="FLO" control={<Radio color="default" />} label="FLO" size="small" />
                    <FormControlLabel value="ORG" control={<Radio color="default" />} label="ORG" size="small" />
                    <FormControlLabel value="NS" control={<Radio color="default" />} label="NS" size="small"/>
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel id="comproV">Adjuntar Factura</FormLabel>
                  <Button id="factura">
                    <Avatar alt="factura" src="/images/Factura2.png" />
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>

                </Grid>

                <Grid item xs={6} sm={6} md={6}>
                  <center>
                    <Button id="buscar-compra" onClick={handleClickOpen1}>
                      <Avatar alt="buscar" src="/images/buscar.png" />
                    </Button>
                    <figcaption id="txt-buscar-compra">Buscar</figcaption>
                    <Modal open={open1} onClose={handleClose1} aria-labelledby="parametro-busqueda" aria-describedby="busqueda-por-codigo">
                      <div style={modalStyle} className={classes.paper} id="img-buscarUsu">
                        <center>
                          <h2 id="simple-modal-title">Ingrese el parametro de busqueda </h2>
                        </center>
                        <center>
                          <form >
                            <div>
                              <label>Código de Factura</label>
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
                  <center id="img-guardar">
                    <Button id="guardar-compra" onClick={handleClickOpen2}>
                      <Avatar alt="guardar" src="/images/guardar.png" id="img-guardar-com"/>
                    </Button>
                    <figcaption id="txt-guardar-com">Guardar</figcaption>
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

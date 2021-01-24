import React, { useState, useEffect } from 'react';
import './estilos/reg_recursos.css';
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

export default function RegRecursos(){
  const classes = useStyles();

  const [aco, setAco] = useState([]);
  const traerAcopio = () => {
        fetch('http://localhost:8000/api/acopio/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setAco(data)
        })
    }
    useEffect(() => {
      traerAcopio();
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
        fetch('http://localhost:8000/api/recurso')
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

    const [ acop, setAcop ] = useState("");
    const [ fecRecur, setFecRecur ] = useState("");
    const [ monto, setMonto ] = useState(0);
    const [ numFac, setNumFac ] = useState("");
    const [ codRecurso, setCodRecurso ] = useState("");
    const [ numCheque, setNumCheque ] = useState("");
    const [ numCuenta, setNumCuenta ] = useState("");
    const [ detCuenta, setDetCuenta ] = useState("");

    const guardar=()=>{const data = { acopio_id: acop,
                                      fechaRec: fecRecur,
                                      valorRec: monto,
                                      numFac: numFac,
                                      codRec: codRecurso,
                                      numCheque: numCheque,
                                      numCuenta: numCuenta,
                                      detCuenta: detCuenta
                                    };

    fetch('http://localhost:8000/api/crear_recurso/', {
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
      <Card id="contenedor-recursos">
      <CardMedia id="media" image="/images/comepcafemodificada3.png" title="logo corporativo"/>
        <img src="/images/comepcafemodificada3.png" id="Logo-Corpo" alt="Logo-Corporativo"/>
      <CardMedia/>
      <hr/>
        <CardContent>
          <Link to={"/registro"} style={{ color:'black', textDecorationLine:'None' }}>
            <Avatar alt="atras" src="/images/arrow-back-icon.png" id="atras-recursos"/>
          </Link>
          <figcaption id="txt-atras-recursos">Atrás</figcaption>
            <Grid container spacing={1} id="GridForm-recursos">
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labels-Recu">Acopio</FormLabel>
                  <Form.Group variant="outlined" size="sm">
                    <Form.Control as="select" value={acop.acop}  onChange={(e)=>setAcop(e.target.value)} id="Acopio-rec">
                    <option value="Acopio" id="Acopio"/>
                    {aco.map(row => (
                    <option key={row.name} value={row.idAcopio}>{row.nomAcopio}</option>
                    ))}
                    </Form.Control>
                  </Form.Group>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-fec-recurso">Fecha de Recurso</FormLabel>
                <Form.Control id="fecha-rec" type="date" onChange={(e)=>setFecRecur(e.target.value)} variant="outlined" size="sm"/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labels-Recu">Monto Económico</FormLabel>
                  <Form.Control id="monto-rec" type="text" onChange={(e)=>setMonto(e.target.value)} variant="outlined"  size="sm" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labels-Recu">N° Comprobante</FormLabel>
                  <Form.Control id="comprobante-rec"type="text" onChange={(e)=>setNumFac(e.target.value)} variant="outlined"  size="sm" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labels-Recu">Código</FormLabel>
                  <Form.Control id="codigo-Rec" type="text" onChange={(e)=>setCodRecurso(e.target.value)} variant="outlined"  size="sm" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labels-Recu">N° Cheque</FormLabel>
                  <Form.Control id="num-cheque" type="text" onChange={(e)=>setNumCheque(e.target.value)} variant="outlined"  size="sm" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel  id="txt-labels-Recu">Cuenta</FormLabel>
                  <Form.Control id="cuenta" type="text" onChange={(e)=>setNumCuenta(e.target.value)} variant="outlined"  size="sm" />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel  id="txt-labels-Recu">Detalle</FormLabel>
                <Form.Group>
                  <Form.Control as="textarea" rows="3" id="detalle-recurso" placeholder="Redacte un pequeña descripción por el concepto económico." fullWidth margin="normal" type="text" onChange={(e)=>setDetCuenta(e.target.value)} variant="outlined"  size="sm" />
                </Form.Group></Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel id="txt-comproR">Adjuntar Factura</FormLabel>
                  <Button id="factura">
                    <Avatar alt="factura" src="/images/Factura2.png" />
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <center>
                    <Button id="buscar-rec" onClick={handleClickOpen1}>
                      <Avatar alt="buscar" src="/images/buscar.png" />
                    </Button>
                    <figcaption id="txt-buscar-rec">Buscar</figcaption>
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
                    <Button id="guardar-rec" onClick={handleClickOpen2}>
                      <Avatar alt="guardar" src="/images/guardar.png" id="img-guardar"/>
                    </Button>
                    <figcaption id="txt-guardar-rec">Guardar</figcaption>
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

import React, { useState, useEffect } from 'react';
import './estilos/reg_usuario.css';
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

export default function RegUsuarios(){
  const classes = useStyles();

  const [acopio, setAcopio] = useState([]);
  const getValue=()=>{
        fetch('http://localhost:8000/api/acopio/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setAcopio(data)
        })
    }
  const [ roles, setRoles] = useState([]);
  const traerRol=()=>{
      fetch('http://localhost:8000/api/rol/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRoles(data)
      })
    }

useEffect(() => {
  getValue();
  traerRol();
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
    fetch('http://localhost:8000/api/acopioID/{key}')
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

  const [grupo, setGrupo] = useState(0);
  const [rol, setRol] = useState(0);
  const [idDocu, setIdDocu] = useState(0);
  const [codigo, setCodigo] = useState("");
  const [nom, setNom] = useState("");
  const [ape, setApe] = useState("");
  const [tel, setTel] = useState("");
  const [correo, setCorreo] = useState("");
  const [muni, setMuni] = useState("");
  const [vere, setVere]= useState("");
  const [resgu, setResgu] = useState("");
  const [finca, setFinca] = useState("");

  const guardar=()=>{const data = { acopio_id: grupo,
                                    rol_id: rol,
                                    idDocu: idDocu,
                                    codPer: codigo,
                                    nomPer: nom,
                                    apePer: ape,
                                    telPer: tel,
                                    correoPer: correo,
                                    muniPer: muni,
                                    verePer: vere,
                                    resguPer: resgu,
                                    fincaPer: finca
                                  };

  fetch('http://localhost:8000/api/crear_persona/', {
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
    <Card id="conteRegUsuario">
    <CardMedia id="media" image="/images/comepcafemodificada3.png" title="logo corporativo"/>
      <img  id="Logo-Corpo" src="/images/comepcafemodificada3.png" alt="Logo-Corporativo" />
    <CardMedia/>
      <hr/>
      <CardContent>
          <Link to={"/registro"} style={{ color:'black', textDecorationLine:'None' }}>
            <Avatar alt="atras-Reg-Usu" src="/images/arrow-back-icon.png" id="artas-Reg-Usu"/>
          </Link>
          <figcaption id="txt-atrasRegUsu">Atrás</figcaption>
            <Grid container spacing={1} id="GridFormuR-USU">
                <Grid item xs={6}>
                <FormLabel  id="txt-labelsA-usu">Grupo</FormLabel>
                <Form.Group variant="outlined" size="sm">
                  <Form.Control as="select" value={grupo.grupo} onChange={(e)=>setGrupo(e.target.value)} id="acopio">
                    <option value="Grupo" placeholder="Grupo"></option>
                    {acopio.map(row => (
                    <option key={row.name} value={row.idAcopio}>{row.nomAcopio}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                </Grid>
                <Grid item xs={3} >
                <FormLabel  id="txt-labelsR-usu">Rol</FormLabel>
                <Form.Group variant="outlined" size="small">
                  <Form.Control as="select" value={rol.rol} onChange={(e)=>setRol(e.target.value)} id="rol">
                    <option value="Rol" placeholder="Rol"></option>
                    {roles.map(row => (
                    <option key={row.name} value={row.idRol}>{row.nomRol}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                </Grid>
                <Grid item xs={3}>
                  <img src="images/users.png" alt="Foto-Usuario" id="foto"/>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labelsI-usu">Identificación</FormLabel>
                  <Form.Control id="idDocu" placeholder="1000000000" type="text" onChange={(e)=>setIdDocu(e.target.value)} variant="outlined"  size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labelsC-usu">Código</FormLabel>
                  <Form.Control id="codigoUsu" placeholder="CC000" type="text" onChange={(e)=>setCodigo(e.target.value)} variant="outlined"  size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-usu">Nombres</FormLabel>
                  <Form.Control id="nom" placeholder="David Ferney" type="text" onChange={(e)=>setNom(e.target.value)} variant="outlined"  size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-usu">Apellidos</FormLabel>
                  <Form.Control id="ape" placeholder="Guetio Guetio" type="text" onChange={(e)=>setApe(e.target.value)} variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-usu">Teléfono</FormLabel>
                  <Form.Control id="tel" placeholder="300456321" type="text" onChange={(e)=>setTel(e.target.value)} variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-usu">Correo Electrónico</FormLabel>
                  <Form.Control id="correo" placeholder="davidg@gmail.com" type="text" onChange={(e)=>setCorreo(e.target.value)}  variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-usu">Município</FormLabel>
                  <Form.Control id="muni" placeholder="Caldono" type="text" onChange={(e)=>setMuni(e.target.value)}  variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-usu">Vereda</FormLabel>
                  <Form.Control id="vere" placeholder="Cerro Alto" type="text" onChange={(e)=>setVere(e.target.value)}  variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-usu">Resguardo</FormLabel>
                  <Form.Control id="resgu" placeholder="Las Mercedes" type="text" onChange={(e)=>setResgu(e.target.value)}  variant="outlined" size="small" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                <FormLabel  id="txt-labels-usu">Finca</FormLabel>
                  <Form.Control id="finca" placeholder="Las Acacias" type="text" onChange={(e)=>setFinca(e.target.value)}  variant="outlined" size="small" />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <center id="img-buscar-Usu">
                    <Button id="buscarUsu" onClick={handleClickOpen1}>
                      <Avatar alt="buscar" src="/images/buscar.png" />
                    </Button>
                    <figcaption id="txt-buscarUsu">Buscar</figcaption>
                    <Modal open={open1} onClose={handleClose1} aria-labelledby="parametro-busqueda" aria-describedby="busqueda-por-codigo">
                      <div style={modalStyle} className={classes.paper} id="img-buscarUsu">
                        <center>
                          <h2 id="simple-modal-title">Ingrese el parametro de busqueda </h2>
                        </center>
                        <center>
                          <form >
                            <div>
                              <label>Identificación</label>
                            </div>
                            <div id="txt-codigo">
                              <Form.Control id="codigo" value={key} type="text" onChange={handleChange} variant="outlined"  size="small" />
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
                <Grid item xs={12} sm={6} md={6}>
                  <div id="img-guardar-Usu">
                    <Button id="guardarUsu" onClick={handleClickOpen2}>
                      <Avatar alt="guardar" src="/images/guardar.png" id="img-guardar"/>
                    </Button>
                    <figcaption id="txt-guardarUsu">Guardar</figcaption>
                    <Modal open={open2} onClose={handleClose2}>
                      <div style={modalStyle} className={classes.paper}>
                        <center>
                          <h2 id="simple-modal-title"> ¡Mensaje de alerta! </h2>
                        </center>
                        <center>
                          <div>
                            <span>SUS DATOS SE HAN GUARDADO EXITOSAMENTE!</span>
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
                  </div>
                </Grid>
            </Grid>
      </CardContent>
    </Card>
    );
}

import React from 'react';
import { Link } from "react-router-dom";
import './estilos/home.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};
const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 350,
    backgroundColor:'#FAF8F8',
    boxShadow: 15,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [modalStyle] = React.useState(getModalStyle);
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true)
  };
  let direccionar=()=>{
    window.location.href = '/';
  };
  const handleClose1 = ()=> {
    setOpen2(false);
  }
  const handleClose2 = () => {
    direccionar();
    setOpen2(false);
  };
  return (
    <div>
      <center>
        <section id="conten-menu">
          <AppBar position="static" id="barra">
          <Row>
            <Toolbar>
            <Col xs={1} sm={1} md={2} lg={2}>
              <IconButton edge="start" id="menu-button" color="default" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <img src="/images/MENÚ2.png" alt="menu" id="menu"/>
              </IconButton>
              <Menu id="link-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <Link id="cont-link" to={"/registro"} style={{ color:'black', textDecorationLine:'None', fontSize:'h5' }}>
                  <MenuItem id="item" onClick={handleClose}><b> R e g i s t r o </b></MenuItem>
                </Link>
                <Link to="" style={{ color:'black', textDecorationLine:'None' }}>
                  <MenuItem id="item" onClick={handleClose}><b> R e p o r t e s </b></MenuItem>
                </Link>
                <Link to="" style={{ color:'black', textDecorationLine:'None' }}>
                  <MenuItem id="item" onClick={handleClose}><b> C o n s u l t a s </b></MenuItem>
                </Link>
                <Link to={"/contacto"} style={{ color:'black', textDecorationLine:'None' }}>
                  <MenuItem id="item" onClick={handleClose}><b> C o n t a c t o - S o p o r t e </b></MenuItem>
                </Link>
              </Menu>
            </Col>
            <Col xs={10} sm={10} md={8} lg={8}>
              <Typography id="title">
                 C O M E P C A F É
              </Typography>
            </Col>
            <Col xs={1} sm={1} md={2} lg={2}>
              <Button color="default" onClick={handleClickOpen2}>
                <img src="/images/cerrar sesion.png" alt="salir" id="salir"/>
              </Button>
              <Modal open={open2} onClose={handleClose2}>
                <div style={modalStyle} className={classes.paper}>
                  <center>
                    <h2 id="simple-modal-title"> ¡Mensaje de alerta! </h2>
                  </center>
                  <hr/>
                  <center>
                    <div>
                      <span> Está a punto de cerrar esta sesión, está seguro de hacerlo? </span>
                    </div>
                  </center>
                  <br/>
                  <center>
                    <div id="botones">
                      <Button id="btn-volver" onClick={handleClose1} variant="contained" color="default" autoFocus>
                        <b>Volver</b>
                      </Button>
                      <Button id="btn-salir" onClick={handleClose2} variant="contained" color="default" autoFocus>
                        <b>Cerrar Sesión</b>
                      </Button>
                    </div>
                  </center>
                </div>
              </Modal>
            </Col>
            </Toolbar>
          </Row>
          </AppBar>
        </section>
        <section id="texto">
          <Typography id="desc-empresa">
            <b>
              Somos una organización conformada por pequeños productores de café ubicados en
              el departamento del Cauca (COLOMBIA), con el objetivo principal de comercializar
              un café de excelente calidad cumpliendo con los estándares internacionales, de
              esta forma impactamos de manera positiva  a 1400 familias, de las comunidades
              indígenas, afro y campesinas.
            </b>
          </Typography>
        </section>
        <section className="bg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Card id="tarjeta1">
                <CardActionArea>
                  <CardContent>
                    <Typography id="titu-vision">
                      <b>VISIÓN</b>
                    </Typography>
                    <Typography id="txt-vision">
                      <b>
                        Para el 2021, COMEPCAFE será una organización líder en Colombia,
                        en la Comercialización de cafés especiales por denominación de
                        origen, satisfaciendo las expectativas de los consumidores en el
                        mercado nacional e internacional.
                      </b>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card id="tarjeta2">
                <CardActionArea>
                  <CardContent>
                    <Typography id="titu-mision">
                      <b>MISIÓN</b>
                    </Typography>
                    <br/>
                    <Typography id="txt-mision">
                      <b>
                        Contribuir al mejoramiento de la calidad de vida de los asociados,
                        a partir de la producción ecológica,comercialización de café y
                        demás productos agropecuarios.
                      </b>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </section>
      </center>
      <section className="foother" id="certificaciónes">
        <div className=" foother text-center">
          <img src="images/fairtrade.png" alt="fairtrade" id="img-fair"/>
          <img src="images/mayacert.png" alt="mayacert" id="img-maya"/>
          <div id="txt-foother" className="footer-copyright text-center py-3">
            siacomepcafe V 0.1
            <br/>
            © 2020 Copyright:
            COMEPCAFÉ
          </div>
        </div>
      </section>
    </div>
  );
}

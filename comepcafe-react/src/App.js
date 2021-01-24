import React from 'react';
import './App.css';
import ListaPersonas from './componentes/ListaPersonas';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Registro from './componentes/Registro';
import RegUsuarios from './componentes/RegUsuarios';
import RegAcopios from './componentes/RegAcopios';
import RegCompras from './componentes/RegCompras';
import RegRecursos from './componentes/RegRecursos';
import RegJornal from './componentes/RegJornal';
import Gastos from './componentes/Gastos';
import BusquedaAcopio from './componentes/BusquedaAcopio';
import EditarAcopio from './componentes/EditarAcopio';
import ContactoSoporte from './componentes/ContactoSoporte';
import Home from './componentes/Home';
import OlvidoContra from './componentes/OlvidoContra';
import Login from './componentes/Login';

export default function App() {
  return (

    <BrowserRouter> {/* envolvemos nuestra aplicación en el Router  */}
      <Switch> {/* también la envolvemos en el componente Switch */}
         {/* y creamos nuestras rutas */}
        <Route path="/home" component={Home}/>{/*Este es de prueba para ver como que da con bootstrap*/}
        <Route path="/registro" component={Registro}/>
        <Route path="/reg_acopios" component={RegAcopios}/>
        <Route path="/busqueda_acopio" component={BusquedaAcopio}/>
        <Route path="/editar_acopio" component={EditarAcopio}/>
        <Route path="/reg_usuarios" component={RegUsuarios}/>
        <Route path="/reg_compras" component={RegCompras}/>
        <Route path="/reg_recursos" component={RegRecursos}/>
        <Route path="/reg_jornal" component={RegJornal}/>
        <Route path="/reg_gastos" component={Gastos}/>
        <Route path="/contacto" component={ContactoSoporte}/>
        <Route path="/olvido_contra" component={OlvidoContra}/>
        <Route path="/" component={Login}/>
      </Switch>
    </BrowserRouter>

  );
}

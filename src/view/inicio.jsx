import React from "react";
import Grid from "@mui/material/Grid";
import "/src/view/css/styles.css";
import "/src/view/tabla.jsx";
import { TablaInicial } from "/src/view/tabla.jsx";
import { Buscador } from "/src/view/buscador.jsx";
import { Menu } from "/src/view/menu.jsx";
import "/src/view/noti_men_config.jsx";
import {
  AccountProfile,
  AccountMessage,
  AccountNotification
} from "/src/view/noti_men_config.jsx";

export function Dashinicio() {
  return <Inicio />;
}
//Generacion y Estructura del Dash
function Inicio() {
  return (
    <div className="container-center-horizontal">
      <div className="dashboard-graphics screen" className="fondo">
        <div className="barmenu" className="barmenu">
          <Menu />
        </div>
        <ul>
          <Seccion />
          <div className="areatrabajo">
            <Areatrabajo />
          </div>
        </ul>
      </div>
    </div>
  );
}
/* 
   Area generada en columnas para tener en una sola linea,
   el buscador, notificacion, mensajes, configuracion y perfil
*/
function Seccion() {
  return (
    <Grid container spacing={0} columns={5}>
      <Grid>
        <Buscador />
      </Grid>
      <Grid>
        <AccountNotification />
      </Grid>
      <Grid>
        <AccountMessage />
      </Grid>
      <Grid>
        <AccountProfile />
      </Grid>
    </Grid>
  );
}
//Seccion de Area de Trabajo
function Areatrabajo() {
  return (
    <div className="tabla">
      <TablaInicial />
    </div>
  );
}

import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    div:{
        maxWidth: 1350,
        margin: 5,

    },
    table: {
        minWidth: 700,
    },
});

export default function ListaPersonas() {

    const [rows, setRows] = useState([]);

    const getValue=()=>{
        fetch('http://localhost:8000/api/persona/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            setRows(data)
        })
    }

  const classes = useStyles();

  return (
    <center><div className={classes.div}>
        <TableContainer component={Paper}>
            <Table className={classes.table}  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Identificación</StyledTableCell>
                        <StyledTableCell>Código</StyledTableCell>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Apellido</StyledTableCell>
                        <StyledTableCell>Teléfono</StyledTableCell>
                        <StyledTableCell>Correo</StyledTableCell>
                        <StyledTableCell>Municipio</StyledTableCell>
                        <StyledTableCell>Vereda</StyledTableCell>
                        <StyledTableCell>Finca</StyledTableCell>
                        <StyledTableCell>Acopio</StyledTableCell>
                        <StyledTableCell>Rol</StyledTableCell>
                        <StyledTableCell>Acciones</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {rows.map(row => (
                    <StyledTableRow key={row.name}>
                        <StyledTableCell>{row.idDocu}</StyledTableCell>
                        <StyledTableCell>{row.codPer}</StyledTableCell>
                        <StyledTableCell >{row.nomPer}</StyledTableCell>
                        <StyledTableCell >{row.apePer}</StyledTableCell>
                        <StyledTableCell>{row.telPer}</StyledTableCell>
                        <StyledTableCell>{row.muniPer}</StyledTableCell>
                        <StyledTableCell>{row.verePer}</StyledTableCell>
                        <StyledTableCell>{row.resguPer}</StyledTableCell>
                        <StyledTableCell>{row.fincaPer}</StyledTableCell>
                        <StyledTableCell>{row.acopio_id}</StyledTableCell>
                        <StyledTableCell>{row.rol_id}</StyledTableCell>
                        <StyledTableCell>
                          <center>
                            <Button variant="contained" size="small" onClick={row.idDocu}>  Editar  </Button>
                            <br/>
                            <Button variant="contained" size="small" onClick={row.idDocu}>Eliminar</Button>
                          </center>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button onClick={getValue}>ver datos</Button>
    </div></center>
  );
}

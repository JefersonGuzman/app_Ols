import React , {useState, Fragment, useEffect} from 'react';

import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import IconButton from '@material-ui/core/IconButton';
import ModalUsuario from './ModalUsuario';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from  '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
// import Modal from '@material-ui/core/Modal';

import { Table } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { positions } from '@material-ui/system';



function  Usuario() {


  //Usarios en local storage
  let userIniciales = JSON.parse(localStorage.getItem('users'));
  
  if(!userIniciales){
     userIniciales = [];
  }


  //Arreglo de Usuarios
  const [users, guardarUsers] = useState(userIniciales);

  const [modalInsertar, guardarEstado] = useState(false);
  // const [modalEditar, guardarEstadoE] = useState(false);
 

  //use effect  cuando se realiza alguna cambio en el estado
  useEffect(()=>{
    if(userIniciales){
      localStorage.setItem('users',JSON.stringify(users));
    }else{
      localStorage.setItem('users',JSON.stringify([]));
    }
  }, [users,userIniciales]);

  // funcion para mostar y ocultar los modales
  const mostrarModalInsertar=()=>{
    guardarEstado(true);

  };
  
  //Funcion para tomar todos los usuarios
  const insertar = user => {
    guardarUsers([
        ...users,
        user,
      ])
      guardarEstado(false)
      window.location.reload(true);

  };

      return (
        <Fragment>
          <Container>          
          <Grid container spacing={2}>
            <Grid item xs={6} className="titulo" >
               <Typography color='primary' variant='h5'>
                  <SupervisorAccountIcon style={{ fontSize: 30 }}/> 
                 Usuarios Existentes
                </Typography> 
            </Grid>
            <Grid item xs={6}  container direction="row" justify="flex-end" alignItems="center">
                <Button  color="primary" variant='contained' onClick={()=>mostrarModalInsertar()} disableElevation >Crear nuevo Usario</Button>
            </Grid>
          </Grid>
         

          </Container>

            {/* Tabla listar */}
          <Table size="small" aria-label="a dense table" >
            <TableHead>
              <TableRow font-weight='10px'>
                <TableCell >Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Identificacion (C.C)</TableCell>
                <TableCell>Rol asociado</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell>Correo electronico</TableCell>
                <TableCell>Accion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

                {userIniciales.map((elementos)=>(
                    <TableRow>
                         <TableCell>{elementos.nombre}</TableCell>
                         <TableCell>{elementos.apellido}</TableCell>
                         <TableCell>{elementos.identificacion}</TableCell>
                         <TableCell>{elementos.rol}</TableCell>
                         <TableCell>{elementos.estado}</TableCell>
                         <TableCell>{elementos.telefono}</TableCell>
                         <TableCell>{elementos.email}</TableCell>
                         <TableCell>  
                         <IconButton component="span" color='primary'>
                             <CreateTwoToneIcon/>
                         </IconButton> 
                         <IconButton component="span">
                           <DeleteForeverTwoToneIcon/>
                         </IconButton>
                            
                         </TableCell>
                     </TableRow>
                ))}
            </TableBody>
          </Table>
          <ModalUsuario
            modalInsertar={modalInsertar}
            guardarEstado={guardarEstado}
            insertar={insertar}
            userIniciales={userIniciales.identificacion}
          />
         
        </Fragment>
        
      );
  }


export default Usuario;
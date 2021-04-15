import React, { useState } from "react";
import uuid from 'react-uuid';



import {
  Table,
  Button,
  Modal,
  Container,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

function ModalUsuario({modalInsertar,guardarEstado,insertar}){
  
  const [user, agregarUser ] = useState({
     id:'',
     nombre: '',
     apellido: '',
     identificacion:'',
     rol: '',
     estado: '',
     telefono:'',
     email: ''
   });

   const actualizarState = e => {
      agregarUser({
            ...user,       
          [e.target.name]:e.target.value
        
      })
    }     
 
  const {id,nombre,apellido,identificacion,rol,estado,telefono,email} = user;

  //validacion de los datos
  const submitUser = e =>{
        //prevenir la opcion por defecto
        e.preventDefault();
      //validar datos
      if(nombre.trim() === '' || apellido.trim() === '' || identificacion.trim() === '' || rol.trim() === '' || estado.trim() === '' || telefono.trim() === '' || email.trim() === ''){
        console.log('Tenemos un problema');
      }else{
        //Asignar un ID
        user.id=uuid();
        
        //Crear Usuario
        insertar(user);
  
        // //Reiniciar el formulario
          agregarUser({
           id:'',
           nombre: '',
           apellido: '',
           identificacion:'',
           rol: '',
           estado: '',
           telefono:'',
           email: ''
          })
      }

  }


  return (
    <Modal isOpen={modalInsertar}>
      <form
        onSubmit={submitUser}
      >
        <ModalHeader>
          <div>
            <h3>Crear Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={actualizarState}
              value={nombre}
            />
          </FormGroup>
          <FormGroup>
            <label>Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              onChange={actualizarState}
              value={apellido}
            />
          </FormGroup>
          <FormGroup>
            <label>Identificacion:</label>
            <input
              className="form-control"
              name="identificacion"
              type="text"
              onChange={actualizarState}
              value={identificacion}
            />
          </FormGroup>
          <FormGroup>
            <label>Rol asociado:</label>
            <input
              className="form-control"
              name="rol"
              type="text"
              onChange={actualizarState}
              value={rol}
            />
          </FormGroup>
          <FormGroup>
            <label>Estado:</label>
            <input
              className="form-control"
              name="estado"
              type="text"
              onChange={actualizarState}
              value={estado}
            />
          </FormGroup>
          <FormGroup>
            <label>Telefono:</label>
            <input
              className="form-control"
              name="telefono"
              type="text"
              onChange={actualizarState}
              value={telefono}
            />
          </FormGroup>
          <FormGroup>
            <label>Correo electronico:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={actualizarState}
              value={email}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
        {/* onClick={()=>insertar(user)} */}
          <Button color="primary" type="submit">
            Insertar
          </Button>
          <Button color="danger" onClick={()=>guardarEstado(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default ModalUsuario;

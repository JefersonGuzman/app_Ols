import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Fondo from '../../assets/img/fondo.jpg';
import { Button } from '@material-ui/core';


import InputAdornment from '@material-ui/core/InputAdornment';
import PortraitIcon from '@material-ui/icons/Portrait';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Fondo})`,
        backgroundSize: 'cover',
        justifyContent: 'center',
        width: `calc(100vw)`,
        height:1000,

    },

    btn:{
        width:'100rem',
        height:'3rem',
    }
};


const Login = () => {
    return ( 
        <Fragment>
        <Paper style={styles.paperContainer}>
            <div className="form-usuario">
                <div className="contenedor-form">
                    <h1>Iniciar Sesion</h1>
                    <form>
                        <div className="campo-form">
                            <input className="input" type="text" id="usuario" name="usuario" placeholder="Usuario"/>
                        </div>
                        <div className="campo-form">
                            <input 
                                className="input"
                                type="password"
                                id="clave"
                                name="clave"
                                placeholder="Clave"
                                 />
                         </div>
                         <div className="campo-form">
                         <Button style={styles.btn} variant="contained" color="primary">
                            Inicio sesion
                        </Button>
                         </div>
                    </form>
                </div>
            </div>
        </Paper>

        </Fragment>
     );
}
 
export default Login;
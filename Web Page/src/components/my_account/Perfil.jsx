import React  from 'react'
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import './Perfil.css'

import userpfp from '../../images/users/user.jpg'

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: green[600],
      '&:hover': {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green[600],
    },
}));

const label = { inputProps: { 'aria-label': 'On/Off' } };

function Perfil() {
    return (
      <div className="main_containerE">
          <div className="myprofileE">Mi Perfil</div>
          <div className="profile_containerE">
              <div className="bar_containerE">
                  <div className="profileE">
                      <img src={userpfp} alt="" className="pfp_E" />
                      <p className="realnameE">Gabriela Muñoz</p>
                      <p className="usernameE">@gabimun</p>
                      <p className="user_emailE">gabimun2012@gmail.com</p>
                  </div>
                  <div className="action_barE">
                      <p className="current_linkE">Perfil</p>
                      <p className="linkE">Viajes</p>
                      <p className="linkE"><Link to="/my-account/posts" className="stlink">Publicaciones</Link></p>
                      <p className="linkE"><Link to="/my-account/albums" className="stlink">Álbumes</Link></p>
                  </div>
              </div>
              <div className='settings_gridE'>
                <div className='settingsE'>
                    <div className="datosE">Datos Personales</div>
                        <div class="row">
                            <p className='categoriasE'>Nombres y Apellidos:</p>
                            <p className='bioE'>Gabriela Muñoz</p>
                        </div>
                        <div class="row">
                            <p className='categoriasE'>Telefonos:</p>
                            <p className='bioE'>(51) 999 882 213</p>
                        </div>
                        <div class="row">
                            <p className='categoriasE'>DNI:</p>
                            <p className='bioE'>00138248</p>
                        </div>
                        <div class="rowbtn">
                        <button className="editar_btn" style={{ fontFamily: 'Poppins' }}>Editar</button>
                        </div>
                    </div>
                <div className='settingsE'>
                    <div className="datosE">Notificaciones</div>
                        <p className='categoriasE'>Descuentos y Ofertas:</p>
                        <GreenSwitch {...label}/>
                        <p className='categoriasE'>Foros:</p>
                        <GreenSwitch {...label}/>
                        <p className='categoriasE'>Seguidores:</p>
                        <GreenSwitch {...label}/>
                </div>
                <div className='settingsE'>
                    <div className="datosE">Privacidad</div>
                        <p className='categoriasE'>Cuenta Privada:</p>
                        <GreenSwitch {...label}/>
                </div>
                <div className='settingsE'>
                    <div className="datosE">Redes Sociales Vinculadas: </div>
                        <p className='categoriasF'>No cuenta con redes sociales vinculadas</p>
                        
                </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Perfil
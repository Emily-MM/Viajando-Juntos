import React from 'react'
import { Link } from 'react-router-dom';
import './MyAlbums.css'

import userpfp from '../../images/users/user.jpg'
import comment from '../../images/icons/comment-add.svg'
import heart_full from '../../images/icons/heart-full.svg'
import heart_empty from '../../images/icons/heart-empty.svg'
import postimg1 from '../../images/postsimg/bariloche.jpg'
import postimg2 from '../../images/placesimg/mar_de_plata.jpg'
import postimg3 from '../../images/placesimg/barranco.jpg'
import postimg4 from '../../images/placesimg/cartagena.jpg'
import addimg from '../../images/icons/add.png'


function MyAlbums() {
  return (
    <div className="main_containerP">
        <div className="myprofileP">Mi Perfil</div>
        <div className="profile_containerP">
            <div className="bar_containerP">
                <div className="profileP">
                    <img src={userpfp} alt="" className="pfp_P" />
                    <p className="realnameP">Gabriela Muñoz</p>
                    <p className="usernameP">@gabimun</p>
                    <p className="user_emailP">gabimun2012@gmail.com</p>
                </div>
                <div className="action_barP">
                    <p className="linkP">Perfil</p>
                    <p className="linkP">Viajes</p>
                    <p className="linkP"><Link to="/my-account/posts" className="stlink">Publicaciones</Link></p>
                    <p className="current_linkP"><Link to="/my-account/albums" className="stlink">Álbumes</Link></p>
                </div>
            </div>
            <div className="posts_gridP">
                <div className="postP">
                    <img src={postimg1} alt="" className="post_imgP" />
                    <img src={heart_full} alt="" className="iconsP" />
                    <img src={comment} alt="" className="iconsP" />
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Semana de esqui en Bariloche, Argentina!!</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg2} alt="" className="post_imgP" />
                    <img src={heart_full} alt="" className="iconsP" />
                    <img src={comment} alt="" className="iconsP" />
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Fotitos en Mar de plata, Argentina</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg3} alt="" className="post_imgP" />
                    <img src={heart_full} alt="" className="iconsP" />
                    <img src={comment} alt="" className="iconsP" />
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Sesion de fotos en Barranco, Peru</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg4} alt="" className="post_imgP" />
                    <img src={heart_full} alt="" className="iconsP" />
                    <img src={comment} alt="" className="iconsP" />
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Paisajes de Cartagena, Colombia.</p>
                    </div>
                </div>
                <div className="postP2">
                <Link to="/my-account/albums/add" className="stlink">
                    <img src={addimg} alt="" className="post_img" />
                    
                    <div className="post_descriptionP">
                        
                        <p className="descriptionP">
                            Agregar nuevo album...</p>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyAlbums
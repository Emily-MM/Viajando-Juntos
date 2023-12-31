import React from 'react'
import { Link } from 'react-router-dom';
import './MyPosts.css'

import userpfp from '../../images/users/user.jpg'
import comment from '../../images/icons/comment-add.svg'
import heart_full from '../../images/icons/heart-full.svg'
import heart_empty from '../../images/icons/heart-empty.svg'
import postimg1 from '../../images/postsimg/bariloche.jpg'


function MyPosts() {
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
                    <p className="current_linkP"><Link to="/my-account/posts" className="stlink">Publicaciones</Link></p>
                    <p className="linkP"><Link to="/my-account/albums" className="stlink">Álbumes</Link></p>
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
                            Siempre me interesó mucho aprender 
                            a esquiar. Tuve la oportunidad de hacerlo 
                            en Bariloche, Argentina.</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg1} alt="" className="post_imgP" />
                    <img src={heart_full} alt="" className="iconsP" />
                    <img src={comment} alt="" className="iconsP" />
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Siempre me interesó mucho aprender 
                            a esquiar. Tuve la oportunidad de hacerlo 
                            en Bariloche, Argentina.</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg1} alt="" className="post_imgP" />
                    <img src={heart_full} alt="" className="iconsP" />
                    <img src={comment} alt="" className="iconsP" />
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Siempre me interesó mucho aprender 
                            a esquiar. Tuve la oportunidad de hacerlo 
                            en Bariloche, Argentina.</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg1} alt="" className="post_imgP" />
                    <img src={heart_full} alt="" className="iconsP" />
                    <img src={comment} alt="" className="iconsP" />
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Siempre me interesó mucho aprender 
                            a esquiar. Tuve la oportunidad de hacerlo 
                            en Bariloche, Argentina.</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg1} alt="" className="post_img" />
                    <img src={heart_full} alt="" className="iconsP" />
                    <img src={comment} alt="" className="iconsP" />
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Siempre me interesó mucho aprender 
                            a esquiar. Tuve la oportunidad de hacerlo 
                            en Bariloche, Argentina.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPosts
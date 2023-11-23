import React from 'react'
import { Link } from 'react-router-dom';
import './MyPosts.css'

import userpfp from '../../images/users/user.jpg'
import comment from '../../images/icons/comment-add.svg'
import heart_full from '../../images/icons/heart-full.svg'
import heart_empty from '../../images/icons/heart-empty.svg'
import postimg1 from '../../images/postsimg/bariloche.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'
import {useState} from 'react'

function MyPosts() {
    const Usuario = {
        name: 'Gabriela Muñoz',
        username: '@gabimun',
        email: 'gabimun2012@gmail.com',
    }
    const [modalActualizar, setModalActualizar] = useState(false);
    const [form, setForm] = useState({
      name: Usuario.name,
      username: Usuario.username,
      email: Usuario.email,
    });
  
    const mostrarModalActualizar = (dato) => {
      setForm(dato);
      setModalActualizar(true);
    };
  
    const cerrarModalActualizar = () => {
      setModalActualizar(false);
    };
  
    const editar = (dato) => {
        let arreglo = dato;
      setForm(arreglo);
      setModalActualizar(false);
    };
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
        [e.target.username]: e.target.value,
        [e.target.email]: e.target.value
      });
    };

  return (
    <div className="main_containerP">
        <div className="myprofileP">Mi Perfil</div>
        <div className="profile_containerP">
            <div className="bar_containerP">
                <div className="profileP">
                    <img src={userpfp} alt="" className="pfp_P" />
                    <p className="realnameP">{form.name}</p>
                    <p className="usernameP">{form.username}</p>
                    <p className="user_emailP">{form.email}</p>
                    <Button onClick={() => mostrarModalActualizar(form)}>Editar perfil</Button>
                    <Modal isOpen={modalActualizar}>
                        <ModalHeader>
                            <div><h3>Editar usuario</h3></div>
                        </ModalHeader>

                        <ModalBody>
                            <FormGroup>
                            <label>
                                Nombre:
                            </label>
                            <input
                                className="form-control"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={form.name}
                            />
                            </FormGroup>

                            <FormGroup>
                            <label>
                                Nombre de usuario:
                            </label>
                            <input
                                className="form-control"
                                name="username"
                                type="text"
                                onChange={handleChange}
                                value={form.username}
                            />
                            </FormGroup>

                            <FormGroup>
                            <label>
                                Email:
                            </label>
                            <input
                                className="form-control"
                                name="email"
                                type="text"
                                onChange={handleChange}
                                value={form.email}
                            />
                            </FormGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" onClick={() => editar(form)}>
                            Editar
                            </Button>
                            <Button color="danger" onClick={cerrarModalActualizar}>
                            Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="action_barP">
                    <p className="linkP">Perfil</p>
                    <p className="linkP"><Link to="/my-account/travels" className="stlink">Viajes</Link></p>
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
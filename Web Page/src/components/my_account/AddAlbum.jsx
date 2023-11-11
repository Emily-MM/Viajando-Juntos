import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddAlbum.css'

import userpfp from '../../images/users/user.jpg'



function AddAlbum() {
    const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

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
          <div className="create_album_container">
            <h2 style={{ fontFamily: 'Poppins' ,width:'100%'}}>Crear nuevo álbum</h2>
            <div className="input_container">
              <label style={{ fontFamily: 'Poppins' }}>Título del álbum:<br/></label>
              <input type="text" placeholder="Ingrese el título del álbum" style={{ fontFamily: 'Poppins' , width: '200px',borderRadius: '10px',padding: '7px', marginBottom:'40px'}} />
            </div>
            <div className="upload_container">
              <label style={{ fontFamily: 'Poppins' }}>Subir fotos:<br/></label>
              <input type="file" multiple onChange={handleFileChange} style={{ fontFamily: 'Poppins' ,marginBottom:'40px'}} />
              {images.length > 0 && (
                <div className="image_preview">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px', margin: '10px 0', marginLeft:'10px' }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="description_container">
              <label style={{ fontFamily: 'Poppins' }}>Descripción:<br/></label>
              <textarea
                placeholder="Agregue una descripción"
                style={{ fontFamily: 'Poppins', width: '100%', padding: '10px', borderRadius: '10px' }}
              ></textarea>
            </div>
            <button className="create_album_button" style={{ fontFamily: 'Poppins' }}><Link to="/my-account/albums" className="stlink">
              Crear Álbum
              </Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAlbum
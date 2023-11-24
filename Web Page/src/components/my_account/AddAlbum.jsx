import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './AddAlbum.css'

import userpfp from '../../images/users/user.jpg';
import axios from 'axios';


function AddAlbum() {
    const [images, setImages] = useState([]);
    /*const [title, setTitle]= useState("");
    const [description, setDes]= useState("");*/
    const [formData, setFormData]=useState({
      title:" ",
      description:" "
    });

    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit= async()=>{
      try{
        const result= await axios.post("http://localhost:4000/api/album/", formData);
        console.log("Post Created", result.data);
      }catch(error){
        console.error("Error Creating post: ", error.response.data);
      }
    };
    /*useEffect(()=>{
      axios.post("http://localhost:4000/api/album/", formData)
      .then(function(response){
        console.log(response.data)
      })
      .catch(function(error){
        console.log(error.response.data)
      })
    },[])*/

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
            <form onSubmit={handleSubmit}>
            <h2 style={{ fontFamily: 'Poppins' ,width:'100%'}}>Crear nuevo álbum</h2>
            <div className="input_container">
              <label style={{ fontFamily: 'Poppins' }}>Título del álbum:<br/></label>
              <input type="text" placeholder="Ingrese el título del álbum" style={{ fontFamily: 'Poppins' , width: '200px',borderRadius: '10px',padding: '7px', marginBottom:'40px'}} 
              name="title"
              
              onChange={handleChange}/>
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
                name="description"
                
                onChange={handleChange}

              ></textarea>
            </div>
            <button type='submit' className="create_album_button" style={{ fontFamily: 'Poppins' }}>
              Crear Álbum
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAlbum
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import Kyoto from './components/places/kyoto/KyotoAbout';
import BicicleterosPE from './components/communities/BicicleterosPE';
import MyPosts from './components/my_account/MyPosts';
import Register from './components/FlightBooking';
import HotelBooking from './components/HotelBooking';
import MyAlbums from './components/my_account/MyAlbums';
import AddAlbum from './components/my_account/AddAlbum';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/places/Kyoto-Japan' element = {<Kyoto/>}></Route>
          <Route path='/Flight-Booking' element={<Register/>}></Route>
          <Route path='/Hotel-Booking' element={<HotelBooking/>}></Route>
          <Route path='/communities/Bicicleteros-PE' element = {<BicicleterosPE/>}></Route>
          <Route path='/my-account/posts' element = {<MyPosts/>}></Route>
          <Route path='/my-account/albums' element = {<MyAlbums/>}></Route>
          <Route path='/my-account/albums/add' element = {<AddAlbum/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

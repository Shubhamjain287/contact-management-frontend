import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Register from './components/Register';
import Errorpage from './components/Errorpage';
import AddContact from './Contact/AddContact';
import EditContact from './Contact/EditContact';
import SSR from './components/SSR';

const App = () => {
  
  return ( 
    <>
      <ToastContainer position='top-center' />
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contacts" element={<Contacts/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/addcontacts" element={<AddContact/>} />
          <Route exact path="/editcontact/:id" element={<EditContact/>} />
          <Route exact path="/Sakshi" element={<SSR/>} />
          <Route path="*" element={<Errorpage/>} />
        </Routes>
    </>
  )
}

export default App;
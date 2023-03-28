import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Fragment } from 'react';
import { Box } from '@mui/material';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <BrowserRouter>
        <Fragment>
          <Routes>
          <Route path='/' element = {<SignUp />} />
          <Route path='/login' element ={<Login/>}/>
          </Routes>
        </Fragment>

      </BrowserRouter>

    </Box>
  )
}

export default App
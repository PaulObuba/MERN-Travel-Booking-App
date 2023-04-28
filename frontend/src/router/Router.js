import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import ToursDetails from '../pages/ToursDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ThankYou from '../pages/ThankYou';
import SearchResultList from '../pages/SearchResultList';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home /> } />
        <Route path='/tours' element={<Tours /> } />
        <Route path='tours/:id' element={<ToursDetails /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/tours/search' element={<SearchResultList /> } />
      </Routes>
    </>
  )
}

export default Router
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from '../Main/Main'
import PageNotFound from '../PageNotFound/PageNotFound'

import './App.scss'
import Header from '../Header/Header'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          element={<Main />}
        />
        <Route
          path='/404'
          element={<PageNotFound />}
        />
      </Routes>
    </div >
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../Header/Header'
import Main from '../Main/Main'
import PageNotFound from '../PageNotFound/PageNotFound'
import MyEvents from '../MyEvents/MyEvents'
import { getEventsList } from '../../api/mainData'

import './App.scss'

const App = () => {

  React.useEffect(() => {
    if (!localStorage.eventsList) {
      getEventsList()
        .then((data) => {
          localStorage.setItem('eventsList', JSON.stringify(data))
        })
        .catch((err) => console.log(err))
    }
  }, [])

  console.log(JSON.parse(localStorage.getItem('eventsList')))


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
          path='/my-events'
          element={<MyEvents />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </div >
  )
}

export default App

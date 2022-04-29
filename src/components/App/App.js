import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Header from '../Header/Header'
import Main from '../Main/Main'
import PageNotFound from '../PageNotFound/PageNotFound'
import MyEvents from '../MyEvents/MyEvents'
import EventItem from '../EventItem/EventItem'
import { getEventsList } from '../../functions/api'
import { data } from '../../utils/data'

const App = () => {
  const [localData, setLocalData] = useState(false)

  useEffect(() => {
    if (!localStorage.eventsList) {
      getEventsList()
        .then((res) => {
          // console.log('update localStorage')
          localStorage.setItem('eventsList', JSON.stringify(res))
          const tempArr = res.filter(card => !!card.visitors)
          data.user.myEvents = tempArr.filter(card => card.visitors.includes(data.user.name))
          setLocalData(true)
        })
        .catch((err) => console.error(err))
    } else {
      // data.user.myEvents <- не потерять данные при вводе в адресной строке 
      const tempArr = JSON.parse(localStorage.getItem('eventsList')).filter(card => !!card.visitors)
      data.user.myEvents = tempArr.filter(card => card.visitors.includes(data.user.name))
      setLocalData(true)
    }
  }, [])

  return (
    <>
      {
        localData &&
        <div className='app'>
          <Header />
          <Routes>
            <Route path='events-calendar' element={<Main />} />
            <Route path='events-calendar'>
              <Route path=':id' element={<EventItem />} />
              <Route path='my-events' element={<MyEvents />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div >
      }
    </>
  )
}

export default App

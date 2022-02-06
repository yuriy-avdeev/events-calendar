import React from 'react'

import './SelectArea.scss'
import { data } from '../../utils/data'


const SelectArea = ({ changeSelect, shift }) => {
  const [selectedYear, setSelectedYear] = React.useState('')
  const [selectedMonth, setSelectedMonth] = React.useState('')


  React.useEffect(() => {
    const date = new Date()
    !data.changedYear && (data.changedYear = String(date.getFullYear()))
    !data.changedMonth && (data.changedMonth = String(date.getMonth() + 1)) // янв -> 1, фев -> 2...
    // let month = String(date.toLocaleString('ru', { month: 'long' }).substring(0, 3)) // -> фев
    // data.changedMonth = month[0].toUpperCase() + month.slice(1) // -> Фев
    setSelectedYear(data.changedYear)
    setSelectedMonth(data.months[+data.changedMonth - 1])
  }, [])


  const handleChangeForm = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === 'year') {
      setSelectedYear(value)
      data.changedYear = value
    } else {
      setSelectedMonth(value)
      const idx = data.months.findIndex(m => m === value)
      data.changedMonth = String(idx + 1) // янв -> 1, фев -> 2...
    }
    
    changeSelect()
  }


  return (
    <div className='select__container' style={{right: `-${shift}px`}}>
      <select
        name='year'
        className='select__form'
        value={selectedYear}
        onChange={handleChangeForm}
      >
        {
          data.years.map(year =>
            <option value={year} key={year}>
              {year}
            </option>
          )
        }
      </select>

      <select
        name='month'
        className='select__form'
        value={selectedMonth}
        onChange={handleChangeForm}
      >
        {
          data.months.map(month =>
            <option value={month} key={month}>
              {month}
            </option>
          )
        }
      </select>
    </div>
  )
}

export default SelectArea
import { useEffect, useState } from 'react'

import './PopupForm.scss'
import EventShortInfo from '../EventShortInfo/EventShortInfo'


const PopupForm = (({ card, defaultName, defaultLastName, avatar, changeVisitorsList, closePopup }) => {
  // const [form, setForm] = React.useState({})
  const [name, setName] = useState(defaultName)
  const [lastName, setLastName] = useState(defaultLastName)
  const [disableButton, setDisableButton] = useState(true)


  useEffect(() => {
    // name.length > 1 && lastName.length > 1 ?
    name === defaultName && lastName === defaultLastName ? // в такой логике - можно брать не из формы, а из data.user
      setDisableButton(false)
      :
      setDisableButton(true)
  }, [name, lastName, defaultName, defaultLastName])


  const onSubmit = (e) => {
    e.preventDefault()
    // -> api:post -> async func(form)
    const newVisitor = [name, lastName].join(' ')
    changeVisitorsList(newVisitor)
    closePopup()
  }


  const cancelInput = () => {
    setName('')
    setLastName('')
    closePopup()
  }


  const changeForm = (e) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    // setForm({ ...form, [inputName]: inputValue })
    inputName === 'name' ?
      setName(inputValue)
      :
      setLastName(inputValue)
  }


  return (
    <div className='form__container'>
      <div className='form__box-header'>
        <h2 className='form__title'>Записаться на событие</h2>
        <button className='form__close' onClick={closePopup}></button>
      </div>

      <div className='form__box-body'>
        <EventShortInfo
          card={card}
          avatar={avatar}
        />

        <form className='form__box' onSubmit={onSubmit} id='popupForm'>
          <input
            name='name'
            className='form__input'
            value={name}
            type='text'
            minLength='2'
            maxLength='12'
            onChange={changeForm}
            placeholder='Имя'
          />
          <input
            name='lastName'
            className='form__input'
            value={lastName}
            type='text'
            minLength='2'
            maxLength='12'
            onChange={changeForm}
            placeholder='Фамилия'
          />
        </form>
      </div>

      <div className='form__box-bottom'>
        <button className='form__button' type='button' onClick={cancelInput}>
          ОТМЕНА
        </button>

        <button
          form='popupForm'
          className={`form__button form__button_submit ${(disableButton) && 'form__button_disabled'}`}
          type='submit'
          disabled={disableButton}
        >
          OK
        </button>
      </div>
    </div>

  )
})

export default PopupForm
import './PopupConfirm.scss'


const PopupConfirm = ({ changeVisitorsList, closePopup }) => {
  const clickNo = () => {
    closePopup()
  }

  const clickYes = () => {
    changeVisitorsList()
    closePopup()
  }

  return (
    <div className='confirm__container'>
      <h2 className='confirm__title'>Are you sure you want to cancel?</h2>

      <div className='confirm__box-bottom'>
        <button
          className='confirm__button'
          type='button'
          onClick={clickNo}
        >
          NO
        </button>

        <button
          className='confirm__button confirm__button_confirm'
          type='button'
          onClick={clickYes}
        >
          YES
        </button>
      </div>
    </div>
  )
}

export default PopupConfirm

import { useEffect } from 'react'
import './Popup.scss'


const Popup = (({ closePopup, content }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      e.key === 'Escape' && closePopup()
    }

    document.addEventListener('keyup', handleEsc)

    return () => {
      document.removeEventListener('keyup', handleEsc)
    }
  }, [closePopup])


  const handleFieldClick = (e) => {
    e.target === e.currentTarget && closePopup()
  }


  return (
    <div className='popup' onClick={handleFieldClick}>
      {content}
    </div >
  )
})

export default Popup

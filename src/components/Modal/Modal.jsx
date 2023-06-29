import { useEffect } from 'react'
import styles from './Modal.module.css'

function Modal({ onClose, url }) {
  useEffect(() => {
    window.addEventListener("keydown", keyDown)
    return () => {
      window.removeEventListener("keydown", keyDown)
    }
  }, [])
  
  function overlayClick(event){
    console.log(event.target)
    console.log(event.currentTarget)
    if(event.target === event.currentTarget){
      onClose();
    }
  }

  function keyDown(event){
    if(event.code === "Escape"){
      onClose()
    }
  }

  return (
    <div>
        <div className={styles.Overlay} onClick={overlayClick}>
            <div className={styles.Modal}>
                  <img src={url} alt="" />
            </div>
        </div>
    </div>
  )
}
export default Modal
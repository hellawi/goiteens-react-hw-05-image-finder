import styles from './ImageGalleryItem.module.css'
function ImageGalleryItem({ webFormatUrl, onOpen, largeImageURL }) {
  return (
    <div>
       <img src={webFormatUrl} alt="photo" className={styles.imgItem} onClick={() => onOpen(largeImageURL)} />
    </div>
  )
}
export default ImageGalleryItem
import styles from './ImageGalleryItem.module.css'
function ImageGalleryItem({ webFormatUrl }) {
  return (
    <div>
       <img src={webFormatUrl} alt="" className={styles.imgItem} />
    </div>
  )
}
export default ImageGalleryItem
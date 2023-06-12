import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import styles from './ImageGallery.module.css'

function ImageGallery({ images }) {
  return (
    <div>
        <ul className={styles.imageGallery}>
        {images.map(({ id, webformatURL }) => (
        <li key={id} className={styles.imgGlrItm}>
            <ImageGalleryItem webFormatUrl={webformatURL}/>
        </li>
      ))}
    </ul>
    </div>
  )
}
export default ImageGallery
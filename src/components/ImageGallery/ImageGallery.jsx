import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import styles from './ImageGallery.module.css'

function ImageGallery({ images, onOpen }) {
  return (
    <div>
        <ul className={styles.imageGallery} >
        {images.map(({ id, webformatURL, largeImageURL }) => (
        <li key={id} className={styles.imgGlrItm}>
            <ImageGalleryItem webFormatUrl={webformatURL} largeImageURL={largeImageURL} onOpen={onOpen}/>
        </li>
      ))}
    </ul>
    </div>
  )
}
export default ImageGallery
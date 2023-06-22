import { useState, useEffect } from 'react'
import { Alert, AlertTitle } from '@mui/material'

import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'

import './index.css'
import { searchImages } from './services/imagesService'
import Loader from './components/Loader/Loader'

function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    if (query === ''){
      return;
    }
      setLoading(true)
      searchImages(query, page)
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits])
        setPagesCount(Math.ceil(data.totalHits/12))
      })

      .finally(() => setLoading(false))
  }, [query, page])


  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, [images])
  
  function openModal(largeImageURL){
    setModalImage(largeImageURL)
  }

  function closeModal(){
    setModalImage(null)
  }
  function loadMore(){
    setPage((prevPage) => prevPage + 1)
  }
  function search(newQuery){
    setQuery(newQuery)
    setPage(1)
    setImages([])
  }

  return (
    <div>
      {modalImage && <Modal onClose={closeModal} url={modalImage} />}
      {loading && <div className='background'>
        <div className="spinner">
          <Loader visible={loading}/>
        </div>
      </div> }
      {/* {modalImage && <Modal largeImageURL={modalImage} onClose={closeModal}/> } */}
      <header className='SearchBar'>
        <div className="header-title-box">
          <h1 className='header-title'>Search of images...</h1>
        </div>
        <SearchBar onSearch={search} />
      </header>
      {images.length !== 0 ? <ImageGallery images={images} onOpen={openModal} /> : <Alert severity="error">
                                                              <AlertTitle>Error</AlertTitle>
                                                              No available pictures!
                                                            </Alert> }
      {page < pagesCount && <Button onClick={loadMore}></Button>}
    </div>
  )
}
export default App
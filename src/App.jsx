import { useState, useEffect } from 'react'
import { Alert, AlertTitle, Button } from '@mui/material'

import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'

import './index.css'
import { searchImages } from './services/imagesService'
import Loader from './components/Loader/Loader'

function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  useEffect(() => {
    if (query === ''){
      return;
    }
      setLoading(true)
      searchImages(query, page)
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits])
        setPagesCount(data.nbPages)
      })

      .finally(() => setLoading(false))
  }, [query, page])

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
      {loading && <div className='background'>
        <div className="spinner">
          <Loader visible={loading}/>
        </div>
      </div> }
      <header className='SearchBar'>
        <div className="header-title-box">
          <h1 className='header-title'>Images</h1>
        </div>
        <SearchBar onSearch={setQuery} />
      </header>
      <ImageGallery images={images} />
      {images.length !== 0 ? <ImageGallery images={images} /> : <Alert severity="error">
                                                              <AlertTitle>Error</AlertTitle>
                                                              No available pictures!
                                                            </Alert> }
      {images.length !== 0 && <Button onClick={loadMore}>load more</Button>}
    </div>
  )
}
export default App
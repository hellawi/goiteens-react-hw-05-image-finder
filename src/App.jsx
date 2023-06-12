import { useState, useEffect } from 'react'
import { Alert, AlertTitle } from '@mui/material'

import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'

import './index.css'
import { searchImages } from './services/imagesService'
import Loader from './components/Loader/Loader'

function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      searchImages(query, 1).then((data) => {
        setImages(data.hits)
      })
      .finally(() => setLoading(false))
  }, [query])

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
      {query !== query ? <ImageGallery images={images} /> : <Alert severity="error">
                                                              <AlertTitle>Error</AlertTitle>
                                                              Pictures for request <strong>{query}</strong> is not found!
                                                            </Alert> }
    </div>
  )
}
export default App
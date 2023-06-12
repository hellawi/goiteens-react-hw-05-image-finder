import { useState } from "react"
import styles from './SearchBar.module.css'

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('')
    function handleSubmit(event){
        event.preventDefault()
        onSearch(query)
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className={styles.searchForm}>
            <input type="search" placeholder="Search..." className={styles.searchInput} value={query} onChange={(event) => setQuery(event.target.value) } />
            <button className={styles.searchButton}>Search</button>
        </form>
    </div>
  )
}
export default SearchBar
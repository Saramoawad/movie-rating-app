import styles from './Search.module.css'
function Search({searchQuery,setSearchQuery}){
return <input type="text" className={styles.searchInput} placeholder='Search...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
}
export default Search;
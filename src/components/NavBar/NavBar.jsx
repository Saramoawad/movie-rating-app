import Search from "../Search/Search";
import styles from './NavBar.module.css'
import Filter from "../Filter/Filter";
function NavBar({ movies, isLoading, onAddMovie ,selectedGenre,setSelectedGenre ,searchQuery,setSearchQuery}) {
  const avgRating = movies && movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length;

  return (
    <nav className={styles.navbar}>
      <div className={styles.calc}>
        <p>Total Movie: {movies ? movies.length : 'No Movies'}</p>
        <p>Average Rating: {!isLoading ? avgRating.toFixed(2) : <i className="fa-solid fa-spinner" style={{ color: '#fff' }}></i>}</p>
      </div>
      <div>
        <Filter selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <button className={styles.btn} onClick={onAddMovie}>Add Movie</button>
      </div>
    </nav>
  );
}

export default NavBar;

import Search from "../Search/Search";
import styles from './NavBar.module.css'

function NavBar({ movies, isLoading, onAddMovie }) {
  const avgRating = movies && movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length;

  return (
    <nav className={styles.navbar}>
      <div className={styles.calc}>
        <p>Total Movie: {movies ? movies.length : 'No Movies'}</p>
        <p>Average Rating: {!isLoading ? avgRating.toFixed(2) : <i className="fa-solid fa-spinner" style={{ color: '#fff' }}></i>}</p>
      </div>
      <div>
        <Search />
        <button className={styles.btn} onClick={onAddMovie}>Add Movie</button>
      </div>
    </nav>
  );
}

export default NavBar;

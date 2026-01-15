import Search from "../Search/Search";
import styles from './NavBar.module.css'
 
function NavBar({movies,isLoading}) {
  const avgRating=movies&&movies.reduce((acc,movie)=>acc+movie.rating,0)/movies.length 
  return (
    <nav className={styles.navbar}>
      <div className={styles.calc}>
        <p>Total Movie :{movies?movies.length : 'No Movies'}</p>
        <p>Average Rating:{!isLoading?avgRating:'loading rate'}</p>
      </div>
      <div>
        <Search />
        <button className={styles.btn}>Remove Movie</button>
        <button className={styles.btn}>Add Movie</button>
      </div>
    </nav>
  );
}
export default NavBar;

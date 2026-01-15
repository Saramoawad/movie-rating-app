import styles from "./Card.module.css";
import Rating from "../Rating/Rating";
function Card({ movie, setMovies }) {
  return (
    <div className={styles.card}>
        <div >
        <i className={`fa-solid fa-star ${styles.ratingI} `}></i>
            <span className={styles.rateNum}>{movie.rating}</span>
        </div>
      <img className={styles.image} src={movie.image} />
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{movie.name}</h3>
        <div>
          {movie.genres.map((gener) => (
            <span className={styles.gener} key={gener}>
              {gener}
            </span>
          ))}
        </div>
        <p className={styles.cardP}>{movie.description}</p>
        <Rating movie={movie} setMovies={setMovies} />
      </div>
    </div>
  );
}
export default Card;

import styles from "./Card.module.css";
import Rating from "../Rating/Rating";
import { deleteMovie } from "../../api/movieApi";
function Card({ movie, setMovies, onEdit }) {
  
    const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${movie.name}"?`
    );

    if (!confirmDelete) return;

    deleteMovie(movie.id).then(() => {
      setMovies(prev =>
        prev.filter(m => m.id !== movie.id)
      );
    });
  }
  return (
    <div className={styles.card}>
      <div>
        <i className={`fa-solid fa-star ${styles.ratingI}`}></i>
        <span className={styles.rateNum}>{movie.rating}</span>
      </div>
      <img className={styles.image} src={movie.image} alt={movie.name} />
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
        <div className={styles.cardActions}>
          <Rating movie={movie} setMovies={setMovies} />
          <button
            className={styles.editBtn}
            onClick={() => onEdit(movie)}
            title="Edit Movie"
          >
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className={styles.deleteBtn} title="Delete Movie">
            <i className="fa-solid fa-trash" onClick={handleDelete}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

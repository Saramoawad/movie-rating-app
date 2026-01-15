import { editMovie } from "../../api/movieApi";
import styles from "./Rating.module.css";

function Rating({ movie, setMovies }){
    const handleRate = (newRating) => {
      setMovies((prevMovies) =>
        prevMovies.map((m) =>
          m.id === movie.id ? { ...m, rating: newRating } : m
        )
      );
    const updatedMovie = { ...movie, rating: newRating };

    editMovie(movie.id, updatedMovie).catch((err) => {
      console.error("Failed to update rating", err);
    });
  };

    return (
      <div className={styles.rating}>
      <p>Rating: ({movie.rating}/5)</p>
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
        key={star}
        onClick={() => handleRate(star)}
        >
         <i className={`fa-solid fa-star ${star <= movie.rating ? styles.active : ""} `}></i>
        </span>
      ))}
    </div>
      </div>
  );
}
export default Rating;
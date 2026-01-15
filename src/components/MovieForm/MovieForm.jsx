import { useState } from "react";
import styles from "./MovieForm.module.css";

function MovieForm({ initialMovie, onSubmit, onCancel }) {
  const [movie, setMovie] = useState({
    name: initialMovie?.name || "",
    description: initialMovie?.description || "",
    image: initialMovie?.image || "",
    genres: initialMovie?.genres || [],
    inTheaters: initialMovie?.inTheaters || false,
    rating: initialMovie?.rating || 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;

    if (type === "checkbox") {
      setMovie({ ...movie, [name]: checked });
    } else if (type === "select-multiple") {
      const selected = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setMovie({ ...movie, [name]: selected });
    } else {
      setMovie({ ...movie, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(movie);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Movie name"
          name="name"
          value={movie.name}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={movie.description}
          onChange={handleChange}
          placeholder="No description"
        ></textarea>

        <label>Image</label>
        <input
          name="image"
          value={movie.image}
          onChange={handleChange}
          type="text"
          placeholder="Image URL"
        />

        <label>Genres</label>
        <select
          multiple
          name="genres"
          value={movie.genres}
          onChange={handleChange}
        >
          <option value="Drama">Drama</option>
          <option value="Crime">Crime</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
        </select>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="inTheaters"
            checked={movie.inTheaters}
            onChange={handleChange}
          />
          In theaters
        </label>

        <div className={styles.formAction}>
          <button type="button" className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className={styles.update}>
            {initialMovie ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default MovieForm;

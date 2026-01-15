import { useEffect, useState } from "react";
import { getMovies, addMovie, editMovie } from "../../api/movieApi";
import Card from "../../components/Card/Card";
import styles from "./MoviesList.module.css";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import MovieForm from "../../components/MovieForm/MovieForm";
import Filter from "../../components/Filter/Filter";
function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    getMovies()
      .then((res) => {
        setMovies(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        navigate("/error");
        console.log(err);
      });
  }, []);

  const handleAddMovie = () => {
    setEditingMovie(null);
    setShowForm(true);
  };

  const handleEditMovie = (movie) => {
    setEditingMovie(movie);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingMovie(null);
  };

  const filteredMovies =
  selectedGenre === "All"
    ? movies
    : movies.filter(movie =>
        movie.genres.includes(selectedGenre)
      );


  const handleSubmitForm = (movieData) => {
    if (editingMovie) {
      // Update existing movie
      editMovie(editingMovie.id, movieData)
        .then((res) => {
          setMovies(movies.map((m) => (m.id === editingMovie.id ? res.data : m)));
          handleCloseForm();
        })
        .catch((err) => {
          console.error("Error updating movie:", err);
        });
    } else {
      // Add new movie
      addMovie(movieData)
        .then((res) => {
          setMovies([...movies, res.data]);
          handleCloseForm();
        })
        .catch((err) => {
          console.error("Error adding movie:", err);
        });
    }
  };

  return (
    <>
      {showForm && (
        <MovieForm
          initialMovie={editingMovie}
          onSubmit={handleSubmitForm}
          onCancel={handleCloseForm}
        />
      )}
      <NavBar movies={movies} isLoading={isLoading} onAddMovie={handleAddMovie} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
      {isLoading && <Loader />}
      <div className={styles.list}>
        {filteredMovies.map((movie) => (
          <Card
            movie={movie}
            setMovies={setMovies}
            onEdit={handleEditMovie}
            key={movie.id}
          />
        ))}
      </div>
    </>
  );
}

export default MoviesList;

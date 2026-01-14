import styles from './Card.module.css'
function Card({movie,setMovies}){
    return (
        <div className={styles.card}>
            <img className={styles.image} src={movie.image}/>
            <span>{movie.genres}</span>
            <img src='giphy.gif'/>
        </div>
    )
}
export default Card;
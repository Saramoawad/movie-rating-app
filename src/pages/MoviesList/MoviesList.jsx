import { useEffect, useState } from "react";
import {getMovies} from '../../api/movieApi';
import Card from "../../components/Card/Card";
import styles from './MoviesList.module.css'
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
function MoviesList(){
    const [movies,setMovies]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const navigate=useNavigate();
    useEffect(()=>{
        getMovies()
        .then(res=>{setMovies(res.data)
            setIsLoading(false);
        })
        .catch(err=>{
            navigate('/error')
            console.log(err)})
    },[]);


    return<>
    <h1>Movie App</h1>
    {isLoading&&<Loader/>}
    <div className={styles.list}> {movies.map(movie=><Card movie={movie} setMovies={setMovies} key={movie.id}/>)}</div>
    
    
    </>
}
export default MoviesList;
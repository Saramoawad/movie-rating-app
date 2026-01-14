import axios from "axios";

const BASE_URL=import.meta.env.VITE_BASE_URL;


export const getMovies=()=>axios.get(`${BASE_URL}/items`)

// add movie
export const addMovie=(movie)=>axios.post(`${BASE_URL}/items`,movie);
// update
export const editMovie=(id,movie)=>axios.put(`${BASE_URL}/items/${id}`,movie);
// delete
export const deleteMovie=(id)=>axios.delete(`${BASE_URL}/items/${id}`)

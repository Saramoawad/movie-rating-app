import Error from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";
import MoviesList from "./pages/MoviesList/MoviesList";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList/>}/>
          <Route path="/error" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

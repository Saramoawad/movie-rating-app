import Error from "./components/Error/Error";
import MovieForm from "./components/MovieForm/MovieForm";
import NavBar from "./components/NavBar/NavBar";
import MoviesList from "./pages/MoviesList/MoviesList";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/add" element={<MovieForm />} />
          <Route path="/edit/:id" element={<MovieForm />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
